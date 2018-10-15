<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlpha',
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        // const startY = this.$refs['A'][0].offsetTop;
        const x = e.touches[0].clientY - 141 - 91;
        const index = Math.floor(x / 20);
        if (index >= 0 && index <= this.letters.length) {
          this.$emit('change', this.letters[index]);
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
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
