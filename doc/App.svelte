<script>
  import Icons from "./Icons.svelte";

  const setupCode = `npm i @sveltevk/icons`;
  const exapleDirectImport = `\<script\>
  import Icon24Cancel from '@sveltevk/icons/dist/24/cancel';
\</script\>

\<Icon24Cancel /\>
`;
  const exampleBaseImport = `\<script\>
  import { Icon24LogoVk } from '@sveltevk/icons';
\</script\>

\<Icon24LogoVk width={20} height={20} color="#4bb34b" /\>
`;
</script>

<style>
  main {
    padding: 0 40px 50px;
    max-width: 1080px;
    margin: auto;
  }
  p,
  pre {
    font-size: 16px;
  }
  pre {
    padding: 10px;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 2px;
  }
</style>

<main>
  <h1 id="vk-icons">Svelte VK Icons</h1>
  <p>SVG icons, provided as a Svelte components.</p>
  <ul>
    <li>
      <a href="https://github.com/sveltevk/icons">GitHub</a>
    </li>
    <li>
      <a href="https://www.npmjs.com/package/@sveltevk/icons">npm</a>
    </li>
    <li>
      <a href="https://github.com/VKCOM/icons">VKCOM/icons</a>
    </li>
  </ul>
  <h2 id="setup">Setup</h2>
  <pre>
    <code class="lang-sh">{setupCode}</code>
  </pre>
  <h2 id="example">Example</h2>
  <pre>
    <code class="lang-svelte">{exapleDirectImport}</code>
  </pre>
  <p>or base import:</p>
  <pre>
    <code class="lang-svelte">{exampleBaseImport}</code>
  </pre>
  <p>
    Note: Even if using the base import method, a modern application bundler
    like Rollup or webpack should
    <a href="https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking">
      tree shake
    </a>
    unused imports.
  </p>

  <Icons />
</main>
