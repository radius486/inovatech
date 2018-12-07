<template>
  <div class="contacts_block">
    <h2 class="contacts_title">{{contacts.title}}</h2>
    <div class="contacts_info" v-html='contacts.info'></div>
  </div>
</template>

<script>
export default {
  name: 'contacts-component',
  props: ['contacts'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../../assets/styles/components/home-page/contacts-component.sass'
</style>
