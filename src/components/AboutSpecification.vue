<template>
  <div class="about-specification">
    <div class="about__wrapper">
      <h2>We build our cooperation with suppliers based on the following:</h2>
      <div class="about-specification__list-wrapper">
        <div class="about-specification__list">
          <div class="about-specification__scroll" ref="scroll">
            <div class="about-specification__item" v-for="slide in slides" :key="slide.id_slide" @touchstart="touchScroll($event)">
              <p>{{ slide.text }}</p>
            </div>
          </div>

          <div class="about-specification__dots" ref="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div class="about-specification__video">
        <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Plyr from 'plyr';
import {mapGetters} from 'vuex';
import anime from 'animejs'

export default {
  data() {
    return {
      currentIndex: 0,
      startX: null,
      canAnimate: true,
    }
  },

  mounted() {
    const player = new Plyr('#player'); //eslint-disable-line no-unused-vars

    this.$refs.dots.children[0].classList.add('is-active');
  },

  computed: {
    ...mapGetters('about', {
      slides: 'itemsSpecification'
    })
  },

  methods: {
    touchScroll(e) {
      const target = e.changedTouches[0].target;
      const startCoord = e.changedTouches[0].screenX;

      const endHandler = e => {
        const endCoord = e.changedTouches[0].screenX;
        // движение на более чем 30 пикселей
        if (Math.abs(startCoord - endCoord) > 30) {
          if (endCoord > startCoord) {

            if (this.canAnimate) {
            this.canAnimate = false;
              this.currentIndex = this.currentIndex - 1;
              this.moveSlider();
            }
          } else {
            if (this.canAnimate) {
            this.canAnimate = false;

              this.currentIndex = this.currentIndex + 1;
              this.moveSlider();
            }
          }
        }

        target.removeEventListener('touchend', endHandler);
      };

      target.addEventListener('touchend', endHandler);
    },

    moveSlider() {
      const newX = (this.$refs.scroll.children[0].clientWidth + parseInt(window.getComputedStyle(this.$refs.scroll.children[0]).getPropertyValue('margin-right'))) * this.currentIndex;

      if (this.currentIndex < 0) {
        this.currentIndex = 0;
      }

      if (this.currentIndex > this.slides.length - 1) {
        this.currentIndex = this.slides.length - 1;
      }

      this.$refs.dots.children.forEach(item => {
        item.classList.remove('is-active');
      });
      this.$refs.dots.children[this.currentIndex].classList.add('is-active');

      anime({
        targets: this.$refs.scroll,
        scrollLeft: {
          value: newX,
          duration: 500,
          easing: 'easeInOutCirc',
        },
        complete: () => {
          this.canAnimate = true;
        },
      });
    }
  }
}
</script>
<style lang="scss">
@import './../assets/_globalscss/all.scss';
@import './../assets/libscss/plyr.scss';

.about-specification {
  margin-bottom: 12.2rem;

  @include mq(1023) {
    margin-bottom: 4.1rem;
  }

  h2 {
    position: relative;
    padding-top: 11.6rem;
    padding-right: 11.6rem;
    padding-bottom: 4rem;
    font-family: $Garamond;
    font-size: 4rem;
    line-height: (40 / 40);
    font-weight: 500;
    letter-spacing: 0.4px;
    text-align: center;
    margin-bottom: 5rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: calc(50% - 4.6rem);
      width: 9.2rem;
      height: 2px;
      background: $colorOrange;
    }

    @include mq(1023) {
      padding-right: 2.3rem;
      padding-left: 2.3rem;
      font-size: 2.8rem;
      margin-bottom: 2.6rem;
    }
  }

  &__list-wrapper {
    @include mq(767) {
      margin-right: -1.6rem;
      margin-left: -1.6rem;
    }
  }

  &__scroll {
    display: flex;
    margin-bottom: 7.2rem;

    @include mq(767) {
      margin-bottom: 1.4rem;
      overflow: hidden;

      &::before,
      &::after {
        content: '';
        display: inline-block;
        vertical-align: top;
        flex-shrink: 0;
        width: 1.6rem;
        min-height: 1px;
      }
    }
  }

  &__item {
    width: 33.3333%;
    padding-top: 3.2rem;
    padding-right: 4rem;
    padding-bottom: 3.2rem;
    padding-left: 4rem;
    font-size: 1.6rem;
    line-height: (24 / 16);
    text-align: center;
    background: $colorGrayLight;
    margin-right: 3.6rem;

    @include mq(1023) {
      padding-top: 1.9rem;
      padding-right: 1.5rem;
      padding-bottom: 1.9rem;
      padding-left: 1.5rem;
      margin-right: 1.6rem;
    }

    @include mq(767) {
      flex: 1 0 auto;
      width: calc(100% - 3.2rem);
      font-size: 1.4rem;
      line-height: (20 / 14);
      border-radius: 10px;
      margin-right: 0.8rem;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__dots {
    text-align: center;
    margin-bottom: 4.3rem;

    span {
      display: none;

      @include mq(767) {
        display: inline-block;
        vertical-align: middle;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background: rgba($colorBlack, 0.2);
        transition: background 0.5s $easeInOutCirc;
        margin-right: 1.3rem;

        &:last-child {
          margin-right: 0;
        }
      }

      &.is-active {
        background: $colorBlack;
      }
    }
  }

  &__video {
    position: relative;

    @media (min-width: 768px) {
      .plyr--video {
        width: calc((100vh - 130px)/ 9 * 16);
        margin: 0 auto;
      }
    }
  }
}
</style>
