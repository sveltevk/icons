const glob = require('glob');

/**
 *
 * @param {string} p - path to icons
 * @return {*}
 */
function iconsMap(p) {
	return glob.sync(p).map((iconPath) => {
		const match = iconPath.match(/[/|\\](\d\d)[/|\\](.+)_(\d\d)\.svg/);
		const size = match[1];
		const id = match[2];
		return { id, size };
	});
}

module.exports = { iconsMap };
