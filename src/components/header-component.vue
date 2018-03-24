<template>
  <header class='header'>
    <section class='header-contacts'>
      <div class='container'>
        <span class='header-phone'>+375(29) 777 22 99</span>
        <span class='header-email'>inovatech.by@gmail.com</span>
      </div>
    </section>
    <section class='header-navigation'>
      <div class='container'>
        <a class='logo'>
          <img src="../assets/images/logo.png">
        </a>
        <nav class="header-menu">
          <a class="header-menu_link active" href='#'>Каталог</a>
          <a class="header-menu_link" href='#'>Услуги</a>
          <a class="header-menu_link" href='#'>Контакты</a>
        </nav>
      </div>
    </section>
  </header>
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
