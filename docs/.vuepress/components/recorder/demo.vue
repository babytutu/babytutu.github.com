<template>
  <div>
    <button class="btn" @click="startRecoreder" :disabled="showRecorder">开始录音</button>
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
