<template>
  <div class="utry-recorder-container">
    <canvas id="visualizer" class="utry-recorder-container-visualizer"></canvas>
    <span class="utry-recorder-container-time">{{time ? `${time}s` : ''}}</span>
    <span class="utry-recorder-container-btn" @click="cancelRecord">
      <!-- @slot 取消按钮 -->
      <slot name="cancel">取消</slot>
    </span>
    <span class="utry-recorder-container-btn" @click="uploadRecord">
      <!-- @slot 完成按钮 -->
      <slot name="submit">完成</slot>
    </span>
  </div>
</template>
<script>
import { Recorder } from './recorder-sdk'
/**
 * 录音
 * @module recorder
 */
export default {
  name: 'recorder',
  /**
   * @name Props
   * @prop {Number} [maxSecond=60] 最大录音秒数
   * @prop {Boolean} [value=false] 是否显示录音界面
   */
  props: {
    /**
     * 是否显示录音界面
     */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * 最大录音秒数
     */
    maxSecond: {
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      recorder: null,
      src: null, // 媒体base64数据
      time: 0, // 已录音秒数
      timer: null, // 读秒定时器
      isAutoStoped: false, // 是否到达最大录音秒数后自动停止
      isCanncel: false, // 是否取消
    }
  },
  created () {
    // 初始化方法，指定canvas和柱状图颜色、宽度、间隔，基准线
    this.recorder = new Recorder({
      canvas: '#visualizer',
      color: '#f00',
      barWidth: 6,
      space: 4,
      baseLine: 2,
      option: {
        audio: true
      },
      onstop: (res) => {
        // 点击取消触发停止无需获取音频
        if (this.isCanncel) return
        this.src = res
        // 不是自动暂停就传递音频并关闭录音模块
        if (!this.isAutoStoped) {
          const duration = this.maxSecond - this.time
          this.$emit('src', this.src, duration)
          this.close()
        }
      },
      onstart: this.startRecoreder,
      onerror: () => {
        this.$message.error('浏览器不支持')
        this.close()
      },
    })
    this.recorder.initMediaDevices()
  },
  mounted () {
    this.init()
  },
  methods: {
    /**
     * 关闭录音模块
     */
    close () {
      this.$emit('update:modelValue', false)
    },
    /**
     * 初始化参数
     */
    init () {
      clearInterval(this.timer)
      this.time = this.maxSecond
      this.src = null
      this.isCanncel = false
      this.isAutoStoped = false
      this.recorder.initRecording()
    },
    /**
     * 开始录音，并走计时器，超过最大秒数自动暂停
     */
    startRecoreder () {
      if (this.maxSecond) {
        this.timer = setInterval(() => {
          if (this.time <= 0) {
            this.isAutoStoped = true
            this.recorder.stop()
            clearInterval(this.timer)
          } else {
            this.time--
          }
        }, 1000)
      }
    },
    /**
     * 点击上传按钮
     * 1停止定时器
     * 2自动暂停时获取已有的src
     * 3传递src到父组件
     * 4非自动暂停则停止录音
     */
    uploadRecord () {
      clearInterval(this.timer)
      if (this.src) {
        const duration = this.maxSecond - this.time
        /**
         * 输出媒体base64
         * @event src
         * @type {string}
         */
        this.$emit('src', this.src, duration)
        this.close()
      } else {
        this.recorder.stop()
      }
    },
    /**
     * 点击取消按钮
     * 1停止定时器
     * 2设置录音为取消状态
     * 3停止定时器
     * 4关闭录音模块
     */
    cancelRecord () {
      clearInterval(this.timer)
      this.isCanncel = true
      !this.src && this.recorder.stop()
      this.close()
    },
  },
}
</script>
<style lang="stylus" scoped>
.utry-recorder-container{
  display: flex
  justify-content: space-between;
  height 100%;
  &-visualizer{
    height 100%;
    flex: 1;
    overflow hidden
  }
  &-time, &-btn{
    display flex
    align-items center
    padding 0 10px;
    word-break: keep-all;
  }
  &-btn{
    cursor pointer
  }
}
</style>
