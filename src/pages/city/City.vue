<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alpha :cities="cities" @change="handleLetterClick"></city-alpha>
  </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './component/Header';
import CityList from './component/List';
import CitySearch from './component/Search';
import CityAlpha from './component/Alpha';

export default {
  components: {
    CityHeader,
    CityList,
    CitySearch,
    CityAlpha
  },
  data() {
    return {
      cities: {},
      hotCities: {},
      letter: ''
    };
  },
  methods: {
    getCityInf0() {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterClick(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityInf0();
  }
};
</script>

<style>
</style>
