import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import wyw from '@wyw-in-js/vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import path from 'path';
import fg from 'fast-glob';

const componentsDir = path.resolve(__dirname, 'src');

/**
 * Find all index.tsx or index.ts files in the src directory (one per component).
 */
const componentEntryFiles = fg.sync('*/index.{ts,tsx}', {
  cwd: componentsDir,
  onlyFiles: true,
});

/**
 * Build an object where:
 * - key = component name in kebab-case (directory name)
 * - value = absolute path to its index.tsx or index.ts file
 *
 * Example:
 * {
 *   'button': './src/button/index.tsx',
 *   'modal': './src/modal/index.ts',
 *   'card': './src/card/index.tsx'
 * }
 */
const entries = componentEntryFiles.reduce<Record<string, string>>(
  (acc, relativePath) => {
    const [dirName] = relativePath.split('/');
    const kebabName = dirName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    acc[kebabName] = path.resolve(componentsDir, relativePath);
    return acc;
  },
  {}
);

export default defineConfig({
  plugins: [
    libInjectCss(),
    dts({
      outDir: path.resolve(__dirname, 'dist', 'types'),
    }),
    wyw({
      include: ['src/**/*.{ts,tsx}'],
      babelOptions: {
        presets: [
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
    }),
  ],
  build: {
    lib: {
      entry: entries,
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    target: 'es2020',
  },
});
