<template>
  <carousel v-if='slides'
    :navigationEnabled="true"
    :perPage="1"
    :autoplay="true"
    :speed="1000"
    :autoplayTimeout="4000"
    navigationPrevLabel="‹"
    navigationNextLabel="›"
    paginationActiveColor="#146c10"
    paginationColor="#fff"
    :loop="true">
    <slide v-for='(slide, index) in slides' :key='index'>
      <img :src='slide' class="home-image">
    </slide>
  </carousel>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'carousel-component',

  props: ['slides'],

  components: {
    Carousel,
    Slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../../assets/styles/components/home-page/carousel-component.sass'
</style>
