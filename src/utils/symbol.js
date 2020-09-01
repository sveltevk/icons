const Compiler = require('svg-baker');

const compiler = new Compiler();

const reactify = (symbol) => {
  const width = symbol.viewBox.split(' ')[2];
  const height = symbol.viewBox.split(' ')[3];

  return `<script context="module">
  import {addSpriteSymbol} from '../../sprite';

  addSpriteSymbol({
    id: '${symbol.id}',
    viewBox: '${symbol.viewBox}',
    content: '${symbol.render()}'
  });
</script>

<script>
  import IconBase from "../../IconBase.svelte";

  export let width = ${width};
  export let height = ${height};
</script>

<IconBase {...$$restProps} id="${symbol.id}" viewBox="${symbol.viewBox}" {width} {height}/>
`;
};

function symbol ({ content, id }) {
  return compiler.addSymbol({ content, id, path: '' }).then(symbol => reactify(symbol));
}

module.exports = symbol;
