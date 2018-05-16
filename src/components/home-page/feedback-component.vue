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
            @click='setPhoneBeginning'
            @focus='setPhoneBeginning'
            class="feedback-form_field"
            :class="{'not-valid': !validatePhone}"
            name="phone"
            id="customerPhone"
            type="phone"
            v-model='currentCustomerPhone'
            :keepCharPositions=true
            :mask="['+', /\d/, /\d/, /\d/, '(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]"
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

    <sweet-modal
      class='feedback-overlay'
      :icon='messageStatus'
      modal-theme='white'
      overlay-theme='dark'
      ref='feedbackOverlay'
      @close='resetForm'>
      {{messageText}}
    </sweet-modal>
  </div>
</template>

<script>
import Vue from 'vue';
import MaskedInput from 'vue-text-mask';
import { SweetModal } from 'sweet-modal-vue';

import $ from 'jquery';

Vue.component('masked-input', MaskedInput);

export default {
  name: 'feedback-component',

  props: ['productName', 'productColor', 'messages'],

  data() {
    return {
      currentProductName: this.productName,
      currentProductColor: this.productColor,
      currentCustomerName: null,
      currentCustomerPhone: null,
      currentProductQuantity: null,
      currentCustomerComment: null,
      isSubmitClicked: false,
      messageText: null,
      messageStatus: null
    }
  },

  components: {
    SweetModal
  },

  computed: {
    validateQuantity() {
      let reg = /^\d+$/;
      if (this.currentProductQuantity == null || this.currentProductQuantity == '') {
        return true;
      } else {
        return reg.test(this.currentProductQuantity) && this.currentProductQuantity < 1000;
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
      let reg = /^[a-zа-яё, -]*$/i;
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
        this.sendForm();
      } else {
        this.messageText = this.messages.warning;
        this.messageStatus = 'warning';
        this.$refs.feedbackOverlay.open();
      }
    },

    sendForm() {
      let data = {
        name: this.currentCustomerName,
        phone: this.currentCustomerPhone,
        product: this.currentProductName,
        color: this.currentProductColor,
        quantity: this.currentProductQuantity,
        comment: this.currentCustomerComment
      }

      $.ajax({
        type: "post",
        url: "/php/email.php",
        dataType:"text",
        data: data,
        success: (response) => {
          this.messageStatus = response;

          if (response == 'success') {
            this.messageText = this.messages.success;
            this.$refs.feedbackOverlay.open();
          } else {
            this.messageText = this.messages.error;
            this.$refs.feedbackOverlay.open();
          }
        },
        error: () => {
          this.messageText = this.messages.error;
          this.messageStatus = 'error';
          this.$refs.feedbackOverlay.open();
        }
      })
    },

    setPhoneBeginning() {
      if(this.currentCustomerPhone == null || this.currentCustomerPhone == '') {
        this.currentCustomerPhone = '+375';
        setTimeout(function() {
          document.getElementById('customerPhone').selectionStart = 5;
        }, 100);
      }
    },

    resetForm() {
      this.messageText = null;
      this.messageStatus = null;

      if (this.messageStatus == 'success') {
        this.currentProductName = null;
        this.currentProductColor = null;
        this.currentCustomerName = null;
        this.currentCustomerPhone = null;
        this.currentProductQuantity = null;
        this.currentCustomerComment = null;
        this.isSubmitClicked = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
  @import '../../assets/styles/components/home-page/feedback-component.sass'
</style>
