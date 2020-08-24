const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');
const { iconsMap, toPascalCase } = require('./utils/icons');
const symbol = require('./utils/symbol');

console.log('generating icons...');

const cwd = process.cwd();
const BUILD_FOLDER = 'dist';

const svgo = new SVGO({
  removeViewBox: false,
});

const svgPath = 'node_modules/@vkontakte/icons/src/svg'
const icons = iconsMap(path.join(cwd, svgPath, '**/*.svg'));

let libExport = "";

// Готовим директорию
fs.rmdirSync(path.join(cwd, BUILD_FOLDER), { recursive: true });
fs.mkdirSync(path.join(cwd, BUILD_FOLDER));

// Копируем общие файлы
fs.copyFileSync(path.join(cwd, 'src', 'sprite.js'), path.join(cwd, BUILD_FOLDER, 'sprite.js'))
fs.copyFileSync(path.join(cwd, 'src', 'IconBase.svelte'), path.join(cwd, BUILD_FOLDER, 'IconBase.svelte'))
fs.copyFileSync(path.join(cwd, 'src', 'icon.d.ts'), path.join(cwd, BUILD_FOLDER, 'icon.d.ts'))

// Собираем иконки
const promises = icons.map(({ id, size }) => {
  // Берем svg-файл
  const svg = fs.readFileSync(path.join(cwd, svgPath, `${size}/${id}_${size}.svg`), 'utf-8');
  return svgo.optimize(svg).then(({ data }) => { // Ужимаем содержимое
    return data;
  }).then((content) => {
    return symbol({ content, id: `${id}_${size}` }); // Превращаем svg-файл в svelte-файл в виде строки
  }).then((result) => {
    const absolutePath = `${size}/${id}`
    const svelteName = toPascalCase(id)
    const className = `Icon${size}${svelteName}`

    const iconDir = path.join(cwd, BUILD_FOLDER, size, id);
    fs.mkdirSync(iconDir, { recursive: true })

    // Запись файлов
    fs.writeFileSync(
      path.join(iconDir, `index.js`),
      `import ${className} from "./${svelteName}.svelte"\nexport default ${className};`
    );
    fs.writeFileSync(
      path.join(iconDir, `index.d.ts`),
      `import Icon from '../../icon'\nexport default class ${className} extends Icon {}\n`
    );
    fs.writeFileSync(path.join(iconDir, `${svelteName}.svelte`), result);

    // для экспорта и декларации
    libExport += `export { default as ${className} } from './${absolutePath}';\n`
  });
});

Promise.all(promises).then(() => {
  // пишем экспорты и декларацию
  fs.writeFileSync(path.join(cwd, BUILD_FOLDER, `index.js`), libExport)
  fs.writeFileSync(path.join(cwd, BUILD_FOLDER, `index.d.ts`), libExport)

  console.log(`icons successfully generated in ${BUILD_FOLDER}!`);
});
