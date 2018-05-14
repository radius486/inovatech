<template>
  <div id="app">
    <header-component :phone="app.phone" :email='app.email'></header-component>
    <transition name='fade'>
      <router-view/>
    </transition>
    <transition name='fade'>
      <button v-if='showScroll' class="to-top-button" @click.prevent='scrollToTop()' title='наверх'>to top</button>
    </transition>
    <footer-component :text="app.footer_text"></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./components/header-component.vue";
import FooterComponent from "./components/footer-component.vue";
import $ from 'jquery';

export default {
  name: 'App',

  data() {
    return {
      app: {},
      productName: null,
      productColor: null,
      scrollTop: null
    }
  },

  created() {
    this.getData();
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  components: {
    HeaderComponent,
    FooterComponent
  },

  computed: {
    showScroll() {
      return this.scrollTop > 500;
    }
  },

  methods: {
    getData() {
      $.get({
        url: '/static/json/app.json',
        success: (res) => {
          this.app = res;
        }
      })
    },

    scrollToTop() {
      $('html, body').animate({
          scrollTop: 0
        }, 500);
    },

    handleScroll () {
      this.scrollTop = window.scrollY ;
    }
  }
}
</script>

<style lang='sass'>
  @import './assets/styles/app.sass'
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&subset=cyrillic')
</style>
