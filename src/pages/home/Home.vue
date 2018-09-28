<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './component/Header';
import HomeSwiper from './component/Swiper';
export default {
  components: {
    HomeHeader,
    HomeSwiper
  },
  name: 'Home'
};
</script>

<style>
</style>
