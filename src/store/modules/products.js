import shop from '../../api/shop'

export default {
  namespaced: true,
  state: {
    items: []
  },

  getters: {
    items(state) {
      return state.items;
    },

    itemsMap(state) {
      let itemsMap = {};

      for (let i = 0; i < state.items.length; i++) {
        let product = state.items[i];
        itemsMap[product.id_product] = product;
      }

      return itemsMap;
    },

    item: (state, getters) => (id) => {
      return getters.itemsMap[id];
    }
  },

  mutations: {
    setProducts (state, products) {
      state.items = products
    },
  },

  actions: {
    getAllProducts ({ commit }) {
      shop.getProducts(products => {
        commit('setProducts', products)
      })
    }
  }
}
