<template>
  <footer class='footer'>
    <div class='container'>
      <span class='footer-text'>{{text}}</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',

  props: ['text']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/footer-component.sass'
</style>
