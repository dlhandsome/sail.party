// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store'
import App from './App'
import router from './router'
import HighLight from './plugin/highlight'
import MusicPlayer from './plugin/music-player'

Vue.use(HighLight)
Vue.use(MusicPlayer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
