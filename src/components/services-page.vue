<template>
  <div class="services-page" >
    <div class="container">
      <router-link to='/' class='back-link'>« На главную</router-link>
      <section v-if='services' class="services">
        <div class="services_content-block">
          <h2  class="services_title">{{services.title}}</h2>
          <p class="services_description" v-html='services.description'></p>
          <button class="services_order" @click.prevent='sendToForm'>Заказать</button>
        </div>
        <div class="services_image-block">
          <img class="services_image" :src='services.image'>
        </div>
      </section>
      <p v-if='!services' class="services-none">Услуги не найдены</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'services-page',

  computed: {
    services() {
      if (this.$parent.app.services) {
        return this.$parent.app.services;
      }
    }
  },

  methods: {
    sendToForm() {
      this.$parent.productName = this.services.title;
      this.$parent.productColor = this.services.color;
      this.$router.push('/#contacts');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/services-page.sass'
</style>
