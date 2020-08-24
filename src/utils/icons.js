const glob = require('glob');

/**
 * 
 * @param {string} p - path to icons
 * @return {*}
 */
function iconsMap (p) {
  return glob.sync(p).map((iconPath) => {
    const match = iconPath.match(/[/|\\](\d\d)[/|\\](.+)_(\d\d)\.svg/);
    const size = match[1];
    const id = match[2];
    return { id, size };
  });
}

/**
 * Convert a string to Pascal Case (removing non alphabetic characters).
 *
 * @example
 * toPascalCase('hello_world') // Will return `HelloWorld`.
 * toPascalCase('fOO BAR')     // Will return `FooBar`.
 *
 * @param {string} s - string
 * 
 * @returns {string}
 *   The Pascal Cased string.
 */
function toPascalCase (s) {
  return s.match(/[a-z0-9]+/gi)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    })
    .join('')
}

module.exports = { iconsMap, toPascalCase };
