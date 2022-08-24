<template>
  <div class="utry-recorder-container" v-if="initResult">
    <span class="utry-recorder-container-time">{{time ? `正在录音${time}s` : '录音完成'}}</span>
    <canvas v-if="showCanvas" id="canvas" width="120" height="40"></canvas>
    <div class="utry-recorder-container-btn">
      <span @click="cancelRecord">
        <!-- @slot 取消按钮 -->
        <slot name="cancel">取消</slot>
      </span>
      <span @click="uploadRecord">
        <!-- @slot 发送按钮 -->
        <slot name="send">发送</slot>
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'

import { Recorder } from './recorder-sdk'

const props = defineProps<{
  show: boolean,
  showCanvas?: boolean, // 展示canvas动态图
}>()

const emit = defineEmits(['src', 'update:show'])

const maxSecond = 60

const recorder = ref<any>(null)
const src = ref('') // 媒体base64数据
const time = ref(0) // 已录音秒数
const timer = ref<any>(null) // 读秒定时器
const isAutoStoped = ref(false) // 是否到达最大录音秒数后自动停止
const isCanncel = ref(false) // 是否取消

const initResult = ref<boolean>(false) // 初始化结果

onBeforeMount(() => {
  // 初始化方法，指定canvas和柱状图颜色、宽度、间隔，基准线
  recorder.value = new Recorder({
    option: {
      audio: true
    },
    canvas: props.showCanvas ? 'canvas' : '',
    onstop: (res: any) => {
      // 点击取消触发停止无需获取音频
      if (isCanncel.value) return
      src.value = res
      // 不是自动暂停就传递音频并关闭录音模块
      if (!isAutoStoped.value) {
        const duration = maxSecond - time.value
        emit('src', src.value, duration)
        emit('update:show', false)
      }
    },
    onstart: () => startRecoreder(),
    onerror: () => {
      alert('浏览器不支持')
      emit('update:show', false)
    },
  })
  initResult.value = recorder.value.initMediaDevices()
  if (!initResult.value) {
    alert('浏览器不支持')
    emit('update:show', false)
  }
})

onMounted(() => {
  if (initResult.value) {
    init()
  }
})

/**
 * 初始化参数
 */
function init () {
  clearInterval(timer.value)
  time.value = maxSecond
  src.value = ''
  isCanncel.value = false
  isAutoStoped.value = false
  recorder.value.initRecording()
}

/**
 * 开始录音，并走计时器，超过最大秒数自动暂停
 */
function startRecoreder () {
  if (maxSecond) {
    timer.value = setInterval(() => {
      if (time.value <= 0) {
        isAutoStoped.value = true
        recorder.value.stop()
        clearInterval(timer.value)
      } else {
        time.value--
      }
    }, 1000)
  }
}

/**
 * 点击上传按钮
 * 1停止定时器
 * 2自动暂停时获取已有的src
 * 3传递src到父组件
 * 4非自动暂停则停止录音
 */
function uploadRecord () {
  clearInterval(timer.value)
  if (src.value) {
    const duration = maxSecond - time.value
    /**
     * 输出媒体base64
     * @event src
     * @type {string}
     */
    emit('src', src.value, duration)
    emit('update:show', false)
  } else {
    recorder.value.stop()
  }
}

/**
 * 点击取消按钮
 * 1停止定时器
 * 2设置录音为取消状态
 * 3停止定时器
 * 4关闭录音模块
 */
function cancelRecord() {
  timer.value && clearInterval(timer.value)
  isCanncel.value = true
  !src.value && recorder.value.stop()
  /**
   * 关闭弹窗
   * @event update:show
   * @type {boolean}
   */
  emit('update:show', false)
}
</script>

<style lang="stylus" scoped>
.utry-recorder-container{
  display: flex
  justify-content: space-between;
  height 100%;
  font-size 14px;
  color #fff
  line-height 44px
  background rgba(0,0,0,0.3)
  &-visualizer{
    height 100%;
    flex: 1;
    overflow hidden
  }
  &-time, &-btn{
    display flex
    align-items center
    padding-left 10px;
    word-break: keep-all;
  }
  &-btn{
    span{
      cursor pointer
    }
  }
}
</style>
