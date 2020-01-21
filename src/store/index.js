import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import about from './modules/about';
import cart from './modules/cart';
import products from './modules/products';

export const store = new Vuex.Store({
  modules: {
    about,
    cart,
    products
  },
  strict: process.env.NODE_ENV !== 'production'
})
