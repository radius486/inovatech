<template>
  <header class='header'>
    <section class='header-contacts'>
      <div class='container'>
        <span class='header-phone'>{{phone}}</span>
        <span class='header-email'>{{email}}</span>
      </div>
    </section>
    <section class='header-navigation'>
      <div class='container'>
        <router-link to="/" class="logo" :title='logoTitle'>
          <img src="../assets/images/logo.png">
        </router-link>
        <nav class="header-menu">
          <router-link to="/#catalog" class="header-menu_link">Каталог</router-link>
          <router-link to="/#contacts" class="header-menu_link">Контакты</router-link>
        </nav>
      </div>
    </section>
  </header>
</template>

<script>

export default {

  name: 'header-component',

  props: ['phone', 'email'],

  data () {
    return {

    }
  },

  computed: {
    logoTitle() {
      if (this.$route.path != '/') {
        return 'На главную';
      } else {
        return this.$parent.app.title;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/header-component.sass'
</style>
