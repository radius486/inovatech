<template>
  <div class="home-page">
    <section class='home-carousel'>
      <div class="container">
        <img src='../assets/images/banner.jpg' class="home-image">
      </div>
    </section>
    <section class="home-catalog">
      <div class="container">
        <a class="home-category" href='#'>
          <img class="home-category_image" src='../assets/images/printer.jpg'></img>
          <h3 class="home-category_title">3d принтеры</h3>
        </a>
        <a class="home-category" href='#'>
          <img class="home-category_image" src='../assets/images/printer.jpg'></img>
          <h3 class="home-category_title">Пластик</h3>
        </a>
        <a class="home-category" href='#'>
          <img class="home-category_image" src='../assets/images/printer.jpg'></img>
          <h3 class="home-category_title">Запчасти</h3>
        </a>
        <a class="home-category" href='#'>
          <img class="home-category_image" src='../assets/images/printer.jpg'></img>
          <h3 class="home-category_title">Услуги</h3>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../assets/styles/components/home-page.sass'
</style>
