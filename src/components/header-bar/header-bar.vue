<template>
  <header class="header-bar">
    <div class="header-container">
      <a href="#/">{{ author }}</a>
      <p>{{ creed }}</p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'HeaderBar',
    data () {
      return {
        author: '<Sail />',
        creed: '学骑自行车最快的方式就是先骑上去'
      }
    }
  }
</script>

<style lang="less">
  @import "../../style/mixin.less";

  .header-bar{
    .flex-layout();
    .header-container {
      width: 80em;
      padding: 0 5.5em;
      .flex-layout(flex-start);
      a{
        font-size: 2.4em;
        color: @fontYellow;
        margin-right: 6em;
      }
      p{
        color: @fontYellow;
      }
    }
  }
</style>
