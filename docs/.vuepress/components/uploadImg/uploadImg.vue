<template>
  <div class="imgContent">
    <div class="img-container">
      <img :src="preview" class="img" v-if="preview" />
      <input type="file" :accept="accept" ref="file" @change="onFileChange" title="">
      <i class="remove" v-if="preview" @click="resetIMG">&times;</i>
      <i class="plus" v-if="!preview">&#43;</i>
    </div>
    <div class="tip">{{tip}}</div>
  </div>
</template>
<script>
export default {
  name: 'uploadImg',
  props: {
    /**
     * 图片地址或图片文件
     */
    modelValue: {
      type: [String, File]
    },
    /**
     * 图片大小限制，默认500k
     */
    max: {
      type: Number,
      default: 500
    },
    /**
     * 可选文件类型
     */
    accept: {
      type: String,
      default: 'image/jpg,image/jpeg,image/png,image/gif'
    },
    /**
     * 提示语
     */
    tip: {
      type: String,
      default: '仅支持jpg,png,gif文件'
    },
  },
  data () {
    return {
      preview: '', // 图片预览
      loading: false, // 上传时加载效果
      types: [], // 支持的文件类型集合
    }
  },
  created () {
    this.types = this.accept.split(',')
    this.preview = this.modelValue
  },
  watch: {
    /**
     * 监听父组件中对value进行重新赋值（如通过重置按钮进行初始化），以下场景需要更新预览图
     * 1、value没有值，需要初始化预览图
     * 2、value有值但没有preview，需要给预览图赋值
     * 3、不开启自动上传且value为字符串类型，需要给预览图赋值
     */
    modelValue (val) {
      if (!val || (val && !this.preview) || (!this.autoUpload && typeof val === 'string')) {
        this.preview = val
      }
    }
  },
  methods: {
    /**
     * 文件改变事件
     * @param {Event} e - 文件事件对象
     */
    onFileChange (e) {
      const file = e.target.files[0]
      if (!file) {
        return
      }
      const {
        size,
        name,
        type
      } = file
      if (size > (this.max * 1024)) {
        console.warn('文件大小', `${size / 1024}k`)
        this.$message.error(`文件尺寸不得超过${this.max}k, '${name}' 不符合要求`)
        this.resetIMG()
        return
      }
      if (file && this.types.includes(type)) {
        const reader = new FileReader()
        this.preview = ''
        this.loading = true
        reader.readAsDataURL(file)
        reader.onloadend = (e) => {
          /**
           * 图片文件对象
           * @event update:modelValue
           * @type {object}
           */
          this.$emit('update:modelValue', file)
          this.preview = e.target.result
          this.loading = false
        }
      } else {
        this.$message.error(`文件仅支持图片格式, '${name}' 不符合要求`)
        this.resetIMG()
      }
      // 每次上传文件的时候，都会将当前的文件路径保存至e.target.value中，当第二次选择文件时，由于两次e.target.value相同，所以不会触发change事件。
      // 解决方案为：在input绑定的change方法中，将当前的e.target.value = null
      e.target.value = null
    },
    /**
     * 重置图片
     */
    resetIMG () {
      this.$refs.file.value = null
      /**
       * 修改图片地址
       * @event update:modelValue
       * @type {string}
       */
      this.$emit('update:modelValue', '')
      this.preview = ''
    },
  },
}
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
