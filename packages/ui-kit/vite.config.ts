import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import wyw from '@wyw-in-js/vite';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import path from 'path';
import { readdirSync } from 'fs'

const componentDirs = readdirSync(path.resolve(__dirname, 'src'), { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)

export default defineConfig({
  plugins: [
    libInjectCss(),
    dts({ include: ['src'] }),
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
      entry: Object.fromEntries(
        componentDirs.map((name) => [name, path.resolve(__dirname, `src/${name}/index.ts`)])
      ),
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}/index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        dir: 'dist',
        chunkFileNames: (chunk) => `${chunk.name}/[name].js`,
        assetFileNames: '[name]/[name].[ext]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    target: 'es2020',
  },
});
