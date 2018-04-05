<template>
  <div id="app">
    <header-component :phone="app.phone" :email='app.email'></header-component>
    <transition name='fade'>
      <router-view/>
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
      app: {}
    }
  },

  created() {
    this.getData();
  },

  components: {
    HeaderComponent,
    FooterComponent
  },

  methods: {
    getData() {
      $.get({
        url: '/static/json/app.json',
        success: (res) => {
          this.app = res;
        }
      })
    }
  }
}
</script>

<style lang='sass'>
  @import './assets/styles/app.sass'
</style>
