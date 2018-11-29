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

      <section v-if='services' class="gallery">
        <h2 class="gallery-title">{{services.gallery_title}}</h2>

        <div class='gallery-list'>
          <div
            v-for='item in services.gallery'
            class="gallery-item"
            :style="{backgroundImage: 'url(' + item + ')'}"
            @click.prevent='openImage(item)'></div>
        </div>

        <sweet-modal
          class='gallery-overlay'
          modal-theme='white'
          overlay-theme='dark'
          ref='galleryOverlay'
          @close='closeImage'>
          <img :src='current_image'>
        </sweet-modal>
      </section>

      <p v-if='!services' class="services-none">Услуги не найдены</p>
    </div>
  </div>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue';

export default {
  name: 'services-page',

  data() {
    return {
      current_image: null
    }
  },

  components: {
    SweetModal
  },

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
    },

    openImage(image) {
      this.$refs.galleryOverlay.open()
      this.current_image = image
    },

    closeImage() {
      setTimeout(() => {
        this.current_image = null
      }, 300)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/services-page.sass'
</style>
