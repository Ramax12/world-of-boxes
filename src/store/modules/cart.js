let products = localStorage.getItem('products');

export default {
  namespaced: true,
  state: {
    products: products ? JSON.parse(products) : [],
    arrCounts: []
  },

  getters: {
    products(state) {
      return state.products;
    },

    quantityhInCart(state) {
      return state.products.length;
    },

    cartProducts: (state, getters, rootState) => {
      return state.products.map((id_product) => {
        const product = rootState.products.items.find(product => product.id_product === id_product);
        const productCount = state.arrCounts.find(product => product.id_product === id_product);

        var count;
        if (productCount) {
          count = productCount.count;
        } else {
          count = 1;
        }

        return {
          id_product: id_product,
          title: product.title,
          img: product.img,
          price: product.price,
          priceSum: product.price * count,
          count: count,
        }
      })
    },

    totalPrice: (state, getters) => {
      return getters.cartProducts.reduce((total, product) => {
        return total + product.priceSum
      }, 0)
    }
  },

  mutations: {
    add(state, id_product) {
      if (state.products.indexOf(id_product) === -1){
        state.products.push(id_product);
      }
      localStorage.setItem('products', JSON.stringify(state.products));
    },

    remove(state, id_product) {
      let position = state.products.indexOf(id_product);

      if ( position !== -1) {
        state.products.splice(position, 1);
      }
      localStorage.setItem('products', JSON.stringify(state.products));
    },

    removeAll(state) {
      state.products = [];
      localStorage.setItem('products', JSON.stringify(state.products));
    },

    changeInput(state, [id_product, value]) {
      const product = state.arrCounts.find(product => product.id_product === id_product);

      if (value !== '') {
        if (product) {
          product.count = parseInt(value);
        } else {
          const count = parseInt(value);
          state.arrCounts.push({id_product, count});
        }
      }
    },

    increment(state, id_product) {
      const product = state.arrCounts.find(product => product.id_product === id_product);

      if (product) {
        product.count++;
      } else {
        const count = 2;
        state.arrCounts.push({id_product, count});
      }
    },

    decrement(state, id_product) {
      const product = state.arrCounts.find(product => product.id_product === id_product);

      if (product) {
        product.count--;

        if (product.count === 0) {
          let position = state.products.indexOf(id_product);

          if (position !== -1) {
            state.products.splice(position, 1);
            product.count = 1;
          }
        }
      } else {
        let position = state.products.indexOf(id_product);

        if (position !== -1) {
          state.products.splice(position, 1);
        }
        localStorage.setItem('products', JSON.stringify(state.products));
      }
    }
  },

  actions: {
    add(store, id_product) {
      store.commit('add', id_product)
    },

    remove(store, id_product) {
      store.commit('remove', id_product)
    },

    removeAll(store) {
      store.commit('removeAll')
    },

    changeInput(store, [id_product, value]) {
      store.commit('changeInput', [id_product, value])
    },

    increment(store, id_product) {
      store.commit('increment', id_product)
    },

    decrement(store, id_product) {
      store.commit('decrement', id_product)
    }
  }
}
