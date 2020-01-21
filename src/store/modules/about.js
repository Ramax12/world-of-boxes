export default {
  namespaced: true,

  state: {
    items: getSlides(),
    itemsSpecification: getSlidesSpecification()
  },

  getters: {
    items(state) {
      return state.items;
    },

    itemsSpecification(state) {
      return state.itemsSpecification;
    }
  }
}

function getSlides() {
  return [
    {
      id_slide: 1,
      headline: 'Story',
      title: 'Chapter I',
      subtitle: 'Emphasis on partners and enterprises',
      text: 'The emphasis is on partners and enterprises that are ready to ensure stable supplies and high quality goods.',
      textAdditional: 'It is in our priorities to build mutually beneficial and long-term cooperation with large Russian manufacturers.',
      img: require('./../../assets/img/temp/about-slide1.jpg')
    },
    {
      id_slide: 2,
      headline: 'Innovation',
      title: 'Chapter II',
      subtitle: 'Emphasis on partners and enterprises',
      text: 'The emphasis is on partners and enterprises that are ready to ensure stable supplies and high quality goods.',
      textAdditional: 'It is in our priorities to build mutually beneficial and long-term cooperation with large Russian manufacturers.',
      img: require('./../../assets/img/temp/about-slide2.jpg')
    },
    {
      id_slide: 3,
      headline: 'Business',
      title: 'Chapter III',
      subtitle: 'Emphasis on partners and enterprises',
      text: 'The emphasis is on partners and enterprises that are ready to ensure stable supplies and high quality goods.',
      textAdditional: 'It is in our priorities to build mutually beneficial and long-term cooperation with large Russian manufacturers.',
      img: require('./../../assets/img/temp/about-slide3.jpg')
    },
  ]
}

function getSlidesSpecification() {
  return [
    {
      id_slide: 1,
      text: 'Candidates receive the necessary documents.'
    },
    {
      id_slide: 2,
      text: 'Mutually beneficial commercial conditions.'
    },
    {
      id_slide: 3,
      text: 'Honesty and transparency.'
    },
  ]
}
