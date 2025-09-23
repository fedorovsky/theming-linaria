/**
 * This script automatically updates the "exports" field in package.json.
 *
 * Workflow:
 * 1. Reads package.json from the project root.
 * 2. Builds a new "exports" field:
 *    - Adds the root export `.` (index.js + index.d.ts from dist).
 *    - Scans all folders inside src (each representing a component).
 *    - For each folder, creates an export entry:
 *        "./<component>": {
 *          types: "./dist/<component>/index.d.ts",
 *          import: "./dist/<component>.js"
 *        }
 * 3. Updates package.json by replacing only the "exports" field,
 *    saving it with pretty formatting (2 spaces).
 * 4. Logs a success message.
 *
 * In short, this script ensures that the root module and all components
 * have correct type and import paths in package.json.
 */

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
