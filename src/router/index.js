import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/home-page.vue';
import CatalogPage from '@/components/catalog-page.vue';
import ServicesPage from '@/components/services-page.vue';
import ProductPage from '@/components/product-page.vue';
import NotfoundPage from '@/components/notfound-page.vue';
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
      let scrollHeight = 0;

      if(window.scrollHeight && (to.name != "HomePage") && (from.name == 'PlasticPage' || from.name == 'PrinterPage' || from.name == 'PenPage' || from.name == 'PartPage')) {
        scrollHeight = window.scrollHeight;
      }

      $('html, body').scrollTop(scrollHeight);
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
      component: CatalogPage
    },

    {
      path: '/3d-pens',
      name: 'PensPage',
      component: CatalogPage
    },

    {
      path: '/plastic',
      name: 'PlasticsPage',
      component: CatalogPage
    },

    {
      path: '/parts',
      name: 'PartsPage',
      component: CatalogPage
    },

    {
      path: '/3d-printers/:id',
      name: 'PrinterPage',
      component: ProductPage
    },

    {
      path: '/3d-pens/:id',
      name: 'PenPage',
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
    },

    {
      path: '/services',
      name: 'ServicesPage',
      component: ServicesPage
    },

    {
      path: '/not-found',
      name: 'NotfoundPage',
      component: NotfoundPage
    },

    {
      path: '*',
      name: 'UnknownPages',
      component: NotfoundPage
    }
  ]
});
