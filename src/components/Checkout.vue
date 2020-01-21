<template>
  <div class="checkout">
    <ValidationObserver ref="observer" v-slot="{ fields, invalid }" tag="div">
      <form action="" @submit.prevent="onSubmit" ref="form">
        <h1>Checkout</h1>

        <div class="checkout__section">
          <h2><span>1.</span>Contacts</h2>

          <div class="checkout__content">
            <h3>Your information<span>*</span></h3>
            <div class="checkout__input-field-wrapper">
              <validation-provider rules="required|max:40" v-slot="{ errors }">
                <div class="checkout__input-field">
                  <input class="checkout__input" type="text" name="name" placeholder="First name" v-model="nameValue" ref="_vee_1"/>
                  <div v-if="errors[0]" class="checkout__input-error">{{ errors[0] }}</div>
                </div>
              </validation-provider>

              <validation-provider rules="required|max:40" v-slot="{ errors }">
                <div class="checkout__input-field">
                  <input class="checkout__input" type="text" name="surname" placeholder="Second name" v-model="surnameValue" ref="_vee_2"/>
                  <div v-if="errors[0]" class="checkout__input-error">{{ errors[0] }}</div>
                </div>
              </validation-provider>
            </div>

            <h3>Contacts<span>*</span></h3>
            <div class="checkout__input-field-wrapper">
              <validation-provider rules="required" v-slot="{ errors }">
                <div class="checkout__input-field">
                  <input class="checkout__input" type="tel" name="tel" placeholder="Phone" v-model="telValue" v-imask="mask" ref="_vee_3"/>
                  <div v-if="errors[0]" class="checkout__input-error">{{ errors[0] }}</div>
                </div>
              </validation-provider>

              <validation-provider rules="required|max:40|email" v-slot="{ errors }">
                <div class="checkout__input-field">
                  <input class="checkout__input" type="email" name="email" placeholder="E-mail" data-rule-realemail="true" v-model="emailValue" ref="_vee_4"/>
                  <div v-if="errors[0]" class="checkout__input-error">{{ errors[0] }}</div>
                </div>
              </validation-provider>
            </div>
          </div>
        </div>

        <div class="checkout__section">
          <h2><span>2.</span>Delivery</h2>

          <div class="checkout__content">
            <div class="checkout__radio">
              <label class="checkout__radio-label">
                <input type="radio" class="checkout__radio-input" name="delivery" value="delivery:сourier" v-model="checkedDelivery" checked/>
                <span class="checkout__radio-text">
                  Courier delivery
                </span>
              </label>
            </div>

            <div class="checkout__radio">
              <label class="checkout__radio-label">
                <input type="radio" class="checkout__radio-input" name="delivery" value="delivery:pickup" v-model="checkedDelivery"/>
                <span class="checkout__radio-text">
                  Pickup
                </span>
              </label>
            </div>
          </div>
        </div>

        <div class="checkout__section">
          <h2><span>3.</span>Payment</h2>

          <div class="checkout__content">
            <div class="checkout__radio">
              <label class="checkout__radio-label">
                <input type="radio" class="checkout__radio-input" name="payment" value="payment:cash" checked/>
                <span class="checkout__radio-text">
                  Cash
                </span>
              </label>
            </div>

            <div class="checkout__radio">
              <label class="checkout__radio-label">
                <input type="radio" class="checkout__radio-input" name="payment" value="payment:card"/>
                <span class="checkout__radio-text">
                  Card
                </span>
                <div class="checkout__radio-payment">
                  <img class="checkout__radio-payment-icon" src="https://cdn0.iconfinder.com/data/icons/flat-design-business-set-3/24/payment-method-visa-512.png">
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="checkout__section">
          <h2><span>4.</span>Confirmation</h2>

          <div class="checkout__content">
            <h3>Comment<span>(not necessary)</span></h3>
            <div class="checkout__input-field-wrapper">
              <validation-provider rules="max:1000" v-slot="{ errors }">
                <div class="checkout__input-field">
                  <textarea class="checkout__input checkout__input--comment" name="comment" placeholder="Your comment" v-model="commentValue" ref="_vee_5"></textarea>
                  <div v-if="errors[0]" class="checkout__input-error">{{ errors[0] }}</div>
                </div>
              </validation-provider>
            </div>

            <div class="checkout__total">
                <h3>Total</h3>

              <table class="checkout__table">
                <tr>
                  <td>Order price:</td>
                  <td>{{ totalPrice + 'р.' }}</td>
                </tr>
                <tr>
                  <td>Delivery:</td>
                  <td>
                    <span v-if="checkedDelivery === 'delivery:сourier'">{{ priceDelivery + 'р.' }}</span>
                    <span v-else>0p.</span>
                    </td>
                </tr>
                <tr>
                  <td>To pay:</td>
                  <td>{{ finalPrice() + 'р.' }}</td>
                </tr>
              </table>
            </div>

            <button type="submit" class="button">Confirm and pay</button>
          </div>
        </div>
      </form>
    </ValidationObserver>
    <transition name="showPopap">
      <OrderSuccess v-if="showPopup" @closePopup="closePopupOrderSuccess">
        <h3 slot="header">custom header</h3>
      </OrderSuccess>
    </transition>
  </div>
