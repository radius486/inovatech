<template>
  <div class="home-page">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
.home-page
  margin-top: 150px

</style>
