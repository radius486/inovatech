<template>
  <div class="parts-page catalog-page" :style="{minHeight: ''+ blockHeight +'px'}">
    <section class="catalog">
      <div class="container">
        <h2  class="catalog_title">Запчасти</h2>
      </div>
      <div class="container catalog-list">
        <a v-if='parts' class="catalog-product" href='#' v-for='(part, index) in parts'>
          <img class="catalog-product_image" :src='part.image'></img>
          <h3 class="catalog-product_title">{{part.title}}</h3>
          <p class="catalog-product_description">{{part.description}}</p>
          <span class="catalog-product_more">Подробнее...</span>
          <div class="catalog-product_price">{{part.price}}</div>
        </a>
        <p v-if='!parts' class="catalog-none">Нет в наличии</p>
      </div>
  </section>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'parts-page',

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
    parts() {
      return this.$parent.app.parts;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/catalog.sass'
</style>
