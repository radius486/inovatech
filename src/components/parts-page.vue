<template>
  <div class="parts-page catalog-page">
    <section class="catalog">
      <div class="container">
        <router-link to='/' class='back-link'>« На главную</router-link>
        <h2  class="catalog_title">Запчасти</h2>
      </div>
      <div class="container catalog-list" @click='saveScroll()'>
        <router-link :to='linkPath(key)' v-if='parts' class="catalog-product" v-for='(part, key) in parts' :key='key'>
          <div class="catalog-product_image" :style="{backgroundImage: 'url(' + part.image + ')'}"></div>
          <h3 class="catalog-product_title">{{part.title}}</h3>
          <p class="catalog-product_description">{{part.description_short}}</p>
          <span class="catalog-product_more">Подробнее...</span>
          <div class="catalog-product_price">{{part.price}}</div>
        </router-link>
        <p v-if='!parts' class="catalog-none">Нет в наличии</p>
      </div>
  </section>
  </div>
</template>

<script>

export default {
  name: 'parts-page',

  computed: {
    parts() {
      return this.$parent.app.parts;
    }
  },

  methods: {
    linkPath(key) {
      return `/parts/${key}`;
    },

    saveScroll() {
      window.scrollHeight = window.scrollY;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/catalog.sass'
</style>
