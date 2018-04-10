<template>
  <div class="services-page" :style="{minHeight: ''+ blockHeight +'px'}">
    <div class="container">
      <router-link to='/' class='back-link'>« На главную</router-link>
      <section v-if='services' class="services">
        <div class="services_content-block">
          <h2  class="services_title">{{services.title}}</h2>
          <p class="services_description">{{services.description}}</p>
          <button class="services_order">Заказать</button>
        </div>
        <div class="services_image-block">
          <img class="services_image" :src='services.image'>
        </div>
      </section>
      <p v-if='!services' class="services-none">Услуги не найдены</p>
    </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'services-page',

  data () {
    return {
      blockHeight: 0,
    }
  },

  mounted() {

    $(document).ready(() => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
    });

    $(window).on('resize', () => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
    });
  },

  computed: {
    services() {
      if (this.$parent.app.services) {
        return this.$parent.app.services;
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/services-page.sass'
</style>
