<template>
  <div class="cart">
    <h1>Cart</h1>
    <div class="cart__empty" v-if="empty">
      Your card is empty
    </div>
    <template v-else>
      <div class="cart__product" v-for="product in products" :key="product.id_product">
        <div class="cart__product-img" :style="'background-image: url(' + product.img + ')'"></div>

        <div class="cart__product-title">{{ product.title }}</div>

        <div class="cart__product-counter">
          <button class="cart__counter-button" @click.prevent="decrement((product.id_product))">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.98 19.98">
              <rect x="3.99" y="9.49" width="12" height="1"/>
            </svg>
          </button>
          <input class="cart__counter-input" type="text" :value="product.count" @change="changeInput([product.id_product, $event.target.value])" v-imask="mask">
          <button class="cart__counter-button" @click.prevent="increment(product.id_product)" :disabled="product.count >= 300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.98 19.98">
              <polygon points="15.99 9.49 10.49 9.49 10.49 3.99 9.49 3.99 9.49 9.49 3.99 9.49 3.99 10.49 9.49 10.49 9.49 15.99 10.49 15.99 10.49 10.49 15.99 10.49 15.99 9.49"/>
            </svg>
          </button>
        </div>

        <div class="cart__product-price">{{ product.priceSum + 'р.' }}</div>

        <div class="cart__product-remove" @click.prevent="remove(product.id_product)"></div>
      </div>
      <div class="cart__total">
        <span class="cart__total-text">Total: </span>
        <span class="cart__total-price">{{ totalPrice + 'р.' }}</span>
      </div>

      <button @click="onOrder" class="button">Order now</button>
    </template>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import {IMaskDirective} from 'vue-imask';

export default {
  data() {
    return {
      mask: {
        mask: Number,
        max: 300
      }
    }
  },

  directives: {
    imask: IMaskDirective
  },

  computed: {
    ...mapGetters('cart', {
      products: 'cartProducts',
      totalPrice: 'totalPrice'
    }),

    empty() {
      return this.products.length === 0;
    },
  },

  methods: {
    ...mapActions('cart', {
      changeInput: 'changeInput',
      increment: 'increment',
      decrement: 'decrement',
      remove: 'remove'
    }),

    onOrder() {
      this.$router.push('/checkout');
    }
  },

  beforeCreate() {
    this.$store.dispatch('products/getAllProducts');
  },

  mounted() {
    // localStorage.setItem('cartProducts', JSON.stringify(this.products));
  }
}
</script>
<style lang="scss">
@import './../assets/_globalscss/all.scss';

.cart {
  padding-right: 4.2rem;
  padding-left: 4.2rem;
  text-align: center;
  margin-bottom: 5rem;

  @include mq(1023) {
    padding-right: 3.2rem;
    padding-left: 3.2rem;
  }

  @include mq(767) {
    padding-right: 1.6rem;
    padding-left: 1.6rem;
  }

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

  &__empty {
    font-size: 2.2rem;
  }

  &__product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 700px;
    margin-right: auto;
    margin-bottom: 2rem;
    margin-left: auto;
  }

  &__product-title {
    width: 13rem;
    text-align: left;
    padding-left: 1rem;
  }

  &__product-img {
    width: 90px;
    height: 70px;
    text-align: left;
    background-size: cover;

    @include mq(767) {
      width: 60px;
      height: 40px;
    }
  }

  &__product-counter {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 8.8rem;
    height: 4rem;
    border: 1px solid $colorBorder;
    border-radius: 5px;

    @include mq(767) {
      min-width: 8.3rem;
      height: 3.5rem;
    }
  }

  &__counter-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
      transition: fill 0.5s $easeInOutCirc;
    }

    &:hover {
      svg {
        fill: $colorOrange;
        transition: fill 0.5s $easeInOutCirc;
      }
    }

    &:disabled {
      svg {
        fill: $colorBorder;
      }

      pointer-events: none;
    }
  }

  &__counter-input {
    display: inline-block;
    vertical-align: top;
    width: 3.6rem;
    font-size: 1.4rem;
    line-height: (20/14);
    text-align: center;
    border: none;
    background: none;
  }

  &__product-price {
    width: 60px;
  }

  &__product-remove {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    padding: 5px;
    cursor: pointer;

    &::before, &::after {
      content: '';
      position: absolute;
      top: calc(50% - 2px);
      left: 25%;
      width: 50%;
      height: 1px;
      background: $colorBlack;
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  &__total {
    margin-bottom: 3rem;

    @include mq(767) {
      margin-bottom: 1.2rem;
    }
  }

  .button {
    min-width: 14rem;
    height: 3.4rem;
    padding-top: 0.3rem;
    font-size: 1.6rem;
    line-height: 1;
    border: none;
    border-radius: 0.4rem;
    background-color: $colorYellowLight;
    transition: color 0.5s $easeInOutCirc, background 0.5s $easeInOutCirc;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: $colorBlack;
    }
  }
}
</style>
