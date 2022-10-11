<template>
  <player miniable :list="list" :rates="[1, 2, 3]" />
</template>
<script setup lang="ts">

const list = [
  {
    name: '本地mp3',
    src: './player/audio/sample.mp3',
  },
  {
    name: '错误的mp3',
    src: '...',
  },
]
</script>
