<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom"> 当前城市</div>
        <div class="listWrapper">
          <div class="cityname">
            <div class="city">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom"> 热门城市</div>
        <div class="listWrapper">
          <div class="cityname" v-for='item of hotCities' :key='item.id' @click="handleCityClick(item.name)">
            <div class="city">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom"> {{key}} </div>
        <div class="detailWrapper" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
          <div class="detailcity border-topbottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';

export default {
  name: 'CityList',
  props: {
    hotCities: '',
    cities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  methods: {
    handleCityClick(city) {
      this.$store.dispatch('changeCity', city);
      this.$router.push('/');
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &before {
    border-color: #ccc;
  }

  &after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.city-list {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .area {
    .title {
      height: 0.6 rem;
      line-height: 0.6rem;
      background: #eee;
      font-size: 0.28rem;
      padding-left: 0.2rem;
    }

    .detailWrapper {
      .detailcity {
        height: 0.8rem;
        line-height: 0.8rem;
        padding-left: 0.3rem;
        font-size: 0.3rem;
      }
    }

    .listWrapper {
      overflow: hidden;

      .cityname {
        float: left;
        width: 30%;

        .city {
          height: 0.8rem;
          line-height: 0.8rem;
          text-align: center;
          border: 0.02rem solid #ccc;
          border-radius: 0.1rem;
          margin: 0.1rem;
        }
      }
    }
  }
}
</style>
