<template>
  <div class="order-success-wrapper" @click="$emit('closePopup')">
    <div class="order-success">
      <div class="order-success__close-btn" @click="$emit('closePopup')"></div>
      <h1>Thanks for your order!</h1>
      <p class="order-success__subtitle">Your order successfully created. We will contact you as soon as the order is completed.</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
@import './../assets/_globalscss/all.scss';

.order-success-wrapper {
  position: fixed;
  z-index: 2;
  top: -1.5rem;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba($colorGrayLight2, 0.6);
  transition: opacity .5s ease;
}
.order-success {
  position: relative;
  top: 30%;
  max-width: 54rem;
  padding-top: 3.2rem;
  padding-right: 5.5rem;
  padding-bottom: 3.2rem;
  padding-left: 5.5rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 0.8rem 4rem 0 rgba(0, 0, 0, 0.08);
  margin-right: auto;
  margin-left: auto;

  @include mq(767) {
    top: 0;
    height: 100%;
    padding-top: 3.2rem;
    padding-right: 1.6rem;
    padding-bottom: 3.2rem;
    padding-left: 1.6rem;
    border-radius: 0;
  }

  h1 {
    font-size: 2.4rem;
    line-height: (28 / 24);
    font-weight: 400;
    text-align: center;
    margin-bottom: 2.8rem;

    @include mq(767) {
      margin-bottom: 2.2rem;
    }
  }

  &__subtitle {
    padding-right: 4.6rem;
    padding-left: 4.6rem;
    font-size: 1.6rem;
    line-height: (20 / 16);
    text-align: center;

    @include mq(767) {
      padding-right: 2.2rem;
      padding-left: 2.2rem;
    }
  }

  &__close-btn {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    &:hover::before,
    &:focus::before,
    &:hover::after,
    &:focus::after {
      background: rgba($colorBlack, 0.4);
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      bottom: -0.1rem;
      width: 0.1rem;
      min-width: 1px;
      height: 2.2rem;
      background: $colorBlack;
      transition: background-color 0.5s $easeInOutCirc;
    }

    &::before {
      left: calc(50% - 0.05rem);
      transform: rotate(45deg);
    }

    &::after {
      right: calc(50% - 0.05rem);
      transform: rotate(-45deg);
    }
  }
}
</style>
