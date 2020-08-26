# VK Icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]
[![VK chat][chat]][chat-url]

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

## Tree shake

## License

[![MIT][fossa]][fossa-url]

[npm]: https://img.shields.io/npm/v/@sveltevk/icons.svg?color=blue
[npm-url]: https://npmjs.com/package/@sveltevk/icons
[build]: https://travis-ci.com/sveltevk/icons.svg?branch=master
[build-badge]: https://travis-ci.com/sveltevk/icons
[chat]: https://img.shields.io/badge/VK%20chat-%234a76a8.svg?logo=VK&logoColor=white
[chat-url]: https://vk.me/join/AJQ1d6Or8Q00Y_CSOESfbqGt
[fossa]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsveltevk%2Ficons.svg?type=large
[fossa-url]: https://app.fossa.com/projects/git%2Bgithub.com%2Fsveltevk%2Ficons?ref=badge_large
