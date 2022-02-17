<template>
  <div class="slider-container">
    <div class="slider-liner disabled" v-show="disabled"></div>
    <div class="slider-liner"
        :id="oboxID"
        v-show="!disabled"
        @click="clickBox"
        :style="{
      background: `linear-gradient(to right, ${active} ${value * 100}%, ${background} ${value * 100}%)`
    }">
      <div class="slider-pointer"
          :id="odragID"
          @mousedown="dragStart"
          :style="{
              left: maxWidth * value + 'px',
              background: active,
            }">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'slider',
  props: {
    /**
     * 高亮颜色
     */
    active: {
      type: String,
      default: '#20a0ff'
    },
    /**
     * 背景色
     */
    background: {
      type: String,
      default: '#ddd'
    },
    /**
     * 进度百分比
     */
    value: {
      type: [Number, String],
      default: 0,
    },
    /**
     * 禁用模式
     */
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      x: 0,
      odrag: '',
      obox: '',
      maxWidth: 0,
      // 随机id，解决多个slider的问题
      oboxID: Math.random() * 10000,
      odragID: Math.random() * 100000,
    }
  },
  mounted () {
    this.obox = document.getElementById(this.oboxID)
    this.odrag = document.getElementById(this.odragID)
    this.maxWidth = this.obox.clientWidth - this.odrag.clientWidth
  },
  methods: {
    /**
     * 拖拽切换
     * @param {*} ev 拖拽dom对象
     */
    dragStart (ev) {
      this.draging = true
      const x = ev.clientX - this.odrag.offsetLeft
      document.onmousemove = (ev) => {
        // 除去鼠标的选中效果
        document.getSelection().removeAllRanges()
        // 计算拖拽的x轴距离
        const left = ev.clientX - x
        this.maxWidth = this.obox.clientWidth - this.odrag.clientWidth
        // 小于0则去零，大于最大值取最大值
        const move = Math.min(this.maxWidth, Math.max(left, 0))
        this.updateValue(move / this.maxWidth)
        this.showTip = true
      }

      document.onmouseup = () => {
        document.onmousemove = document.onmouseup = null
      }
    },
    /**
     * 点击切换
     * @param {*} ev 点击dom对象
     */
    clickBox (ev) {
      if (this.disabled) return
      if (!ev.target.className.includes('slider-liner')) return
      const left = ev.offsetX - this.odrag.clientWidth / 2
      this.updateValue(left / this.maxWidth)
    },
    /**
     * 更新进度
     * @param {number} rate 进度比例
     */
    updateValue (rate) {
      // 修改父组件值，组件内部修改通过方法触发方法供父组件使用
      /**
       * 修改比例回显
       * @event input
       * @type {string}
       */
      this.$emit('input', Number(rate).toFixed(2))
      /**
       * 修改实际比例
       * @event change
       * @type {string}
       */
      this.$emit('change', rate)
    },
  },
}
</script>
<style lang="stylus" scoped>
.slider{
  &-container{
    position relative
    width 100%
    padding 10px 0
  }
  &-liner{
    position relative
    width 100%;
    height: 2px;
    border-radius: 2px;
    cursor: pointer
    &.disabled {
      background #ccc
    }
  }
  &-pointer{
    width 10px
    height 10px
    top: -4px;
    border-radius: 100%;
    background: #000;
    position: absolute;
    cursor: pointer
  }
  &-tips{
    position absolute
    left 50%
    top -20px
    transform translateX(-50%)
    line-height 20px
  }
}
</style>
