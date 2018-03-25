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
  data () {
    return {
      text: 'Copyright © 2018 НП ООО «Иноватех». Все права защищены.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/footer-component.sass'
</style>
