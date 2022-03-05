const fs = require('fs');
const path = require('path');
const SVGO = require('svgo');
const { iconsMap } = require('./utils/icons.cjs');
const { toPascalCase } = require('./utils/naming.cjs');
const symbol = require('./utils/symbol.cjs');

console.log('generating icons...');

const cwd = process.cwd();
const BUILD_FOLDER = 'src/lib';

const svgo = new SVGO({
	removeViewBox: false
});

const svgPath = 'node_modules/@vkontakte/icons/src/svg';
const icons = iconsMap(path.join(cwd, svgPath, '**/*.svg'));

let libExport = '';
let docImport = '';
/**
 * @type {Object.<string, {id:string, component:string}[]>}
 */
const docIcons = {};

// Готовим директорию
if (fs.existsSync(path.join(cwd, BUILD_FOLDER))) {
	fs.rmSync(path.join(cwd, BUILD_FOLDER), { recursive: true });
}
fs.mkdirSync(path.join(cwd, BUILD_FOLDER));

// Копируем общие файлы
fs.copyFileSync(path.join(cwd, 'tasks', 'sprite.ts'), path.join(cwd, BUILD_FOLDER, 'sprite.ts'));
fs.copyFileSync(
	path.join(cwd, 'tasks', 'IconBase.svelte'),
	path.join(cwd, BUILD_FOLDER, 'IconBase.svelte')
);

// Собираем иконки
const promises = icons.map(({ id, size }) => {
	// Берем svg-файл
	const svg = fs.readFileSync(path.join(cwd, svgPath, `${size}/${id}_${size}.svg`), 'utf-8');
	return svgo
		.optimize(svg)
		.then(({ data }) => {
			// Ужимаем содержимое
			return data;
		})
		.then((content) => {
			return symbol({ content, id: `${id}_${size}` }); // Превращаем svg-файл в svelte-файл в виде строки
		})
		.then((result) => {
			const absolutePath = `dist/${size}/${id}`;
			const svelteName = toPascalCase(id);
			const className = `Icon${size}${svelteName}`;

			const iconDir = path.join(cwd, BUILD_FOLDER, 'dist', size, id);
			fs.mkdirSync(iconDir, { recursive: true });

			// Запись файлов
			fs.writeFileSync(
				path.join(iconDir, `index.ts`),
				[`import ${className} from "./${svelteName}.svelte"`, `export default ${className}`].join(
					'\n'
				)
			);
			fs.writeFileSync(path.join(iconDir, `${svelteName}.svelte`), result);
			// fs.copyFileSync(path.join(cwd, 'tasks', 'icon.d.ts'), path.join(iconDir, `${svelteName}.svelte.d.ts`));

			// для экспорта и декларации
			libExport += `export { default as ${className} } from './${absolutePath}';\n`;

			docImport += `import ${className} from "$lib/${absolutePath}";\n`;
			const docIcon = {
				id: id,
				component: className
			};
			if (typeof docIcons[size] !== 'undefined') {
				docIcons[size].push(docIcon);
			} else {
				docIcons[size] = [docIcon];
			}
		});
});

Promise.all(promises).then(() => {
	// пишем экспорты и декларацию
	fs.writeFileSync(path.join(cwd, BUILD_FOLDER, `index.ts`), libExport);

	// пишем документацию
	docImport += '\nconst icons = [\n';
	for (const [size, icons] of Object.entries(docIcons)) {
		docImport += `{\nsize: ${size},\n`;
		docImport += `icons: [\n`;
		icons.forEach((icon) => {
			docImport += `{id: "${icon.id}",component: ${icon.component},},\n`;
		});
		docImport += `]\n`;
		docImport += `},\n`;
	}
	docImport += ']\n\nexport default icons;\n';
	fs.writeFileSync(path.join(cwd, 'src/site/data', `icons.ts`), docImport);

	console.log(`icons successfully generated in ${BUILD_FOLDER}!`);
});
