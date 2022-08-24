# 音频播放器

- 【默认】常规模式，可播放、暂停、调节播放进度、音量
- 【可选】迷你模式，可播放、暂停、恢复、关闭、拖拽
- 【设置】支持配速，默认[1, 1.5, 2]

## Demo


<ClientOnly>
  <player miniable :list="list" :rates="[1, 2, 3]"></player>
</ClientOnly>

<script setup lang="ts">
const list = [
  {
    name: '本地mp3',
    src: '/audio/sample.mp3',
  },
  {
    name: '错误的mp3',
    src: '...',
  },
]
</script>


@[code vue](@src/components/player/demo.vue)

## Props

|参数|类型|说明|
|---|---|---|
|list|Array|音频文件数组|
|miniable|Boolean|是否可最小化，默认否|
|rates|Array|倍速，默认[1, 1.5, 2]|
