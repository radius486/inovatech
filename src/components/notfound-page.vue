<template>
  <div class="notfound-page" :style="{minHeight: ''+ blockHeight +'px'}">
    <div class="container">
      <router-link to='/' class='back-link'>« На главную</router-link>
      <section class="notfound_content" :style="{minHeight: ''+ contentHeight +'px'}">
        <h2 class="notfound_title">404</h2>
        <p class="notfound_text">{{notfoundText}}</p>
      </section>
    </div>
  </div>
</template>

<script>

import $ from 'jquery';

export default {
  name: 'notfound-page',

  data () {
    return {
      blockHeight: 0,
      contentHeight: 0
    }
  },

  mounted() {

    $(document).ready(() => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
      this.contentHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight() - $('.back-link').outerHeight() - 20;
    });

    $(window).on('resize', () => {
      this.blockHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight();
      this.contentHeight = window.innerHeight  - $('.header').outerHeight() - $('.footer').outerHeight() - $('.back-link').outerHeight() - 20;
    });
  },

  computed: {
    notfoundText() {
      return this.$parent.app.notfound_text;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/notfound-page.sass'
</style>
