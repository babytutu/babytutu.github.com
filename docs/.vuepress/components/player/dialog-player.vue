<template>
  <div :class="mini ? 'audio-player-mini' : 'audio-player-warper'">
    <div class="audio-dialog">
      <div v-if="!mini" class="audio-dialog-header">
        <span class="audio-dialog-title">录音播放</span>
        <svg class="audio-dialog-headerBtn" @click="closePlayer" viewBox="0 0 1024 1024" width="20" height="20"><path d="M517.08411984 479.11475483L301.90637831 263.93753776a26.85237631 26.85237631 0 1 0-37.98667221 37.95153335l215.17669262 215.19504873L263.91970607 732.27864411a26.85237631 26.85237631 0 1 0 37.96936504 37.96884057l215.19504878-215.17669264 215.19504866 215.17669264a26.85237631 26.85237631 0 1 0 37.9688406-37.95100889l-215.17669262-215.2123559 215.17669262-215.1772171a26.85237631 26.85237631 0 1 0-37.9688406-37.96936505L517.10195147 479.11475483z"></path></svg>
      </div>
      <div class="audio-dialog-body">
        <vuePlayer miniable ref="aplayer" v-if="modelValue" :list="list" @change="changeStatus" @close="closePlayer"></vuePlayer>
      </div>
    </div>
  </div>
</template>
<script>
import vuePlayer from './player.vue'

export default {
  name: 'dialog-player',
  components: {
    vuePlayer
  },
  props: {
    title: {
      type: String,
      default: '播放录音'
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    list: {
      type: [Array, Object]
    },
  },
  data () {
    return {
      mini: false
    }
  },
  methods: {
    /**
     * 切换模式
     * @param {boolean} val 是否mini模式
     */
    changeStatus (val) {
      this.mini = val
    },
    /**
     * 关闭弹窗，停止播放器
     */
    closePlayer () {
      this.$refs.aplayer.closePlayer()
      this.$emit('update:modelValue', false)
    },
  }
}
</script>
<style lang="stylus" scoped>
/*弹窗关闭按钮高亮色*/
$dialog_close_highlight_bg = #D2D6E0
$dialog_close_highlight_color = #fff

/*弹窗头部背景色*/
$dialog_header_bg = #EDEFF3

.audio-player {
  &-mini{
    position: fixed;
    top 0
    right 0
    z-index 999
  }
  &-warper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    background: rgba(0, 0, 0, .5);
    z-index 999

    .audio-dialog {
      width: 420px;
      opacity: 1
      position: relative;
      margin: 15vh auto;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 30%);
      box-sizing: border-box;

      &-header {
        padding: 10px 20px;
        border-radius: 4px 4px 0 0;
        background: $dialog_header_bg;
        text-align: center;
        height: 24px;
        line-height: 24px;
      }

      &-title {
        height: 24px;
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      &-headerBtn{
        position: absolute;
        top: 12px;
        right: 20px;
        padding: 0;
        background: 0;
        border: none;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
        &:hover {
          background: $dialog_close_highlight_bg;
          fill: $dialog_close_highlight_color !important;
          border-radius: 4px
        }
      }

      &-body {
        padding: 30px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }

      &-footer {
        border-top: 1px solid #e0e0e0;
        padding: 15px 20px;
        text-align: center;
        button {
          display: inline-block;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 1px solid #dcdfe6;
          color: #606266;
          -webkit-appearance: none;
          text-align: center;
          box-sizing: border-box;
          outline: 0;
          margin: 0;
          transition: .1s;
          font-weight: 500;
          padding: 12px 20px;
          font-size: 14px;
          border-radius: 4px;
          &:hover{
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
          }
        }
      }
    }
  }
}
</style>
