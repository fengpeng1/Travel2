<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages " :key="index">
        <div class="icon-one" v-for="item of page" :key="item.id">
          <div class="icon-content">
            <img class="icon-img" :src="item.imgUrl">
          </div>
          <p class="icon-dsc">{{item.dsc}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          dsc: '北京必游'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dsc: '快乐玩'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dsc: '快乐玩'
        },
        {
          id: '0004',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dsc: '快乐玩'
        },
        {
          id: '0005',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dsc: '快乐玩'
        },
        {
          id: '0006',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dsc: '快乐玩'
        },
        {
          id: '0007',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dsc: '快乐玩'
        },
        {
          id: '0008',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dsc: '快乐玩'
        },
        {
          id: '0009',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dsc: '快乐玩'
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 50%;

  .icon-one {
    overflow: hidden;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    float: left;

    .icon-content {
      position: absolute;
      width: 35%;
      padding-left: 0.3rem;
      padding-top: 0.17rem;
      display: block;

      .icon-img {
        display: block;
        width: 50%;
        bottom: 0.44rem;
      }
    }

    .icon-dsc {
      position: relative;
      text-align: center;
      height: 0.35rem;
      margin-top: 1.55rem;
    }
  }
}
</style>
