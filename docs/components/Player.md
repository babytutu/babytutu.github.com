# 音频播放器

- 【默认】常规模式，可播放、暂停、调节播放进度、音量
- 【可选】迷你模式，可播放、暂停、恢复、关闭、拖拽
- 【设置】支持配速，默认[1, 1.5, 2]

## Demo

### 常规模式

> 直接在页面中播放，播放过程中切换页面自动停止播放

<ClientOnly>
  <player :list="list" :rates="[1, 2, 3]"></player>
</ClientOnly>

### 迷你模式

> 在弹窗中播放，可切换为迷你模式且不中断播放

<ClientOnly>
  <button class="btn" @click="showDialog = true">弹窗播放</button>
  <player miniable :list="list" v-model="showDialog" v-if="showDialog" @close="showDialog = false" />
</ClientOnly>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: 'sample.mp3',
          src: this.$withBase('/audio/sample.mp3'),
        },
      ],
      showDialog: false,
    }
  },
}
</script>

@[code vue](@src/components/player/demo.vue)

## Props

|参数|类型|说明|
|---|---|---|
|list|Array|音频文件数组|
|miniable|Boolean|是否可最小化，默认否|
|rates|Array|倍速，默认[1, 1.5, 2]|

## Events

|名称|说明|
|---|---|
|close|关闭后触发|
