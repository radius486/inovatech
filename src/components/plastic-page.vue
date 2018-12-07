<template>
  <div class="plastic-page catalog-page">
    <section class="catalog">
      <div class="container">
        <router-link to='/' class='back-link'>« На главную</router-link>
        <h2 v-if='$parent.app.plastics' class="catalog_title">{{ $parent.app.plastics.title }}</h2>
      </div>
      <div class="container catalog-list" @click='saveScroll()'>
        <router-link :to='linkPath(key)' v-if='plastics' class="catalog-product" v-for='(plastic, key) in plastics' :key='key'>
          <div class="catalog-product_image"  :style="{backgroundImage: 'url(' + plastic.image + ')'}"></div>
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

export default {
  name: 'plastic-page',

  computed: {
    plastics() {
      if (this.$parent.app.plastics) {
        return this.$parent.app.plastics.catalog;
      }
    }
  },

  methods: {
    linkPath(key) {
      return `/plastic/${key}`;
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
