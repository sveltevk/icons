<script>
  export let value;
</script>

<style>
  input {
    padding: 18px 40px 22px;
    line-height: 30px;
    font-size: 30px;
    box-sizing: border-box;
    color: #000;
    margin: 0;
    background-color: #fff;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    border-radius: 50px;
    display: block;
    width: 100%;
  }
  input:focus {
    border-color: #c9d0d6;
  }
</style>

<input {...$$restProps} bind:value placeholder="search" type="text" />
