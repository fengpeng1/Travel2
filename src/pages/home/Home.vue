<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommand></home-recommand>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './component/Header';
import HomeSwiper from './component/Swiper';
import HomeIcons from './component/Icons';
import HomeRecommand from './component/Recommand';
import HomeWeekend from './component/Weekend';
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekend
  },
  name: 'Home'
};
</script>

<style>
</style>
