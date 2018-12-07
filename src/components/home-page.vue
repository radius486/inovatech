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
        <router-link  v-if='$parent.app.printers' to="/3d-printers"class="home-category home-category-1">
          <div class="home-category_image" :style="{backgroundImage: `url(${$parent.app.printers.category_image})`}"></div>
          <h3 class="home-category_title">{{ $parent.app.printers.title }}</h3>
        </router-link>
        <router-link  v-if='$parent.app.pens' to="/3d-pens" class="home-category home-category-2">
          <div class="home-category_image" :style="{backgroundImage: `url(${$parent.app.pens.category_image})`}"></div>
          <h3 class="home-category_title">{{ $parent.app.pens.title }}</h3>
        </router-link>
        <router-link v-if='$parent.app.plastics' to="/plastic" class="home-category home-category-3">
          <div class="home-category_image" :style="{backgroundImage: `url(${$parent.app.plastics.category_image})`}"></div>
          <h3 class="home-category_title">{{ $parent.app.plastics.title }}</h3>
        </router-link>
        <router-link  v-if='$parent.app.parts' to="/parts" class="home-category home-category-4">
          <div class="home-category_image" :style="{backgroundImage: `url(${$parent.app.parts.category_image})`}"></div>
          <h3 class="home-category_title">{{ $parent.app.parts.title }}</h3>
        </router-link>
        <router-link v-if='$parent.app.services' to="/services" class="home-category home-category-5">
          <div class="home-category_image" :style="{backgroundImage: `url(${$parent.app.services.category_image})`}"></div>
          <h3 class="home-category_title">{{ $parent.app.services.title }}</h3>
        </router-link>
      </div>
      <div v-if='$parent.app.categories_text' class="container home-catalog_text-container">
        <div class="home-catalog_text" v-html='$parent.app.categories_text'></div>
      </div>
    </section>
    <section class="home-contacts" id="contacts">
      <div class="container">
        <feedback-component
          :productName='$parent.productName'
          :productColor='$parent.productColor'
          :messages='$parent.app.feedback_messages'>
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
  },

  methods: {
    resetFields() {
      this.$parent.productName = null;
      this.$parent.productColor = null;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/home-page.sass'
</style>