</template>

<script>
import OrderSuccess from './OrderSuccess';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import {mapGetters, mapActions} from 'vuex';
import anime from 'animejs';
import {IMaskDirective} from 'vue-imask';

extend('required', {
  ...required,
  message: 'Please, fill the field'
});

extend('max', {
  validate(value, { length }) {
    return value.length <= length;
  },
  params: ['length'],
  message: 'The field may not be greater than {length} characters'
});

extend('email', {
  ...email,
  message: 'The e-mail has an incorrect format'
});

export default {
  components: {
    ValidationProvider, ValidationObserver, OrderSuccess
  },

  data() {
    return {
      nameValue: '',
      surnameValue: '',
      telValue: '',
      emailValue: '',
      commentValue: '',
      checkedDelivery: 'delivery:сourier',
      priceDelivery: 300,
      mask: {
        mask: '+7 (000) 000 00 00',
        lazy: true
      },
      showPopup: false
    }
  },

  directives: {
    imask: IMaskDirective
  },

  computed: {
    ...mapGetters('cart', {
      totalPrice: 'totalPrice'
    }),
  },

  methods: {
    ...mapActions('cart', {
      removeAllFromCart: 'removeAll'
    }),

    finalPrice() {
      if (this.checkedDelivery !== 'delivery:сourier') {
        return this.totalPrice
      }
      return this.totalPrice + this.priceDelivery
    },

    onSubmit() {
      this.$refs.observer.validate().then(success => {
        if (success && this.totalPrice !==0) {
          this.openPopupOrderSuccess();
          this.nameValue = this.surnameValue = this.telValue = this.emailValue = this.commentValue = '';
          this.$refs.observer.reset();
          this.removeAllFromCart();

        } else {

          const arr = Object.keys(this.$refs.observer.fields);
          let newArr = [];

          for (let i = 0; i < arr.length; i++) {
            if (this.$refs.observer.fields[arr[i]].valid === false) {
              newArr.push(arr[i]);
            }
          }
          console.log(newArr, this.$refs.observer) //eslint-disable-line no-console

          const animation = anime({ //eslint-disable-line no-unused-vars
            targets: ['html', 'body'],
            scrollTop: {
                value: window.pageYOffset + this.$refs[newArr[0]].getBoundingClientRect().top - 100,
                duration: 1000,
                easing: 'easeOutExpo'
            },
            complete: () => {
              this.$refs[newArr[0]].focus();
            }
          });
        }
      });
    },

    openPopupOrderSuccess() {
      document.querySelector('html').classList.add('is-mobile-overflow');
      document.body.classList.add('is-mobile-overflow');
      this.showPopup = true;
    },

    closePopupOrderSuccess() {
      document.querySelector('html').classList.remove('is-mobile-overflow');
      document.body.classList.remove('is-mobile-overflow');
      this.showPopup = false;
    }
  },

  beforeCreate () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
<style lang="scss">
@import './../assets/_globalscss/all.scss';

.checkout {
  margin-bottom: 5rem;

  h1 {
    font-size: 4.6rem;
    font-weight: 500;
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 3rem;

    @include mq(1023) {
      font-size: 2.6rem;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
  }

  h2 {
    display: inline-block;
    vertical-align: top;
    width: 27.1rem;
    padding-right: 4.2rem;
    padding-left: 4.2rem;
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 400;

    span {
      padding-right: 1rem;
    }

    @include mq(767) {
      padding-right: 1.6rem;
      padding-bottom: 2.2rem;
      padding-left: 1.6rem;

      span {
        padding-right: 0.8rem;
      }
    }
  }

  h3 {
    font-size: 1.6rem;
    line-height: (24 / 16);
    font-weight: 400;
    margin-bottom: 0.9rem;

    span {
      color: rgba($colorBlack, 0.3);
      margin-left: 4px;
    }
}

  &__section {
    padding-top: 4.8rem;
    padding-right: 2.7rem;
    padding-bottom: 4.8rem;
    padding-left: 2.7rem;
    border-bottom: 1px solid rgba($colorBlack, 0.1);

    @include mq(1023) {
      padding-right: 1.7rem;
      padding-left: 1.7rem;
    }

    @include mq(767) {
      padding-top: 3.5rem;
      padding-right: 0.7rem;
      padding-bottom: 3rem;
      padding-left: 0.7rem;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }
  }

  &__content {
    display: inline-block;
    vertical-align: top;
    min-width: 50%;

    @include mq(767) {
      min-width: 100%;
      padding-right: 1.6rem;
      padding-left: 1.6rem;
    }

    .checkout__input-field-wrapper:last-child .checkout__input-field:last-child .checkout__input {
      margin-bottom: 0;
    }
  }

  &__input-field {
    position: relative;
    margin-bottom: 1.8rem;

    .checkout__input-error {
      padding-top: 7px;
      color: $colorRed;
      border-top: 1px solid rgba($colorBlack, 0.5);
    }
  }

  &__input {
    display: flex;
    align-items: center;
    width: 100%;
    height: 4.8rem;
    padding-top: 0.3rem;
    padding-right: 2rem;
    padding-left: 2rem;
    font-size: 1.35rem;
    line-height: (24/16);
    border: none;
    border-radius: 5px;
    background: $colorGrayLight;

    &::placeholder {
      font-weight: 300;
      color: rgba($colorBlack, 0.3);
    }

    &--comment {
      width: 100%;
      min-height: 13.2rem;
      padding-top: 1.2rem;
      padding-right: 2rem;
      padding-bottom: 1.2rem;
      padding-left: 2rem;
      font-family: Arial, serif;
      font-size: 1.35rem;
      line-height: (24/16);
      border: none;
      border-radius: 5px;
      background: $colorGrayLight;
      resize: none;
      overflow: auto;

      &::placeholder {
        font-weight: 300;
        color: rgba($colorBlack, 0.3);
      }
    }
  }

  &__radio {
    display: flex;
    margin-bottom: 1.8rem;

    &:last-child {
      margin-bottom: 0;
    }

    &.is-disabled {
      .checkout__radio-label {
        pointer-events: none;
      }
    }

    &-input {
      display: none;

      &:checked + .checkout__radio-text::before {
        border: 1px solid $colorOrange;
        background: $colorOrange;
      }

      &:checked + .checkout__radio-text::after {
        opacity: 1;
      }

      &:disabled + .checkout__radio-text::before {
        background: none;
      }

      &:disabled + .checkout__radio-text {
        color: rgba($colorBlack, 0.3);
      }

      &:disabled {
        &:checked + .checkout__radio-text::before {
          border: 1px solid #e9e9e9;
          background: #e9e9e9;
        }

        &:checked + .checkout__radio-text::after {
          opacity: 0.2;
        }
      }
    }

    &-label {
      padding-left: 3.6rem;
      cursor: pointer;

      &:hover {
        .checkout__radio-text::before {
          border: 1px solid $colorOrange;
        }
      }
    }

    &-text {
      position: relative;
      display: inline-block;
      vertical-align: top;
      padding-top: 0.3rem;
      font-size: 1.6rem;
      line-height: (24/16);
      font-weight: 500;

      &::before,
      &::after {
        content: '';
        position: absolute;
      }

      &::before {
        top: 0;
        left: -3.6rem;
        width: 2.4rem;
        height: 2.4rem;
        border: 1px solid rgba($colorBlack, 0.3);
        border-radius: 50%;
        background: #fff;
        transition: border 0.5s $easeInOutCirc, background 0.5s $easeInOutCirc;
      }

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -3.6rem;
        width: 2.4rem;
        height: 2.4rem;
        opacity: 0;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='3.5'/%3E%3Cpath d='M12,9a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-1a4,4,0,1,0,4,4,4,4,0,0,0-4-4Z'/%3E%3C/svg%3E");
        transition: opacity 0.5s $easeInOutCirc;
      }
    }

    &-payment {
        display: inline-block;
        vertical-align: bottom;
        max-width: 2.7rem;
        margin-left: 1rem;
    }

    &-payment-icon {
        width: 100%;
        height: auto;
    }
  }

  &__total {
    padding-top: 3.6rem;
    margin-bottom: 4rem;

    @include mq(767) {
      padding-top: 3.1rem;
      margin-bottom: 2.9rem;
    }
  }

  &__table {
    background: $colorGrayLight;

    tr {
      &:nth-child(1) td {
        padding-top: 2.1rem;
      }

      &:nth-child(3) td {
        padding-bottom: 1.6rem;
      }

      &:last-child {
        border-top: 1px solid rgba($colorBlack, 0.1);

        td {
          padding-top: 2.3rem;
          padding-bottom: 1.8rem;

          &:last-child {
            font-size: 2.4rem;
            line-height: (32 / 24);
          }
        }
      }

      @include mq(767) {
        &:nth-child(1) td {
          padding-top: 1.6rem;
        }

        &:nth-child(3) td {
          padding-bottom: 1.2rem;
        }

        &:last-child {
          td {
            padding-top: 2rem;
            padding-bottom: 1.4rem;
          }
        }
      }
    }

    td {
      font-size: 1.6rem;
      line-height: (24 / 16);

      &:nth-child(1) {
        width: 13.5rem;
        padding-bottom: 0.9rem;
        padding-left: 2rem;
        color: rgba($colorBlack, 0.4);
      }

      &:nth-child(2) {
        padding-right: 2rem;
        padding-bottom: 0.9rem;
      }

      @include mq(767) {
        &:nth-child(1) {
          padding-bottom: 0.7rem;
        }

        &:nth-child(2) {
          padding-bottom: 0.7rem;
        }
      }
    }

    .checkout__table-td--color {
      color: $colorYellowDark;
    }
  }

  .button {
    width: 100%;
    height: 5.6rem;
    padding-top: 0.3rem;
    font-size: 2rem;
    line-height: 1;
    color: #fff;
    border: none;
    border-radius: 0.4rem;
    background-color: $colorBlack;
    transition: color 0.5s $easeInOutCirc;
    cursor: pointer;

    @include mq(1023) {
      min-width: 11rem;
      height: 4rem;
      padding-top: 0rem;
      font-size: 1.6rem;
    }

    @include mq(1023) {
      min-width: 80%;
    }

    &:hover {
      color: $colorYellowLight;
    }
  }
}

.showPopap-enter {
  opacity: 0;
}

.showPopap-leave-active {
  opacity: 0;
}
</style>
