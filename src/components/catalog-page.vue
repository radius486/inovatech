<template>
  <div class="catalog-page">
    <section class="catalog">
      <div class="container">
        <router-link to='/' class='back-link'>« На главную</router-link>
        <h2 v-if='catalog_object' class="catalog_title">{{ catalog_object.title }}</h2>
        <div class="catalog-description"
          v-if='catalog_object && catalog_object.description'
          v-html='catalog_object.description'></div>
      </div>
      <div class="container catalog-list" @click='saveScroll()'>
        <router-link :to='linkPath(key)' v-if='catalog_list' class="catalog-product" v-for='(product, key) in catalog_list' :key='key'>
          <div class="catalog-product_image" :style="{backgroundImage: 'url(' + product.image + ')'}"></div>
          <h3 class="catalog-product_title">{{product.title}}</h3>
          <p class="catalog-product_description">{{product.description_short}}</p>
          <span class="catalog-product_more">Подробнее...</span>
          <div class="catalog-product_price">{{product.price}}</div>
        </router-link>
        <p v-if='!catalog_list' class="catalog-none">Нет в наличии</p>
      </div>
  </section>
  </div>
</template>

<script>

export default {
  name: 'catalog-page',

  data () {
    return {
      routeName: null
    }
  },

  mounted() {
    this.routeName = this.$route.name;
  },

  computed: {
    catalog_object() {
      if (this.$parent.app.printers && this.routeName == 'PrintersPage') {
        return this.$parent.app.printers;
      }

      if (this.$parent.app.pens && this.routeName == 'PensPage') {
        return this.$parent.app.pens;
      }

      if (this.$parent.app.plastics && this.routeName == 'PlasticsPage') {
        return this.$parent.app.plastics;
      }

      if (this.$parent.app.parts && this.routeName == 'PartsPage') {
        return this.$parent.app.parts;
      }

      if (this.$parent.app.gifts && this.routeName == 'GiftsPage') {
        return this.$parent.app.gifts;
      }
    },

    catalog_list() {
      if (this.catalog_object) {
        return this.catalog_object.catalog
      }
    }
  },

  methods: {
    linkPath(key) {
      let routeName;

      switch (this.$route.name) {
        case 'PrintersPage':
          routeName = 'PrinterPage'
          break
        case 'PensPage':
          routeName = 'PenPage'
          break
        case 'PlasticsPage':
          routeName = 'PlasticPage'
          break
        case 'PartsPage':
          routeName = 'PartPage'
          break
        case 'GiftsPage':
          routeName = 'GiftPage'
          break
        default:
          routeName = this.$route.name
      }

      return { name: routeName, params: {id: key} }
      //return `${this.$route.path}/${key}`;
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
