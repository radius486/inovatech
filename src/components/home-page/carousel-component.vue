<template>
  <carousel v-if='slides'
    :navigationEnabled="true"
    :perPage="1"
    :autoplay="true"
    :speed="2000"
    :autoplayTimeout="20000"
    navigationPrevLabel="‹"
    navigationNextLabel="›"
    paginationActiveColor="#146c10"
    paginationColor="#fff"
    :loop="true">
    <slide v-for='(slide, index) in slides' :key='index'>
      <div :style="{backgroundImage: 'url(' + slide + ')'}" class="home-image"></div>
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
