<template>
  <div id="app">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  @import 'scss/main';

.slide-leave-active,
.slide-enter-active {
  transition: .4s ease;
}
.slide-enter {
  transform: translate3d(100vw, 0, 0);
}
.slide-leave-to {
  transform: translate3d(-100vw, 0, 0);
}



</style>