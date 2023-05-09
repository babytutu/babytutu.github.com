<template>
  输入值：{{ test }}
</template>
<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import eventBus from './eventBus'

const test = ref('abc')

onMounted(() => {
  eventBus.$on('change', (val) => {
    test.value = val
  })
})

onUnmounted(() => {
  eventBus.$off('change')
})
</script>
