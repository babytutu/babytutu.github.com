<template>
  <div class="toolList">
    <div :class="{ active: t === options.action }"
      @click="changeStyle('action', t)"
      v-for="t in types"
      :key="t"
      >{{ t }}
    </div>
    <div @click="draw.back">Undo</div>
    <div @click="draw.clearCanvas">Clean</div>
    <div>
      <input type="file" accept="image/*" ref="file" @change="onFileChange">
    </div>
  </div>
  <div class="toolList">
    <div v-for="c in colors" :key="c"
    @click="changeStyle('color', c)"
    :style="{ background: c }"
    :class="{ active: c === options.color }"></div>
  </div>

  <canvas width="500" height="500" id="boradCanvas"></canvas>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Draw } from './draw'

// 画笔类型
const types = ['pen', 'rect', 'circle', 'line', 'poly', 'eraser']
// 支持的文件类型集合
const imgTypes = 'image/jpg,image/jpeg,image/png,image/gif'.split(',')
// 画笔颜色
const colors = ['#333', 'red', 'green', 'orange', 'blue', 'yellow']

let draw = ref<any>(null)
let options = ref({
  action: 'pen',
  color: '#333',
  lineWidth: 3
})

/**
 * 调整画笔样式
 */
function changeStyle(key, value) {
  options.value[key] = value
  draw.changeStyle(options.value)
}

/**
 * 文件改变事件
 * @param {Event} e - 文件事件对象
 */
 function onFileChange (e: any) {
  const file = e.target.files[0]
  if (!file) {
    return
  }
  const {
    name,
    type
  } = file
   if (file && imgTypes.includes(type)) {
    const img = new Image()
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = (e: any) => {
      img.src = e.target.result
      img.onload = () => {
        draw.drawImage(img, 0, 0, 500, img.height / img.width * 500)
        draw.saveStep()
      }
    }
  } else {
    alert(`文件仅支持图片格式, '${name}' 不符合要求`)
  }
  e.target.value = null
}

onMounted(() => {
  // 初始化画笔
  draw = new Draw()
  draw.initCanvas('boradCanvas', options.value.color, options.value.lineWidth)
})
</script>
<style lang="stylus" scoped>
canvas {
  border: 1px solid #efefef
}
.toolList {
  display: flex;
  align-items: center;
  margin-bottom 5px
  line-height 1
  div {
    min-height 20px
    min-width 20px
    border 2px solid #fff
    border-radius 4px
    margin-right: 5px
    cursor pointer
    color: #20a0ff
    padding 3px
    &.active {
      border-color: #20a0ff
    }
  }
}
</style>
