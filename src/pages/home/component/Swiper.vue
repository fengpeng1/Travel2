<template>

  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl" /></swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>

  </swiper>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'https://www.telegraph.co.uk/content/dam/Travel/2018/January/sydney-best-GETTY.jpg?imwidth=450'
        },
        {
          id: '0002',
          imgUrl:
            'https://cdn.gobankingrates.com/wp-content/uploads/2017/12/10-Miami-Florida-shutterstock_649403671-848x477.jpg'
        },
        {
          id: '0003',
          imgUrl:
            'https://cdn.gobankingrates.com/wp-content/uploads/2017/12/10-Miami-Florida-shutterstock_649403671-848x477.jpg'
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: red !important;
}

.swiper-img {
  width: 100%;
  height: 4rem;
}
</style>
