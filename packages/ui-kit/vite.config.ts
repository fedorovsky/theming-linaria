import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import wyw from '@wyw-in-js/vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import path from 'path';
import { readdirSync } from 'fs';

const componentDirs = readdirSync(path.resolve(__dirname, 'src'), {
  withFileTypes: true,
})
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

export default defineConfig({
  plugins: [
    libInjectCss(),
    dts({ include: ['src'], exclude: ['**/*.stories.ts', '**/*.stories.tsx'] }),
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
      // несколько точек входа (каждый компонент отдельно)
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        ...Object.fromEntries(
          componentDirs.map((name) => [
            name,
            path.resolve(__dirname, `src/${name}/index.ts`),
          ])
        ),
      },
      formats: ['es'],
      fileName: (format, entryName) =>
        entryName === 'index'
          ? `index.${format}.js`
          : `${entryName}/index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        dir: 'dist',
        chunkFileNames: ({ name }) =>
          name && name !== 'index'
            ? `${name}/[name].js`
            : 'chunks/[name]-[hash].js',
        assetFileNames: '[name]/[name].[ext]',
      },
    },
    target: 'es2020',
  },
});
