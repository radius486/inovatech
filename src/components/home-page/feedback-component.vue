<template>
  <div class="feedback-block">
    <h2 class="feedback-block_title">Свяжитесь с нами</h2>
    <form class="feedback-form" :class="{'show-errors': isSubmitClicked}" id="feedback">
      <div class="feedback-field--wrapper">
        <input
          id="productName"
          type="text" class="feedback-form_field"
          :class="{'not-valid': !validateProduct}"
          v-model='currentProductName'>
        <label for="productName" :class="{'active':currentProductName}">*Название товара</label>
        <!--{{validateProduct}}-->
      </div>

      <div class="form-feedback_group">
        <div class="feedback-field--wrapper">
          <input
            id="productColor"
            type="text"
            class="feedback-form_field"
            :class="{'not-valid': !validateColor}"
            v-model='currentProductColor'>
          <label for="productColor" :class="{'active':currentProductColor}">Цвет</label>
          <!--{{validateColor}}-->
        </div>
        <div class="feedback-field--wrapper">
          <input
            id="productQuantity"
            type="text"
            class="feedback-form_field"
            :class="{'not-valid': !validateQuantity}"
            v-model='currentProductQuantity'>
          <label for="productQuantity" :class="{'active':currentProductQuantity}">Количество</label>
          <!--{{validateQuantity}}-->
        </div>
      </div>

      <div class="form-feedback_group">
        <div class="feedback-field--wrapper">
          <input id="customerName"
            type="text"
            class="feedback-form_field"
            :class="{'not-valid': !validateName}"
            v-model='currentCustomerName'>
          <label for="customerName" :class="{'active':currentCustomerName}">Имя</label>
          <!--{{validateName}}-->
        </div>
        <div class="feedback-field--wrapper">
          <masked-input
            class="feedback-form_field"
            :class="{'not-valid': !validatePhone}"
            name="phone"
            id="customerPhone"
            type="phone"
            v-model='currentCustomerPhone'
            :keepCharPositions=true
            :mask="['+', '3', '7', '5', '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]"
            placeholderChar="_">
          </masked-input>
          <label for="customerPhone" :class="{'active':currentCustomerPhone}">Номер телефона</label>
          <!--{{validatePhone}}-->
        </div>
      </div>

      <div class="feedback-field--wrapper">
        <textarea
          id="currentCustomerComment"
          type="text"
          class="feedback-form_field"
          :class="{'not-valid': !validateComment}"
          resize="none"
          v-model='currentCustomerComment'>
        </textarea>
        <label for="currentCustomerComment" :class="{'active':currentCustomerComment}">Комментарий</label>
        <!--{{validateComment}}-->
      </div>

      <input type="submit" class="feedback-form_submit" value="Отправить" :disabled='disabled' :class="{ 'disabled': disabled }" @click.prevent=submitForm()>
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
      currentCustomerComment: null,
      isSubmitClicked: false
    }
  },

  components: {

  },

  computed: {
    validateQuantity() {
      let reg = /^\d+$/;
      if (this.currentProductQuantity == null || this.currentProductQuantity == '') {
        return true;
      } else {
        return reg.test(this.currentProductQuantity);
      }
    },

    validateProduct() {
      let reg = /^[a-zа-яё0-9/() .,_-]*$/i;
      return reg.test(this.currentProductName) && this.currentProductName != null && this.currentProductName != '';
    },

    validatePhone() {
      let reg = /_/;
      return !reg.test(this.currentCustomerPhone) && this.currentCustomerPhone != null && this.currentCustomerPhone != '';
    },

    validateName() {
      let reg = /^[a-zа-яё ]*$/i;
      if (this.currentCustomerName == null || this.currentCustomerName == '') {
        return true;
      } else {
        return reg.test(this.currentCustomerName);
      }
    },

    validateComment() {
      let reg = /^[a-zа-яё0-9/()?@\s .,_-]*$/i;
      if (this.currentCustomerComment == null || this.currentCustomerComment == '') {
        return true;
      } else {
        return reg.test(this.currentCustomerComment);
      }
    },

    validateColor() {
      let reg = /^[a-zа-яё, ]*$/i;
      if (this.currentProductColor == null || this.currentProductColor == '') {
        return true;
      } else {
        return reg.test(this.currentProductColor);
      }
    },

    disabled() {
      return (!this.validateProduct || !this.validatePhone);
    }
  },

  methods: {
    submitForm() {
      console.log('Submit');
      this.isSubmitClicked = true;
      if (this.validateQuantity && this.validateProduct && this.validateName && this.validatePhone && this.validateColor && this.validateComment ) {
        console.log('form is valid');
      } else {
        console.log('form has errors');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../../assets/styles/components/home-page/feedback-component.sass'
</style>
