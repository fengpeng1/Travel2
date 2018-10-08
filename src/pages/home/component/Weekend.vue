<template>
  <div>
    <div class="gowhere">
      周末去哪儿
    </div>
    <div class="onePiece" v-for="item of placeList" :key="item.id">
      <div class="imgWrapper">
        <img class="img" :src='item.imgUrl'>
      </div>
      <div class="word">
        <p class="word-1">{{item.dsc1}}</p>
        <p class="word-2">{{item.dsc2}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      placeList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg',
          dsc1: '登高望远秋色佳',
          dsc2: '山顶满眼彩色，此情此景醉了'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          dsc1: '北京必游TOP10',
          dsc2: '来北京必去的景点非这些地方莫属'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          dsc1: '寻找北京的皇城范儿',
          dsc2: '数百年的宫廷庙宇，至今依旧威严霸气'
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.gowhere {
  background: #eee;
  line-height: 0.8rem;
  text-indent: 0.3rem;
  margin-top: 0.1rem;
}

.onePiece {
  position: relative;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;

  .imgWrapper {
    .img {
      width: 100%;
    }
  }

  .word {
    position: relative;
    padding: 0.14rem 0.2rem 0.2rem 0.2rem;

    .word-1 {
      padding-right: 1.4rem;
      font-size: 0.28rem;
      line-height: 0.48rem;
    }

    .word-2 {
      padding-right: 1.4rem;
      font-size: 0.24rem;
      line-height: 0.42rem;
      color: #616161;
    }
  }
}
</style>
