<template>
  <div class='header'>
    <div class='header-contacts'>

    </div>
    <div class='container'>
      <img src="../assets/images/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/header-component.sass'
</style>
