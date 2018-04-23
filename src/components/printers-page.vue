<template>
  <div class="printers-page catalog-page" :style="{minHeight: ''+ blockHeight +'px'}">
    <section class="catalog">
      <div class="container">
        <router-link to='/' class='back-link'>« На главную</router-link>
        <h2  class="catalog_title">3D принтеры</h2>
      </div>
      <div class="container catalog-list">
        <router-link :to='linkPath(key)' v-if='printers' class="catalog-product" v-for='(printer, key) in printers' :key='key'>
          <img class="catalog-product_image" :src='printer.image'></img>
          <h3 class="catalog-product_title">{{printer.title}}</h3>
          <p class="catalog-product_description">{{printer.description_short}}</p>
          <span class="catalog-product_more">Подробнее...</span>
          <div class="catalog-product_price">{{printer.price}}</div>
        </router-link>
        <p v-if='!printers' class="catalog-none">Нет в наличии</p>
      </div>
  </section>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'printers-page',

  components: {
  },

  mounted() {
    $(document).ready(() => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
    });

    $(window).on('resize', () => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
    });
  },

  data () {
    return {
      blockHeight: 0
    }
  },

  computed: {
    printers() {
      return this.$parent.app.printers;
    }
  },

  methods: {
    linkPath(key) {
      return `/3d-printers/${key}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/catalog.sass'
</style>
