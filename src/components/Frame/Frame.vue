<template>
<div class="bsd-frame" :style="{'background': bgColor}" ref="bsdFrame">
  <slot></slot>
</div>
</template>
<script>
export default {
  name: 'bsd-frame',
  props: {
    width: {
      type: Number,
      default: 3840 
    },
    height: {
      type: Number,
      default: 2160 
    },
    bgColor: {
      default: 'rgb(2, 2, 37)'
    }
  },
  data(){
    return {
      frameWidth: 0,
      frameHeight: 0
    }
  },
  methods: {
    setSize(){
      this.frameWidth = this.width || screen.width
      this.frameHeight = this.height || screen.height

      let frame = this.$refs.bsdFrame
      frame.style.width = this.frameWidth + 'px'
      frame.style.height = this.frameHeight + 'px'
    },
    setScale(){
      let bodyWidth = document.body.clientWidth,
          bodyHeight = document.body.clientHeight    

      let scaleX = bodyWidth / this.frameWidth,
          scaleY = bodyHeight / this.frameHeight

      this.$refs.bsdFrame.style.transform = `scale(${scaleX},${scaleY})`
    },
    debounce (fn, t) {
      const delay = t || 300
      let timer
      return () => {
        const args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          timer = null
          fn.apply(this, args)
        }, delay)
      }
    }
  },
  mounted() {
    this.setSize()
    this.setScale()
    this.debouncedSetScale = this.debounce(this.setScale, 500)
    window.addEventListener('resize', this.debouncedSetScale)
  },
  destroyed(){
    window.removeEventListener('resize', this.debouncedSetScale)
  }
}
</script>
<style lang="scss">
.bsd-frame{
  position: fixed;
  transform-origin: left top;
}
</style>