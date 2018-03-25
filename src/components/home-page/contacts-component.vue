<template>
  <div class="contacts_block">
    <h2 class="contacts_title">{{title}}</h2>
    <p class="contacts_company">{{company}}</p>
    <p class="contacts_unp">{{unp}}</p>
    <p class="contacts_phone">{{phone}}</p>
    <p class="contacts_email">{{email}}</p>
    <p class="contacts_address">{{address}}</p>
    <p class="contacts_working-time">{{workingTime}}</p>
  </div>
</template>

<script>
export default {
  name: 'contacts-component',
  data () {
    return {
      title: 'Контакты',
      company: 'НП ООО «Иноватех»',
      unp: 'УНП 690669738',
      phone: '+37529 777 22 99',
      email: 'inovatech.by@gmail.com',
      address: 'Республика Беларусь, Минская обл., Минский р-н, д.Боровляны, ул.40 лет Победы, д.27, корп.4, комн.401',
      workingTime: 'Режим работы: 09:00 - 17:00'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../../assets/styles/components/home-page/contacts-component.sass'
</style>
