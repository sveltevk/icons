# VK Icons

[![NPM][npm]][npm-url]
[![VK chat][chat]][chat-url]
[![svelte-v3][svelte]][svelte-url]

[SVG icons](https://github.com/VKCOM/icons)
, provided as a Svelte components.

## [Icon Preview](https://sveltevk.github.io/icons/)

## Setup

```sh
npm i @sveltevk/icons
```

## Example

```svelte
<script>
    import Icon24Cancel from '@sveltevk/icons/dist/24/cancel';
</script>

<Icon24Cancel />
```

or base import:

```svelte
<script>
    import { Icon24LogoVk } from '@sveltevk/icons';
</script>

<Icon24LogoVk width={20} height={20} color="#4bb34b" />
```

Note: Even if using the base import method, a modern application bundler like Rollup or webpack should [tree shake](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) unused imports.

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/@sveltevk/icons.svg?color=blue
[npm-url]: https://npmjs.com/package/@sveltevk/icons
[chat]: https://img.shields.io/badge/VK%20chat-%234a76a8.svg?logo=VK&logoColor=white
[chat-url]: https://vk.me/join/AJQ1d3IXhxgxghIc5PFNiLCd
[svelte]: https://img.shields.io/badge/svelte-v3-blueviolet.svg
[svelte-url]: https://svelte.dev
