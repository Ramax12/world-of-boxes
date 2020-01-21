<template>
  <div class="products">
    <h1>Products</h1>

    <div class="products__item"
                  v-for="product in products"
                  :key="product.id_product"
                  >
      <router-link :to="'/products/' + product.id_product" tag="h3">{{ product.title }}</router-link>
      <router-link :to="'/products/' + product.id_product" tag="div"
                   class="products__img"
                   :style="'background-image: url(' + product.img + ')'"
                   >
      </router-link>
      <div class="products__price">
        <span>Price: </span>
        <span>{{ product.price + 'p.' }}</span>
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
import {mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters('products', {
      products: 'items'
    }),

    ...mapGetters('cart', {
      inCart: 'products'
    })
  },

  methods: {
    ...mapActions('cart', {
      addToCart: 'add',
      removeFromCart: 'remove'
    })
  },

  beforeCreate () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
<style lang="scss">
@import './../assets/_globalscss/all.scss';

.products {
  padding-right: 2.7rem;
  padding-left: 2.7rem;
  margin-bottom: 5rem;

  @include mq(1023) {
    padding-right: 1.7rem;
    padding-left: 1.7rem;
  }

  @include mq(767) {
    padding-right: 0.7rem;
    padding-left: 0.7rem;
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

  &__item {
    display: inline-block;
    vertical-align: middle;
    width: calc(25% - 3rem);
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 2rem;
    border-radius: 0.6rem;
    margin-right: 1.5rem;
    margin-bottom: 3rem;
    margin-left: 1.5rem;
    background: $colorGrayLight;

    @include mq(1023) {
      width: calc(25% - 2rem);
      padding-top: 2rem;
      padding-bottom: 1rem;
      margin-right: 1rem;
      margin-bottom: 2rem;
      margin-left: 1rem;
    }

    @include mq(767) {
      width: calc(50% - 2rem);
    }
  }

  h3 {
    font-size: 2.2rem;
    font-weight: 400;
    cursor: pointer;

    @include mq(1023) {
      font-size: 1.6rem;
    }
  }

  &__img {
    width: 100%;
    height: auto;
    padding: 75% 0 0;
    margin-bottom: 2rem;
    background-size: cover;
    cursor: pointer;

    @include mq(1023) {
      margin-bottom: 1.2rem;
    }
  }

  &__price {
    margin-bottom: 1.8rem;

    @include mq(1023) {
      font-size: 1.2rem;
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

    @include mq(1023) {
      min-width: 11rem;
      height: 2.4rem;
      padding-top: 0rem;
      font-size: 1.2rem;
    }

    @include mq(1023) {
      min-width: 80%;
    }

    &:hover {
      color: #fff;
      background-color: $colorBlack;
    }
  }
}
</style>
