<template>
  <myComponent v-model.capitalize="myText" />
  {{myText}}
</template>
<script setup lang="ts">
import { ref } from 'vue'

const myText = ref('Abc')
</script>
