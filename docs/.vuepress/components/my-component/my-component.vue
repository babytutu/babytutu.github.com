<template>
  <input type="text" :value="modelValue" @input="emitValue">
</template>

<script setup lang="ts">

const props = defineProps<{
  modelValue: string,
  modelModifiers: any
}>()

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>
