import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Products from './components/Products'
import ProductItem from './components/ProductItem'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import About from './components/About'
import E404 from './components/E404'

const routes = [
    {
      path: '',
      redirect: {name: 'about'}
    },
    {
      name: 'products',
      path: '/products',
      component: Products
    },
    {
      name: 'productItem',
      path: '/products/:id',
      component: ProductItem
    },
    {
      name: 'cart',
      path: '/cart',
      component: Cart
    },
    {
      name: 'checkout',
      path: '/checkout',
      component: Checkout
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      path: '*',
      component: E404
    }
];

export const router = new VueRouter({
    mode: 'hash',
    routes
})
