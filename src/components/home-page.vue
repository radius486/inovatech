<template>
  <div class="home-page">
    <section class='home-carousel'>
      <div class="container">
        <img src='../assets/images/banner.jpg' class="home-image">
      </div>
    </section>
    <section class="home-catalog" id="catalog">
      <div class="container">
        <router-link  v-if='$parent.app.printers' to="/3d-printers"class="home-category">
          <img class="home-category_image" src='../assets/images/printer.jpg'></img>
          <h3 class="home-category_title">3d принтеры</h3>
        </router-link>
        <router-link v-if='$parent.app.plastics' to="/plastic"class="home-category">
          <img class="home-category_image" src='../assets/images/printer.jpg'></img>
          <h3 class="home-category_title">Пластик</h3>
        </router-link>
        <router-link  v-if='$parent.app.parts' to="/parts"class="home-category">
          <img class="home-category_image" src='../assets/images/printer.jpg'></img>
          <h3 class="home-category_title">Запчасти</h3>
        </router-link>
        <router-link v-if='$parent.app.services' to="/services"class="home-category">
          <img class="home-category_image" src='../assets/images/printer.jpg'></img>
          <h3 class="home-category_title">Услуги</h3>
        </router-link>
      </div>
    </section>
    <section class="home-contacts" id="contacts">
      <div class="container">
        <div class="feedback-form"></div>
        <contacts-component></contacts-component>
      </div>
    </section>
  </div>
</template>

<script>

import ContactsComponent from "./home-page/contacts-component.vue";
export default {
  name: 'home-page',

  components: {
    ContactsComponent
  },

  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/home-page.sass'
</style>
