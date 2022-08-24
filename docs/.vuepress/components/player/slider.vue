<template>
  <div class="slider-container">
    <div class="slider-liner"
        :id="oboxID"
        @click="clickBox"
        :style="{
      background: `linear-gradient(to right, ${active || '#20a0ff'} ${modelValue * 100}%, ${background || '#ddd'} ${modelValue * 100}%)`
    }">
      <div class="slider-pointer"
          :id="odragID"
          @mousedown="dragStart"
          :style="{
              left: maxWidth * modelValue + 'px',
              background: active || '#20a0ff',
            }">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  modelValue: number | string,
  active?: string,
  background?: string,
}>()

const emit = defineEmits(['update:modelValue', 'change'])

const x = ref(0)
const odrag = ref<any>(null)
const obox = ref<any>(null)
const maxWidth = ref(0)
// 随机id，解决多个slider的问题
const oboxID = Math.random() * 10000
const odragID = Math.random() * 100000

/**
 * 拖拽切换
 * @param {*} ev 拖拽dom对象
 */
function dragStart (ev: any) {
  const x = ev.clientX - odrag.value.offsetLeft
  document.onmousemove = (ev) => {
    // 除去鼠标的选中效果
    document.getSelection().removeAllRanges()
    // 计算拖拽的x轴距离
    const left = ev.clientX - x
    maxWidth.value = obox.value.clientWidth - odrag.value.clientWidth
    // 小于0则去零，大于最大值取最大值
    const move = Math.min(maxWidth.value, Math.max(left, 0))
    updateValue(move / maxWidth.value)
  }

  document.onmouseup = () => {
    document.onmousemove = document.onmouseup = null
  }
}

/**
 * 点击切换
 * @param {*} ev 点击dom对象
 */
function clickBox (ev: any) {
  if (!ev.target.className.includes('slider-liner')) return
  const left = ev.offsetX - odrag.value.clientWidth / 2
  updateValue(left / maxWidth.value)
}

/**
 * 更新进度
 * @param {number} rate 进度比例
 */
function updateValue (rate: number) {
  // 修改父组件值，组件内部修改通过方法触发方法供父组件使用
  /**
   * 修改比例回显
   * @event input
   * @type {string}
   */
  emit('update:modelValue', Number(rate).toFixed(2))
  /**
   * 修改实际比例
   * @event change
   * @type {string}
   */
  emit('change', rate)
}

onMounted(() => {
  obox.value = document.getElementById(oboxID)
  odrag.value = document.getElementById(odragID)
  maxWidth.value = obox.value.clientWidth - odrag.value.clientWidth
})

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
