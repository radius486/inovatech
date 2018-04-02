<template>
  <header class='header'>
    <section class='header-contacts'>
      <div class='container'>
        <span class='header-phone'>{{phone}}</span>
        <span class='header-email'>{{email}}</span>
      </div>
    </section>
    <section class='header-navigation'>
      <div class='container'>
        <router-link to="/" class="logo">
          <img src="../assets/images/logo.png">
        </router-link>
        <nav class="header-menu">
          <a class="header-menu_link" href='#catalog'  v-bind:class="{ active: (locationHash == '#catalog')}">Каталог</a>
          <a class="header-menu_link" href='#contacts' v-bind:class="{ active: (locationHash == '#contacts')}">Контакты</a>
        </nav>
      </div>
    </section>
  </header>
</template>

<script>

import $ from 'jquery';

export default {

  name: 'header-component',

  props: ['phone', 'email'],

  mounted() {
    let padding = 0;

    let that = this;

    $(window).on('load', () => {
      that.locationHash = window.location.hash;
      padding = $('.header').outerHeight();
    });

    $(window).on('resize', function(){
      padding = $('.header').outerHeight();
    });

    $(document).on('click', '.header-menu_link', function(event){
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - padding
      }, 500, () => {
        that.locationHash = window.location.hash;
      });
    });
  },

  data () {
    return {
      locationHash: null
    }
  },

  computed: {
    getLocationHash() {
      return this.locationHash;
    }
  },

  actions: {


  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/header-component.sass'
</style>
