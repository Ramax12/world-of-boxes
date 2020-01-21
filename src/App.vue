<template>
  <div id="app">
    <Header/>
    <transition name="appearance" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './template/header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import './assets/_globalscss/all.scss';

#app {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

.appearance-enter {
  opacity: 0;
}

.appearance-enter-active {
  transition: opacity 0.5s $easeInOutCirc;
}

.appearance-leave-active {
  transition: opacity 0.5s $easeInOutCirc;
}
.appearance-leave-to {
  opacity: 0;
}
</style>
