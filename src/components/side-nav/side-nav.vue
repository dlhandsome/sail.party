<template>
  <div class="side-nav">
    <a href="#/about"><img class="author-avatar" src="../../assets/logo.jpeg" alt=""></a>
    <ul class="category">
      <a v-for="cate in cateItems" :href="cate.path">
        <li class="category-item fa fa-fw"
            :class="{ 'active-cate': $route.path === cate.path.replace('#', ''), [`fa-${cate.icon}`]: true }" >
          &nbsp;&nbsp;&nbsp;{{ cate.name }}
        </li>
      </a>
    </ul>
  </div>
</template>

<script>
  import cateItems from '@/config/side-nav'

  export default {
    name: 'SideNav',
    data () {
      return {
        cateItems
      }
    },
    watch: {
      $route (n) {
        console.log(n.path)
      }
    }
  }
</script>

<style lang="less">
  @import '../../style/mixin';

  .side-nav {
    .flex-layout();
    flex-direction: column;
    .author-avatar{
      width: 5em;
      height: 5em;
      border-radius: 50%;
    }
    .category{
      .category-item{
        font-size: 1.6em;
        padding: .5em 1em;
        margin: 1.25em 0;
        width: 100%;
        .flex-layout(flex-start);
        &:hover{
          color: @fontYellow;
        }
      }
      .category-item.active-cate{
        position: relative;
        color: @fontYellow;
      }
    }
  }
</style>
