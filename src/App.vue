<template>
  <div id="app">
    <div class="app-container">
      <header-bar class="app-header-bar"></header-bar>
      <side-nav class="app-side-nav"></side-nav>
      <router-view class="app-main"></router-view>
    </div>
    <div class="global-background"></div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import SideNav from '@/components/side-nav'
  import HeaderBar from '@/components/header-bar'
  import { music } from '@/config/music'

  export default {
    name: 'app',
    components: {
      'side-nav': SideNav,
      'header-bar': HeaderBar
    },
    computed: {
      ...mapGetters('music', [
        'current'
      ])
    },
    watch: {
      current (newVal) {
        this.$musicPlayer.setCurrentMusic(newVal.src)
      }
    },
    methods: {
      ...mapActions('music', [
        'initMusic'
      ])
    },
    mounted () {
      this.initMusic(music)
      this.$musicPlayer.setCurrentMusic(this.current.src)
    }
  }
</script>

<style lang="less">
  @import "./style/common.less";
  @import "./style/mixin.less";
  @import "./style/iconfont/font-awesome.less";
  @import "./style/github-markdown.less";
  @import "./style/self.markdown.less";

  #app{
    .flex-layout(center, flex-start);
    width: 100%;
    height: 100%;

    .app-container{
      display: inline-flex;
      width: 80em;

      .app-header-bar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 4em;
        background-color: @activeBg;
      }

      .app-side-nav{
        position: fixed;
        top: 5em;
        width: 20em;
        padding: 2.5em 2.5em;
      }

      .app-main{
        width: 50em;
        margin-top: 5em;
        margin-left: 20em;
        background-color: @activeBg;
      }
    }

    .global-background{
      position: fixed;
      width: 100%;
      height: 100%;
      background: url("./assets/background.png");
      z-index: -1;
      opacity: .5;
    }
  }
</style>
