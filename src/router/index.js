import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home.vue'
import Music from '@/page/Music.vue'
import NoneContent from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '*',
      name: 'NoneContent',
      component: NoneContent
    }
  ]
})
