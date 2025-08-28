import fs from 'fs';
import path from 'path';

const root = process.cwd();
const distPath = path.join(root, 'src');
const packageJsonPath = path.join(root, 'package.json');

// читаем package.json
const pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

const exportsField = {};

// добавляем корневой index
exportsField['.'] = {
  types: './dist/index.d.ts',
  import: './dist/index.js',
};

// ищем все папки в dist (каждый компонент)
if (fs.existsSync(distPath)) {
  const componentDirs = fs
    .readdirSync(distPath, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const name of componentDirs) {
    exportsField[`./${name}`] = {
      types: `./dist/${name}/index.d.ts`,
      import: `./dist/${name}.js`,
    };
  }
}

// обновляем только exports
pkg.exports = exportsField;

// сохраняем с красивым форматированием
fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2) + '\n');

console.log('✅ package.json exports updated!');
