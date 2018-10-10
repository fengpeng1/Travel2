<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
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
</style>
