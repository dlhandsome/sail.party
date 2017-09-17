<template>
  <div class="none-content">
    暂时没有内容～
  </div>
</template>

<script>
  export default {
    name: 'NoneContent'
  }
</script>

<style lang="less">
  @import "../../style/mixin";

  .none-content{
    .flex-layout();
    padding: 2.5em;
    height: 20em;
    background-color: #ffffff;
  }
</style>
