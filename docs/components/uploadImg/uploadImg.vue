<template>
  <div class="imgContent">
    <div class="img-container">
      <img :src="preview" class="img" v-if="preview" />
      <input type="file" accept="image/*" ref="file" @change="onFileChange" title="">
      <i class="remove" v-if="preview" @click="resetIMG">&times;</i>
      <i class="plus" v-if="!preview">&#43;</i>
    </div>
    <div class="tip">{{tip || '仅支持jpg,png,gif文件'}}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  modelValue: any,
  tip?: string,
  max?: number
}>()

const emit = defineEmits(['update:modelValue'])

const preview = ref('')
const loading = ref(false)
const types = 'image/jpg,image/jpeg,image/png,image/gif'.split(',') // 支持的文件类型集合

/**
 * 文件改变事件
 * @param {Event} e - 文件事件对象
 */
function onFileChange (e: any) {
  const file = e.target.files[0]
  if (!file) {
    return
  }
  const {
    size,
    name,
    type
  } = file
  if (size > ((props.max || 500) * 1024)) {
    console.warn('文件大小', `${size / 1024}k`)
    alert(`文件尺寸不得超过${props.max || 500}k, '${name}' 不符合要求`)
    resetIMG()
    return
  }
  if (file && types.includes(type)) {
    const reader = new FileReader()
    preview.value = ''
    loading.value = true
    reader.readAsDataURL(file)
    reader.onloadend = (e) => {
      /**
       * 图片文件对象
       * @event update:modelValue
       * @type {object}
       */
      emit('update:modelValue', file)
      preview.value = e.target.result
      loading.value = false
    }
  } else {
    alert(`文件仅支持图片格式, '${name}' 不符合要求`)
    resetIMG()
  }
  // 每次上传文件的时候，都会将当前的文件路径保存至e.target.value中，当第二次选择文件时，由于两次e.target.value相同，所以不会触发change事件。
  // 解决方案为：在input绑定的change方法中，将当前的e.target.value = null
  e.target.value = null
}
/**
 * 重置图片
 */
function resetIMG () {
  /**
   * 修改图片地址
   * @event update:modelValue
   * @type {string}
   */
  emit('update:modelValue', '')
  preview.value = ''
}

onMounted(() => {
  preview.value = props.modelValue
})
</script>

<style lang="stylus" scoped>
.imgContent {
  .tip {
    color: #aaa;
    line-height: 2;
    white-space: nowrap;
    font-size: 12px;
  }

  .img-container {
    width: 100px;
    height: 100px;
    background: #fff;
    border: 1px solid #E4E7ED;
    border-radius: 4px;
    position: relative;
    box-sizing: border-box;

    i {
      font-size: 30px;
      position: absolute;
      cursor: pointer;
      font-style: normal;
      line-height: 1;
    }

    .img, input {
      padding: 10px;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 999;
    }

    .remove {
      top: 0;
      right: 5px;
      color: #909399;
      z-index: 1000;
      opacity: .7;
      &:hover {
        opacity 1
        color: #F56C6C
      }
    }

    .plus {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    input {
      opacity: 0;
      cursor: pointer;
    }

    img {
      object-fit: fill
    }
  }
}
</style>
