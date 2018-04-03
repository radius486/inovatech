<template>
  <div class="product-page" :style="{minHeight: ''+ blockHeight +'px'}">
    <section v-if='product' class="product">
      <div class="container">
        <h2  class="product_title">{{product.title}}</h2>
        <p class="product_description">{{product.description}}</p>
        <img class="product_image" :src='product.image'></img>
        <p class="product_price">{{product.price}}</p>
      </div>
  </section>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'product-page',

  mounted() {
    this.id = this.$route.params.id;

    $(document).ready(() => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
    });

    $(window).on('resize', () => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
    });
  },

  data () {
    return {
      blockHeight: 0,
      id: null
    }
  },

  computed: {
    product() {
      return this.$parent.app.printers[this.id - 1];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/product-page.sass'
</style>
