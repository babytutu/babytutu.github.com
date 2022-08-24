<template>
  <div class="audio-player-container" :class="{ mini }" @mousedown="onDragBegin" :style="mini ? floatStyleObj : ''">
    <div class="audio-player-warper">
      <div class="audio-player-control-btn">
        <template v-if="!error">
          <svg viewBox="-9 0 32 32" class="audio-player-control-icon" v-if="!playing" @click="togglePlay">
            <path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path>
          </svg>
          <svg viewBox="0 0 17 32" class="audio-player-control-icon" v-else @click="togglePlay">
            <path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path>
          </svg>
        </template>
        <svg v-else viewBox="0 0 1024 1024" class="audio-player-control-icon">
          <path d="M517.08411984 479.11475483L301.90637831 263.93753776a26.85237631 26.85237631 0 1 0-37.98667221 37.95153335l215.17669262 215.19504873L263.91970607 732.27864411a26.85237631 26.85237631 0 1 0 37.96936504 37.96884057l215.19504878-215.17669264 215.19504866 215.17669264a26.85237631 26.85237631 0 1 0 37.9688406-37.95100889l-215.17669262-215.2123559 215.17669262-215.1772171a26.85237631 26.85237631 0 1 0-37.9688406-37.96936505L517.10195147 479.11475483z"></path>
        </svg>
      </div>
      <div v-if="mini" class="audio-player-mini">
        <svg @click="closeWin" viewBox="0 0 1024 1024">
          <path d="M517.08411984 479.11475483L301.90637831 263.93753776a26.85237631 26.85237631 0 1 0-37.98667221 37.95153335l215.17669262 215.19504873L263.91970607 732.27864411a26.85237631 26.85237631 0 1 0 37.96936504 37.96884057l215.19504878-215.17669264 215.19504866 215.17669264a26.85237631 26.85237631 0 1 0 37.9688406-37.95100889l-215.17669262-215.2123559 215.17669262-215.1772171a26.85237631 26.85237631 0 1 0-37.9688406-37.96936505L517.10195147 479.11475483z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" @click="changeStatus(false)">
          <path d="M616.0602684 468.78768158L771.30480958 468.78768158c35.3562355 0 64.11552429-28.75928879 64.11552429-64.11552429l-1e-8-164.95456696c0-35.3562355-28.75928879-64.11552429-64.11552429-64.11552429l-155.24454117 0c-35.3562355 0-64.11552429 28.75928879-64.11552429 64.11552429L551.94474411 404.67215728c0 35.34851076 28.75928879 64.11552429 64.11552429 64.11552431z m2.31742859-226.75266265L768.98738098 242.03501893 768.98738098 402.35472869l-150.60968399 0 0-160.31970976z" p-id="3010"></path>
          <path d="M299.04376221 848.39793396L724.95623779 848.39793396c60.90974808 0 110.46409607-49.55434799 110.46409607-110.46409607l0-202.85997391c0-18.34630967-14.87016678-33.21647644-33.21647644-33.21647644s-33.21647644 14.87016678-33.21647644 33.21647644L768.98738098 737.93383789c0 24.27892686-19.75221634 44.03114318-44.03114319 44.03114318l-425.91247558 0c-24.27892686 0-44.03114318-19.75221634-44.03114319-44.03114318l0-451.86767578c0-24.27892686 19.75221634-44.03114318 44.03114319-44.03114318L488.67121887 242.03501893c18.34630967 0 33.21647644-14.87016678 33.21647644-33.21647645s-14.87016678-33.21647644-33.21647643-33.21647644l-189.62745667 0c-60.90974808 0-110.46409607 49.55434799-110.46409607 110.46409607L188.57966614 737.93383789c0 60.90974808 49.55434799 110.46409607 110.46409607 110.46409607z" p-id="3011"></path>
          <path d="M490.86505127 497.09893418L370.25061797 617.72109223l0-98.97737504c0-18.34630967-14.87016678-33.21647644-33.21647643-33.21647644s-33.21647644 14.87016678-33.21647643 33.21647644L303.81766511 660.52399827c0 19.02608872 8.34274292 36.13643647 21.55208586 47.89352416 0.19311905 0.20084381 0.37078857 0.40168762 0.5716324 0.59480667a33.25355529 33.25355529 0 0 0 8.51268767 6.16436004 63.73314858 63.73314858 0 0 0 33.47911836 9.46283341L500.00344467 724.63952255c18.34630967 0 33.21647644-14.87016678 33.21647644-33.21647644s-14.87016678-33.21647644-33.21647644-33.21647643l-76.28974914 0L537.83932876 544.08093642c12.96987533-12.96987533 12.96987533-34.00440217 0-46.97427749-6.48880005-6.48880005-14.98603821-9.72547531-23.49100113-9.72547531s-16.99447632 3.23667527-23.48327636 9.71775056z" p-id="3012"></path>
        </svg>
      </div>
      <div class="audio-player-warper-content" v-if="!mini">
        <div class="audio-player-title">
          <div>{{value.name}}</div>
          <div class="audio-player-title-btn">
            <template v-if="!error">
              <span>倍速</span>
              <span v-for="i in rates || [0.5, 1, 2]" :class="{ 'rate-active': playbackRate === i }" :key="i" @click="changeRate(i)">{{i}}</span>
            </template>
            <svg v-if="miniable" @click="changeStatus(true)" viewBox="0 0 1024 1024" width="20" height="20">
              <path d="M18.285714 201.142857c0-100.571429 82.285714-182.857143 182.857143-182.857143h621.714286c100.571429 0 182.857143 82.285714 182.857143 182.857143v621.714286c0 100.571429-82.285714 182.857143-182.857143 182.857143h-621.714286a183.369143 183.369143 0 0 1-182.857143-182.857143z m694.857143-109.714286v109.714286c0 60.342857 49.371429 109.714286 109.714286 109.714286h109.714286v-109.714286c0-60.342857-49.371429-109.714286-109.714286-109.714286h-109.714286z m-621.714286 109.714286v621.714286c0 60.342857 49.371429 109.714286 109.714286 109.714286h621.714286c60.342857 0 109.714286-49.371429 109.714286-109.714286v-438.857143h-109.714286a183.369143 183.369143 0 0 1-182.857143-182.857143v-109.714286h-438.857143c-60.342857 0-109.714286 49.371429-109.714286 109.714286z m129.828572 601.6c-14.628571-14.628571-14.628571-36.571429 0-51.2L479.085714 493.714286h-131.657143a36.644571 36.644571 0 0 1-36.571428-36.571429c0-20.114286 16.457143-36.571429 36.571428-36.571428h219.428572c9.142857 0 18.285714 3.657143 25.6 10.971428 7.314286 5.485714 10.971429 14.628571 10.971428 25.6v219.428572c0 20.114286-16.457143 36.571429-36.571428 36.571428a36.644571 36.644571 0 0 1-36.571429-36.571428v-131.657143l-257.828571 257.828571c-14.628571 14.628571-36.571429 14.628571-51.2 0z" p-id="5623"></path>
            </svg>
          </div>
        </div>
        <div class="audio-player-error" v-if="error">
          文件加载失败
        </div>
        <div class="audio-player-control" v-else>
          <div class="audio-player-control-progress">
            <slider v-model="rate" @change="changeTime"></slider>
          </div>
          <div class="audio-player-control-time">
            {{currentTime}} / {{duration}}
          </div>
          <svg viewBox="0 0 32 32" class="audio-player-control-icon volume" v-if="isMuted" @click="toggleMute">
            <path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path>
          </svg>
          <svg viewBox="0 0 32 32" class="audio-player-control-icon volume" v-else-if="volume == 1" @click="toggleMute">
            <path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"></path>
          </svg>
          <svg viewBox="0 0 32 32" class="audio-player-control-icon volume" v-else @click="toggleMute">
            <path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path>
          </svg>
          <div class="audio-player-volume-slider">
            <slider v-model="volume" @change="changeVolume"></slider>
          </div>
        </div>
      </div>
    </div>
    <div class="audio-player-list" v-if="!mini && list && list.length > 1">
      <ul>
        <li v-for="(media, index) in list" :class="{ 'active': media.src === value.src }" :key="index" @click="changeMedia(media)">
          {{media.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

import { AudioPlayer } from './audio-player-sdk'
import slider from './slider.vue'

const props = defineProps<{
  list: Array<any>, // 音频文件数组
  miniable?: boolean, // 是否可最小化
  rates?: Array<number> // 倍速
}>()

const emit = defineEmits(['change', 'close'])

const player = ref<any>('')
const currentTime = ref('00:00') // 当前播放时间
const duration = ref('00:00') // 媒体时长
const durationNum = ref(0) // 文件总秒数，用于回显进度条样式
const error = ref(false) // 判断是否回显错误信息
const rate = ref(0) // 播放进度条
const volume = ref(1) // 音量
const mini = ref(false)
const value = ref<any>({})
// 拖拽效果临时参数
const dragStartX = ref(0)
const dragStartY = ref(0)
const floatOriginX = ref(0)
const floatOriginY = ref(0)
const floatOffsetLeft = ref(0)
const floatOffsetTop = ref(0)
const clientWidth = ref(0)
const clientHeight = ref(0)

const playing = computed<boolean>(() => player.value?.status === 'play') // 是否播放状态
const isMuted = computed<boolean>(() => player.value?.muted === true)
const playbackRate = computed(() => player.value?.playbackRate)
const floatStyleObj = computed<any>(() => ({
  transform: `translate(${floatOffsetLeft.value}px, ${floatOffsetTop.value}px)`,
  cursor: 'move'
}))

/**
 * 播放器关闭时，暂停录音并清空播放器
 */
function close () {
  player.value?.pause()
  player.value = ''
}

/**
 * 播放or暂停
 */
function togglePlay () {
  player.value?.togglePlay()
}

/**
 * 切换声音
 */
function toggleMute () {
  player.value?.toggleMute()
}

/**
 * 调整播放进度
 * @param {number} time 进度比例
 */
function changeTime (time: nubmer) {
  player.value?.changeTime(durationNum.value * time)
}

/**
 * 调节音量
 * @param {number} volume 音量，0.0-1.0
 */
function changeVolume (volume: number) {
  player.value?.changeVolume(volume)
}

/**
 * 调整倍速
 * @param {number} rate 倍速
 */
function changeRate (rate: number) {
  player.value.changeRate(rate)
}

/**
 * 切换音频
 * @param {object} media 音频对象
 */
function changeMedia (media: any) {
  if (media === value.value) {
    togglePlay()
  } else {
    value.value = media
    // 初始化新的音频
    player.value?.reload(media.src)
  }
}

/**
 * 回到常规模式
 * @param {boolean} val 是否迷你模式
 */
function changeStatus (val: boolean) {
  mini.value = val
  /**
   * 切换模式
   * @event change
   * @param {boolean} val 是否迷你模式
   */
  emit('change', val)
}

/**
 * 最小化后的内部关闭按钮触发
 */
function closeWin () {
  close()
  /**
   * 关闭迷你模式
   * @event close
   */
  emit('close')
}

/**
 * mini模式下，数据拖拽开始
 */
function onDragBegin (e: any) {
  if (mini.value) {
    clientWidth.value = document.body.clientWidth
    clientHeight.value = document.body.clientHeight
    floatOriginX.value = floatOffsetLeft.value
    floatOriginY.value = floatOffsetTop.value
    dragStartX.value = e.clientX
    dragStartY.value = e.clientY
    document.addEventListener('mousemove', onDocumentMouseMove)
    document.addEventListener('mouseup', onDocumentMouseUp)
  }
}

/**
 * 鼠标按下且拖拽时，实时更新播放器位置，限制在一定范围内
 */
function onDocumentMouseMove (e: any) {
  const left = floatOriginX.value + e.clientX - dragStartX.value
  const top = floatOriginY.value + e.clientY - dragStartY.value
  if (left > 0) {
    floatOffsetLeft.value = 0
  } else if (left < -clientWidth.value + 84) {
    floatOffsetLeft.value = -clientWidth.value + 84
  } else {
    floatOffsetLeft.value = left
  }
  if (top > clientHeight.value - 120) {
    floatOffsetTop.value = clientHeight.value - 120
  } else if (top < -60) {
    floatOffsetTop.value = -60
  } else {
    floatOffsetTop.value = top
  }
}

/**
 * 鼠标移开，取消监听
 */
function onDocumentMouseUp () {
  document.removeEventListener('mouseup', onDocumentMouseUp)
  document.removeEventListener('mousemove', onDocumentMouseMove)
}

onMounted(() => {
  value.value = props.list[0]
  // 初始化方法
  player.value = new AudioPlayer({
    src: value.value.src, // 音频地址
    /**
     * 加载完成后回调播放时长
     * @param {number} duration 总时长
     */
    onloadedmetadata: (durationNumber: nubmer) => {
      error.value = false
      durationNum.value = durationNumber
      duration.value = player.value?.getSecondTimeFomate(durationNumber)
    },
    /**
     * 时间变化时给出播放时长
     * @param {number} currentTime 当前时间
     */
    ontimeupdate: (current: number) => {
      currentTime.value = player.value?.getSecondTimeFomate(current)
      rate.value = current / durationNum.value
    },
    /**
     * 异常处理
     * @param {*} e 错误
     */
    onerror: () => {
      error.value = true
    }
  })
  player.value?.initPlayer(value.value.src, volume.value)
})

onUnmounted(() => {
  close()
})

</script>
<style lang="stylus" scoped>
$btn-size = 60px
$line-height = 30px
$btn = 24px
$space = 10px

svg {
  opacity .8
  fill #666
  cursor pointer
  &:hover{
    opacity 1
  }
}

.audio-player{
  // 外围
  &-container {
    box-sizing: border-box;
    // overflow: hidden;
    border-top: 1px solid rgba(0, 0, 0, .07)
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 7%), 0 1px 5px 0 rgba(0, 0, 0, 10%);
    border-radius: 2px;
    // 迷你模式
    &.mini {
      position absolute
      top 60px
      right 0
      z-index 1999
      background #fff
    }
  }
  &-mini {
    display flex
    flex-direction: column;
    justify-content: space-around;
    > svg {
      width $btn
      height $btn
    }
  }
  // 播放核心区域
  &-warper{
    display flex
    &-content{
      flex 1
    }
  }
  // 错误提示
  &-error {
    padding 0 $space
    line-height: $line-height;
    color: #f56c6c;
    font-size 12px
  }
  // 标题
  &-title {
    position: relative;
    display: flex;
    justify-content space-between
    align-items: center;
    padding 0 $space
    font-size: 14px;
    line-height: $line-height;
    span {
      padding 0 5px
      cursor pointer
    }
    .rate-active {
      font-weight 700
      color #20a0ff
    }
    &-btn {
      display: flex;
      align-items: center;
    }
  }
  // 音量控制样式
  &-volume-slider {
    width: 40px;
  }
  // 播放控制条
  &-control {
    display: flex;
    height: $line-height;
    line-height: $line-height;
    align-items: center;
    padding-right 10px

    &-btn {
      width $btn-size
      height: $btn-size;
      display: flex;
      justify-content: center;
      align-items: center;
      background #20a0ff
    }

    // 播放暂停按钮
    &-icon {
      box-sizing: content-box;
      width: $btn;
      height: $btn;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      fill: #fff;
      border: 2px solid #fff;
      border-radius: 100%;
      padding: 1px;
      opacity: .8;
      &:hover {
        opacity 1
      }
      &.volume{
        fill: #999
      }

      &.reload {
        margin-left: $space;
      }
    }

    &-progress {
      flex: 1;
      padding: 0 $space;
    }

    &-time {
      margin-right: $space;
      font-family: Arial;
      color #999
      font-size: 14px;
    }
  }
  // 播放列表
  &-list {
    ul, li {
      list-style: none;
      padding 0
      margin 0
    }

    ul {
      border-top: 1px solid #eee;
    }

    li {
      position: relative;
      margin-top 1px
      padding: 0 $space
      border-bottom: 1px solid #eee;
      border-left: 3px outset #ccc;
      color: #666;
      font-size 12px
      line-height: 2em;
      cursor: pointer;

      &.active, &:hover {
        background: #eee;
        border-left-color: #20a0ff;
        color: #333;
      }
    }
  }
}
</style>
