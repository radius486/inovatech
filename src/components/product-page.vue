<template>
  <div class="product-page" :style="{minHeight: ''+ blockHeight +'px'}">
    <div class="container">
      <section v-if='product' class="product">
        <div class="product_image-block">
          <img class="product_image" :src='product.image'>
        </div>
        <div class="product_content-block">
          <h2  class="product_title">{{product.title}}</h2>
          <p class="product_description">{{product.description}}</p>
          <p class="product_price">{{product.price}}</p>
          <button class="product_order">Заказать</button>
        </div>
      </section>
      <p v-if='!product' class="product-none">Товар не найден</p>
    </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'product-page',

  data () {
    return {
      blockHeight: 0,
      productId: null,
      routeName: null
    }
  },

  mounted() {
    this.productId = this.$route.params.id;
    this.routeName = this.$route.name;

    $(document).ready(() => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
    });

    $(window).on('resize', () => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
    });
  },

  computed: {
    product() {
      if (this.$parent.app.printers && this.routeName == 'PrinterPage') {
        return this.$parent.app.printers[this.productId];
      }

      if (this.$parent.app.plastics && this.routeName == 'PlasticPage') {
        return this.$parent.app.plastics[this.productId];
      }

      if (this.$parent.app.parts && this.routeName == 'PartPage') {
        return this.$parent.app.parts[this.productId];
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/product-page.sass'
</style>
