<template>
  <div class="product-wrapper">
    <div class="product">
      <router-link :to="{name: 'products'}" class="product__backward">Back to products</router-link>
      <h1>{{product.title}}</h1>
      <div class="product__img" :style="'background-image: url(' + product.img + ')'"></div>
      <div class="product__sizes">
        <span>Sizes: </span>
        <span>{{ product.sizes }}</span>
      </div>
      <div class="product__price">
        <span>Price: </span>
        <span>{{ product.price + 'р.'}}</span>
      </div>

      <button v-if="inCart.indexOf(product.id_product) === -1"
              @click="addToCart(product.id_product)"
              class="button"
              >
        Add to cart</button>
      <button v-else
              @click="removeFromCart(product.id_product)"
              class="button"
              >
        Remove to cart
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
    product() {
      return this.$store.getters['products/item'](this.id);
    },
    inCart() {
      return this.$store.getters['cart/products'];
    }
  },

  methods: {
    ...mapActions('cart', {
      addToCart: 'add',
      removeFromCart: 'remove'
    })
  }
}
</script>
<style lang="scss">
@import './../assets/_globalscss/all.scss';

.product-wrapper {
  position: relative;
}

.product {
  text-align: center;
  padding-right: 4.2rem;
  padding-left: 4.2rem;
  max-width: 700px;
  margin: 0 auto;

  @include mq(1023) {
    padding-right: 3.2rem;
    padding-left: 3.2rem;
  }

  @include mq(767) {
    padding-right: 1.6rem;
    padding-left: 1.6rem;
  }

  &__backward {
    position: absolute;
    top: 1.5rem;
    left: 4.2rem;

    @include mq(1023) {
      top: 1rem;
      left: 3.2rem;
    }

    @include mq(767) {
      top: 0rem;
      left: 1.6rem;
    }
  }

  h1 {
    font-size: 4.6rem;
    font-weight: 500;
    padding-top: 4rem;
    margin-bottom: 2rem;

    @include mq(1023) {
      font-size: 2.6rem;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
  }

  &__img {
    width: 100%;
    height: auto;
    padding: 75% 0 0;
    margin-bottom: 1rem;
    background-size: cover;
  }

  &__price {
    display: block;
    margin-bottom: 0.8rem;
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
