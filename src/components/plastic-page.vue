<template>
  <div class="plastic-page catalog-page" :style="{minHeight: ''+ blockHeight +'px'}">
    <section class="catalog">
      <div class="container">
        <h2  class="catalog_title">Пластик</h2>
      </div>
      <div class="container catalog-list">
        <router-link :to='linkPath(key)' v-if='plastics' class="catalog-product" v-for='(plastic, key) in plastics' :key='key'>
          <img class="catalog-product_image" :src='plastic.image'></img>
          <h3 class="catalog-product_title">{{plastic.title}}</h3>
          <p class="catalog-product_description">{{plastic.description_short}}</p>
          <span class="catalog-product_more">Подробнее...</span>
          <div class="catalog-product_price">{{plastic.price}}</div>
        </router-link>
        <p v-if='!plastics' class="catalog-none">Нет в наличии</p>
      </div>
  </section>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'plastic-page',

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
    plastics() {
      return this.$parent.app.plastics;
    }
  },

  methods: {
    linkPath(key) {
      return `/plastic/${key}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/catalog.sass'
</style>
