<template>
  <div class="feedback-block">
    <h2 class="feedback-block_title">Свяжитесь с нами</h2>
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

          <masked-input
            class="feedback-form_field"
            name="phone"
            id="customerPhone"
            type="phone"
            placeholder="*Номер телефона"
            v-model='currentCustomerPhone'
            :keepCharPositions=true
            :mask="['+', '3', '7', '5', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]"
            placeholderChar="#">
          </masked-input>
        </div>
      </div>

      <div class="feedback-field--wrapper">
        <label for="currentCustomerComment" v-if="currentCustomerComment">Комментарий:</label>
        <textarea id="currentCustomerComment" type="text" class="feedback-form_field" placeholder="Комментарий" resize="none" v-model='currentCustomerComment'></textarea>
      </div>

      <input type="submit" class="feedback-form_submit" value="Отправить" :disabled='disabled' :class="{ 'disabled': disabled }" >
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import MaskedInput from 'vue-text-mask';

Vue.component('masked-input', MaskedInput);

export default {
  name: 'feedback-component',

  props: ['productName', 'productColor'],

  data() {
    return {
      currentProductName: this.productName,
      currentProductColor: this.productColor,
      currentCustomerName: null,
      currentCustomerPhone: null,
      currentProductQuantity: null,
      currentCustomerComment: null
    }
  },

  components: {

  },

  computed: {
    disabled() {
      let reg = /#/;

      return (!this.currentProductName || !this.currentCustomerPhone || reg.test(this.currentCustomerPhone));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../../assets/styles/components/home-page/feedback-component.sass'
</style>
