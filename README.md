# VK Icons

SVG icons, provided as a Svelte components.

- [github.com/VKCOM/icons](https://github.com/VKCOM/icons)
- [npm](https://www.npmjs.com/package/@sveltevk/icons)

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

Note: Even if using the base import method, a modern application bundler like Rollup or webpack should [treeshake](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) unused imports.
