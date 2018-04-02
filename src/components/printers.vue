<template>
  <div class="printers">
    <section class="catalog">
      <div class="container">
        <h2  class="printers_title">3d принтеры</h2>
      </div>
      <div class="container catalog-list">
        <a class="catalog-product" href='#' v-for='(printer, index) in printers'>
          <img class="catalog-product_image" :src='printer.image'></img>
          <h3 class="catalog-product_title">{{printer.title}}</h3>
          <p class="catalog-product_description">{{printer.description}}</p>
          <span class="catalog-product_more">Подробнее...</span>
          <div class="catalog-product_price">{{printer.price}}</div>
        </a>
      </div>
  </section>
  </div>
</template>

<script>

//import ContactsComponent from "./home-page/contacts-component.vue";
export default {
  name: 'printers',

  components: {
  },

  data () {
    return {
    }
  },

  computed: {
    printers() {
      return this.$parent.app.printers;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/catalog.sass'
</style>
