# 在线录音

使用`mediarecorder`实现纯前端在线录音，仅支持`localhost`和`https`环境，需要开启浏览器`麦克风权限`。

点击[完成]，将base64数据进行预览播放

## Demo

<button @click="startRecoreder" :disabled="showRecorder">开始录音</button>
<div class="recorder-container">
  <recorder v-model="showRecorder" v-if="showRecorder" @src="getRecord"></recorder>
  <audio :src="src" controls v-if="src"></audio>
</div>

<script>
  export default {
    data () {
      return {
        src: '',
        showRecorder: false,
        maxSecond: 30,
      }
    },
    methods: {
      /**
       * 开始录音
       */
      startRecoreder () {
        this.showRecorder = true
        this.src = null
      },
      /**
       * 获取录音数据
       * @param {string} src 录音base64
       */
      getRecord (src) {
        this.src = src
      },
    }
  }
</script>

<style>
.recorder-container {
  width: 100%;
  height: 54px;
}
</style>

## Code

```vue
<template>
  <div>
    <button @click="startRecoreder" :disabled="showRecorder">开始录音</button>
    <div class="recorder-container">
      <recorder v-model="showRecorder" v-if="showRecorder" @src="getRecord"></recorder>
      <audio :src="src" controls v-if="src"></audio>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        src: '',
        showRecorder: false,
        maxSecond: 30
      }
    },
    methods: {
      /**
       * 开始录音
       */
      startRecoreder () {
        this.showRecorder = true
        this.src = null
      },
      /**
       * 获取录音数据
       * @param {string} src 录音base64
       */
      getRecord (src) {
        this.src = src
      }
    },
  }
</script>
<style scoped>
.recorder-container{
  width: 100%;
  height: 54px;
}
</style>
```

## Props

|参数|类型|说明|
|---|---|---|
|value|Boolean|是否显示录音界面，默认false|
|maxSecond|Number|最大录音秒数，默认30|

## Events

|名称|参数|说明|
|---|---|---|
|src|src|录音base64|

## Slots

|名称|说明|
|---|---|
|cancel|取消按钮|
|submit|完成按钮|