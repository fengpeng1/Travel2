<template>
  <div>
    <div class="recommand">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommandList" :key="item.id">
        <div class="item-imgwrapper">
          <img class="imgself" :src='item.imgUrl'>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-dsc">{{item.dsc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommand',
  data() {
    return {
      recommandList: [
        {
          id: '0001',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
          dsc: '十一七天，欢迎您的到来',
          title: '北京野生动物园'
        },
        {
          id: '0002',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          dsc: '十一七天，欢迎您的到来',
          title: '故宫博物馆'
        },
        {
          id: '0003',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
          dsc: '十一七天，欢迎您的到来',
          title: '欢乐谷'
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.recommand {
  background: #eee;
  line-height: 0.8rem;
  text-indent: 0.3rem;
  margin-top: 0.1rem;
}

.item {
  display: flex;
  height: 1.9rem;
  background: white;
  margin-top: 0.2rem;

  .item-imgwrapper {
    width: 25%;
    overflow: hidden;
    padding-left: 0.2rem;

    .imgself {
      width: 100%;
    }
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    padding-left: 0.2rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-dsc {
      line-height: 0.4rem;
      color: #bbb;
      padding-top: 0.1rem;
      ellipsis();
    }

    .item-button {
      background: #ff9300;
      line-height: 0.4rem;
      border-radius: 0.06rem;
      margin-top: 0.2rem;
      padding: 0 0.2rem;
    }
  }
}
</style>
