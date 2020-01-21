/**
 * Mocking client-server processing
 */
const _products = [
  {'id_product': 1, 'title': 'Cardboard box A', 'img': require('./../assets/img/temp/cardboard-box-a.png'), 'price': 299, 'sizes': '380x175x310 cm.'},
  {'id_product': 2, 'title': 'Cardboard box B', 'img': require('./../assets/img/temp/cardboard-box-b.png'), 'price': 348, 'sizes': '430x290x350 cm.'},
  {'id_product': 3, 'title': 'Cardboard box CO ON', 'img': require('./../assets/img/temp/cardboard-box-co-on.png'), 'price': 155, 'sizes': '28x18x9,5 cm.'},
  {'id_product': 4, 'title': 'Cardboard box CRAFT', 'img': require('./../assets/img/temp/cardboard-box-craft.png'), 'price': 161, 'sizes': '15x15x5,5 cm.'},
  {'id_product': 5, 'title': 'Green tartan', 'img': require('./../assets/img/temp/green-tartan.png'), 'price': 221, 'sizes': '17,5x17,5x17 cm.'},
  {'id_product': 6, 'title': 'Multi-colored peas', 'img': require('./../assets/img/temp/multi-colored-peas.png'), 'price': 187, 'sizes': '10,3x10,3x10,8 cm.'},
  {'id_product': 7, 'title': 'Sunny mood', 'img': require('./../assets/img/temp/sunny-mood.png'), 'price': 187, 'sizes': '10,3x10,3x10,8 cm.'},
  {'id_product': 8, 'title': 'Delicate flowers', 'img': require('./../assets/img/temp/delicate-flowers.png'), 'price': 187, 'sizes': '10,3x10,3x10,8 cm.'}
]

export default {
  getProducts (cb) {
    cb(_products)
  }
}
