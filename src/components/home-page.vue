<template>
  <div class="home-page">
    <section class='home-carousel'>
      <div class="container">
        <carousel-component v-if='slides' :slides='slides'></carousel-component>
        <img v-else src='../assets/images/banner.jpg' class="home-image">
      </div>
      </section>
      <section class="home-catalog" id="catalog">
        <div class="container">
          <router-link  v-if='$parent.app.printers' to="/3d-printers"class="home-category">
            <img class="home-category_image" src='../assets/images/home-category-1.jpg'></img>
          <h3 class="home-category_title">3D принтеры</h3>
        </router-link>
        <router-link  v-if='$parent.app.pens' to="/3d-pens"class="home-category">
          <img class="home-category_image" src='../assets/images/home-category-2.jpg'></img>
          <h3 class="home-category_title">3D ручки</h3>
        </router-link>
        <router-link v-if='$parent.app.plastics' to="/plastic"class="home-category">
          <img class="home-category_image" src='../assets/images/home-category-3.jpg'></img>
          <h3 class="home-category_title">Пластик</h3>
        </router-link>
        <router-link  v-if='$parent.app.parts' to="/parts"class="home-category">
          <img class="home-category_image" src='../assets/images/home-category-4.jpg'></img>
          <h3 class="home-category_title">Запчасти</h3>
        </router-link>
        <router-link v-if='$parent.app.services' to="/services"class="home-category">
          <img class="home-category_image" src='../assets/images/home-category-5.jpg'></img>
          <h3 class="home-category_title">Услуги</h3>
        </router-link>
      </div>
    </section>
    <section class="home-contacts" id="contacts">
      <div class="container">
        <feedback-component
          :productName='$parent.productName'
          :productColor='$parent.productColor'>
        </feedback-component>
        <contacts-component v-if='contacts' :contacts='contacts'></contacts-component>
      </div>
    </section>
  </div>
</template>

<script>

import ContactsComponent from "./home-page/contacts-component.vue";
import CarouselComponent from "./home-page/carousel-component.vue";
import FeedbackComponent from "./home-page/feedback-component.vue";
export default {
  name: 'home-page',

  components: {
    ContactsComponent,
    CarouselComponent,
    FeedbackComponent
  },

  computed: {
    slides() {
      return this.$parent.app.carousel_slides;
    },

    contacts() {
      return this.$parent.app.contacts;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/home-page.sass'
</style>
