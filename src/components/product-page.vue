<template>
  <div class="product-page" :style="{minHeight: ''+ blockHeight +'px'}">
    <div class="container">
      <router-link :to="{name: backLinkPath}" v-if='backLinkPath' class='back-link'>{{backLinkText}}</router-link>
      <section v-if='product' class="product">
        <div class="product_image-block">
          <img class="product_image" :src='product.image'>
        </div>
        <div class="product_content-block">
          <h2  class="product_title">{{product.title}}</h2>
          <p class="product_description">{{product.description}}</p>
          <p class="product_color" v-if='product.color'>Цвет: {{product.color}}</p>
          <p class="product_price">{{product.price}}</p>
          <button class="product_order" @click.prevent='sendToForm'>Заказать</button>
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

      if (this.$parent.app.pens && this.routeName == 'PenPage') {

        return this.$parent.app.pens[this.productId];
      }

      if (this.$parent.app.plastics && this.routeName == 'PlasticPage') {
        return this.$parent.app.plastics[this.productId];
      }

      if (this.$parent.app.parts && this.routeName == 'PartPage') {
        return this.$parent.app.parts[this.productId];
      }
    },

    backLinkText() {
      if (this.routeName == 'PrinterPage') {
        return '« ЗD-принтеры';
      }

      if (this.routeName == 'PenPage') {
        return '« 3D-ручки';
      }

      if (this.routeName == 'PlasticPage') {
        return '« Пластик';
      }

      if (this.routeName == 'PartPage') {
        return '« Запчасти';
      }
    },

    backLinkPath() {
      if (this.routeName == 'PrinterPage') {
        return 'PrintersPage';
      }

      if (this.routeName == 'PenPage') {
        return 'PensPage';
      }

      if (this.routeName == 'PlasticPage') {
        return 'PlasticsPage';
      }

      if (this.routeName == 'PartPage') {
        return 'PartsPage';
      }
    }
  },

  methods: {
    sendToForm() {
      this.$parent.productName = this.product.title;
      this.$parent.productColor = this.product.color;
      this.$router.push('/#contacts');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/product-page.sass'
</style>
