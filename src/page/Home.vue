<template>
  <div class="sail-home">
    <div class="markdown-body" v-highlight>
      <Readme></Readme>
    </div>
  </div>
</template>

<script>
  import { markdown } from 'markdown'
  import Readme from '@/source/README.md'

  export default {
    name: 'Home',
    data () {
      return {
        content: ''
      }
    },
    components: {
      Readme
    },
    mounted () {
      this.content = markdown.toHTML(require('raw-loader!@/source/README.md'))
    }
  }
</script>

<style lang="less">
  @import "../style/mixin";

  .markdown-body{
    padding: 1em 2em;
  }
</style>
