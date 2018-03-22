<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from "./components/header-component.vue";

export default {
  name: 'App',

  components: {
    HeaderComponent
  }
}
</script>

<style lang='sass'>
  @import './assets/styles/app.sass'
</style>
