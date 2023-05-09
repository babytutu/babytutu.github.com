<template>
  <input type="text" v-model="test" @input="change" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import eventBus from './eventBus'

const test = ref('')

const change = () => {
  eventBus.$emit('change', test.value)
}
</script>
<style lang="stylus" scoped>
input {
  padding 10px 15px
  margin-right: 10px
  display: inline
  line-height 1.2
  color #409eff
  border 1px solid #eee
}
</style>