import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page.vue'
import Printers from '@/components/printers.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },

    {
      path: '/3d-printers',
      name: 'Printers',
      component: Printers
    }
  ]
})
