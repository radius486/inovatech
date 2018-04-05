import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/home-page.vue';
import PrintersPage from '@/components/printers-page.vue';
import PlasticPage from '@/components/plastic-page.vue';
import PartsPage from '@/components/parts-page.vue';
import ProductPage from '@/components/product-page.vue';
import $ from 'jquery';

Vue.use(Router)

export default new Router({
  mode: 'history',

  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      let letency = 300;

      if (from.fullPath == '/' || from.fullPath == '/#contacts' || from.fullPath == '/#catalog') {
        letency = 0;
      }

      setTimeout(() => {
        let padding = $('.header').outerHeight();

        $('html, body').animate({
          scrollTop: $(to.hash ).offset().top - padding
        }, 500);

      }, letency);
    } else {
      setTimeout(() => {
        $('html, body').scrollTop(0);
      }, 250);
    }
  },

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
      name: 'PlasticsPage',
      component: PlasticPage
    },

    {
      path: '/parts',
      name: 'PartsPage',
      component: PartsPage
    },

    {
      path: '/3d-printers/:id',
      name: 'PrinterPage',
      component: ProductPage
    },

    {
      path: '/plastic/:id',
      name: 'PlasticPage',
      component: ProductPage
    },

    {
      path: '/parts/:id',
      name: 'PartPage',
      component: ProductPage
    }
  ]
});
