<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommand></home-recommand>
  </div>
</template>

<script>
import HomeHeader from './component/Header';
import HomeSwiper from './component/Swiper';
import HomeIcons from './component/Icons';
import HomeRecommand from './component/Recommand';
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand
  },
  name: 'Home'
};
</script>

<style>
</style>
