<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="content" v-show='keyword' ref="search">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li v-show="hasNoData">对不起，搜不出来呀</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
  name: 'CitySearch',
  data() {
    return {
      keyword: '',
      timer: null,
      list: []
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleCityClick(city) {
      this.$store.dispatch('changeCity', city);
      this.$router.push('/');
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.8rem;
  background: $bgColor;
  padding: 0 0.1rem;
  padding-top: 0.02rem;
  line-height: 0.8rem;

  .search-input {
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    width: 100%;
    border-radius: 0.06rem;
  }
}

.content {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  overflow: hidden;
  z-index: 1;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background: #fff;
  }
}
</style>
