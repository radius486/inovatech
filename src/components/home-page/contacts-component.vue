<template>
  <div class="contacts_block">
    <h2 class="contacts_title">{{contacts.title}}</h2>
    <p class="contacts_company">{{contacts.company}}</p>
    <p class="contacts_unp">{{contacts.unp}}</p>
    <p class="contacts_phone" v-html='contacts.phones'></p>
    <p class="contacts_email">{{contacts.email}}</p>
    <p class="contacts_address">{{contacts.address}}</p>
    <p class="contacts_working-time">{{contacts.workingTime}}</p>
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
