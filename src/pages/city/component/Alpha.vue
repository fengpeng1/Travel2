<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key" :ref="key">
      {{key}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlpha',
  props: {
    cities: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 1.8rem;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    list-style: none;
    color: $bgColor;
    line-height: 0.4rem;
  }
}
</style>
