<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;

  .header-left {
    width: 0.64rem;
    float: left;

    .iconfont {
      margin-left: 0.18rem;
    }
  }

  .input {
    flex: 1;
    background: #fff;
    height: 0.64rem;
    margin-top: 0.12rem;
    line-height: 0.64rem;
    margin-left: 0.2rem;
    border-radius: 0.2rem;
    padding-left: 0.3rem;
  }

  .header-right {
    width: 1.2rem;
    float: right;
    text-align: center;
    font-size: 15px;

    .iconfont {
      font-size: 0.24rem;
    }
  }
}
</style>
