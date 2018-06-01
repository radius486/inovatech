<template>
  <div class="pens-page catalog-page">
    <section class="catalog">
      <div class="container">
        <router-link to='/' class='back-link'>« На главную</router-link>
        <h2  class="catalog_title">3D ручки</h2>
      </div>
      <div class="container catalog-list" @click='saveScroll()'>
        <router-link :to='linkPath(key)' v-if='pens' class="catalog-product" v-for='(pen, key) in pens' :key='key'>
          <div class="catalog-product_image" :style="{backgroundImage: 'url(' + pen.image + ')'}"></div>
          <h3 class="catalog-product_title">{{pen.title}}</h3>
          <p class="catalog-product_description">{{pen.description_short}}</p>
          <span class="catalog-product_more">Подробнее...</span>
          <div class="catalog-product_price">{{pen.price}}</div>
        </router-link>
        <p v-if='!pens' class="catalog-none">Нет в наличии</p>
      </div>
  </section>
  </div>
</template>

<script>

export default {
  name: 'pens-page',

  computed: {
    pens() {
      return this.$parent.app.pens;
    }
  },

  methods: {
    linkPath(key) {
      return `/3d-pens/${key}`;
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
