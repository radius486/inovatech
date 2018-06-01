<template>
  <div class="printers-page catalog-page">
    <section class="catalog">
      <div class="container">
        <router-link to='/' class='back-link'>« На главную</router-link>
        <h2  class="catalog_title">3D принтеры</h2>
      </div>
      <div class="container catalog-list" @click='saveScroll()'>
        <router-link :to='linkPath(key)' v-if='printers' class="catalog-product" v-for='(printer, key) in printers' :key='key'>
          <div class="catalog-product_image" :style="{backgroundImage: 'url(' + printer.image + ')'}"></div>
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

export default {
  name: 'printers-page',

  computed: {
    printers() {
      return this.$parent.app.printers;
    }
  },

  methods: {
    linkPath(key) {
      return `/3d-printers/${key}`;
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
