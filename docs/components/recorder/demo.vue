<template>
  <button class="btn" @click="startRecoreder" :disabled="showRecorder">开始录音</button>
  <div class="recorder-container">
    <recorder v-model:show="showRecorder" v-if="showRecorder" @src="getRecord" showCanvas>
      <template #send>
        <button class="btn">发送</button>
      </template>
      <template #cancel>
        <button class="btn">取消</button>
      </template>
    </recorder>
    <audio :src="src" controls v-if="src"></audio>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import recorder from './recorder/recorder.vue'

const showRecorder = ref(false) // 录音
const src = ref<any>(null)

function startRecoreder () {
  showRecorder.value = true
  src.value = ''
}

/**
 * 获取录音数据
 * @param {string} base64 录音base64
 */
function getRecord (base64: string) {
  src.value = base64
}

</script>

<style scoped>
.recorder-container {
  width: 100%;
  height: 54px;
}
</style>
