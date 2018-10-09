<template>
  <div class="header">
    <router-link to='/'>
      <div class="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
    </router-link>
    <h1 class="text">
      城市选择
    </h1>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  height: 0.8rem;
  background: $bgColor;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.32rem;

  .header-left {
    float: left;
    height: 100%;
    line-height: 0.8rem;
    width: 0.8rem;

    .iconfont {
      padding-left: 0.2rem;
      color: #fff;
    }
  }

  .text {
    text-align: center;
    margin-right: 1rem;
    color: #fff;
  }
}
</style>
