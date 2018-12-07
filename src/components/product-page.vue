<template>
  <div class="product-page">
    <div class="container">
      <router-link :to="{name: backLinkPath}" v-if='backLinkPath' class='back-link'>{{backLinkText}}</router-link>
      <section v-if='product' class="product">
        <div class="product_image-block">
          <img class="product_image" :src='product.image'>
        </div>
        <div class="product_content-block">
          <h2  class="product_title">{{product.title}}</h2>
          <p class="product_description" v-html='product.description'></p>
          <p class="product_color" v-if='product.color'>Цвет: <b>{{product.color}}</b></p>
          <p class="product_price">{{product.price}}</p>
          <button class="product_order" @click.prevent='sendToForm'>Заказать</button>
        </div>
      </section>
      <p v-if='!product' class="product-none">Товар не найден</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'product-page',

  data () {
    return {
      productId: null,
      routeName: null
    }
  },

  mounted() {
    this.productId = this.$route.params.id;
    this.routeName = this.$route.name;
  },

  computed: {
    product() {
      if (this.$parent.app.printers && this.routeName == 'PrinterPage') {
        return this.$parent.app.printers.catalog[this.productId];
      }

      if (this.$parent.app.pens && this.routeName == 'PenPage') {

        return this.$parent.app.pens.catalog[this.productId];
      }

      if (this.$parent.app.plastics && this.routeName == 'PlasticPage') {
        return this.$parent.app.plastics.catalog[this.productId];
      }

      if (this.$parent.app.parts && this.routeName == 'PartPage') {
        return this.$parent.app.parts.catalog[this.productId];
      }
    },

    backLinkText() {
      if (this.routeName == 'PrinterPage' && this.$parent.app.printers) {
        return '« ' + this.$parent.app.printers.title;
      }

      if (this.routeName == 'PenPage' && this.$parent.app.pens) {
        return '« ' + this.$parent.app.pens.title;
      }

      if (this.routeName == 'PlasticPage' && this.$parent.app.plastics) {
        return '« ' + this.$parent.app.plastics.title;
      }

      if (this.routeName == 'PartPage' && this.$parent.app.parts) {
        return '« ' + this.$parent.app.parts.title;
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
