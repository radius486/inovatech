import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page.vue'
import PrintersPage from '@/components/printers-page.vue'
import PlasticPage from '@/components/plastic-page.vue'
import PartsPage from '@/components/parts-page.vue'

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
      name: 'PrintersPage',
      component: PrintersPage
    },

    {
      path: '/plastic',
      name: 'PlasticPage',
      component: PlasticPage
    },

    {
      path: '/parts',
      name: 'PartsPage',
      component: PartsPage
    }
  ]
})
