<template>
    <ul class="list">
        <li class="item"
            v-for="item in letters"
            :key="item" @click="onLetterClick"
            @touchstart.prevent="onTouchStart"
            @touchend="onTouchEnd"
            @touchmove="onTouchMove"
            :ref="item"
        >{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStart: false,
      startY: 0,
      timmer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    onLetterClick (event) {
      this.$emit('change', event.target.innerText)
    },
    onTouchStart (event) {
      this.touchStart = true
    },
    onTouchMove (event) {
      if (this.touchStart === true) {
        if (this.timmer) {
          clearTimeout(this.timmer)
        }
        this.timmer = setTimeout(() => {
          const touchY = event.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    onTouchEnd (event) {
      this.touchStart = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.list {
    position: absolute;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    width: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .item {
        line-height: 0.4rem;
        text-align: center;
        color: $bgColor;
    }
}
</style>
