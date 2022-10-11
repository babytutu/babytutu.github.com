<template>
  <uploadImg v-model="imgurl"></uploadImg>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import uploadImg from './uploadImg/uploadImg.vue'

const imgurl = ref('')
</script>
