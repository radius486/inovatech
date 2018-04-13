<template>
  <div class="feedback-block">
    <h2 class="feedback-block_title">Форма заказа товара</h2>
    <form class="feedback-form" id="feedback">
      <div class="feedback-field--wrapper">
        <label for="productName" v-if="currentProductName">Название товара:</label>
        <textarea id="productName" type="text" class="feedback-form_field" placeholder="*Название товара" resize="none" v-model='currentProductName'></textarea>
      </div>

      <div class="form-feedback_group">
        <div class="feedback-field--wrapper">
          <label for="productColor" v-if='currentProductColor'>Цвет:</label>
          <input id="productColor" type="text" class="feedback-form_field" placeholder="Цвет" v-model='currentProductColor'>
        </div>
        <div class="feedback-field--wrapper">
          <label for="productQuantity" v-if='currentProductQuantity'>Количество:</label>
          <input id="productQuantity" type="text" class="feedback-form_field" placeholder="Количество" v-model='currentProductQuantity'>
        </div>
      </div>

      <div class="form-feedback_group">
        <div class="feedback-field--wrapper">
          <label for="customerName" v-if='currentCustomerName'>Имя:</label>
          <input id="customerName" type="text" class="feedback-form_field" placeholder="Имя" v-model='currentCustomerName'>
        </div>
        <div class="feedback-field--wrapper">
          <label for="customerPhone" v-if='currentCustomerPhone'>Номер телефона:</label>
          <input id="customerPhone" type="text" class="feedback-form_field" placeholder="*Номер телефона" v-model='currentCustomerPhone'>
        </div>
      </div>

      <input type="submit" class="feedback-form_submit" value="Заказать" :disabled='disabled' :class="{ 'disabled': disabled }" >
    </form>
  </div>
</template>

<script>

export default {
  name: 'feedback-component',

  props: ['productName', 'productColor'],

  data() {
    return {
      currentProductName: this.productName,
      currentProductColor: this.productColor,
      currentCustomerName: null,
      currentCustomerPhone: null,
      currentProductQuantity: null
    }
  },

  components: {

  },

  computed: {
    disabled() {
      return (!this.currentProductName || !this.currentCustomerPhone);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../../assets/styles/components/home-page/feedback-component.sass'
</style>
