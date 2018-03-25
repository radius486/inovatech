<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./components/header-component.vue";
import FooterComponent from "./components/footer-component.vue";

export default {
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang='sass'>
  @import './assets/styles/app.sass'
</style>
