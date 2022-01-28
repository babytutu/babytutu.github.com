# 图片上传

## Demo

使用`FileReader`方法，选择图片后读取到`base64`格式的图片信息，通过赋值给`img`的`src`实现图片预览

<uploadImg v-model="imgurl" tip="500K以内的jpg或png格式"></uploadImg>

<script>
  export default {
    data () {
      return {
        imgurl: 'https://v2.vuepress.vuejs.org/images/hero.png'
      }
    }
  }
</script>

## Code

```vue
<template>
  <uploadImg v-model="imgurl" tip="500K以内的jpg或png格式"></uploadImg>
</template>
<script>
  export default {
    data () {
      return {
        imgurl: ''
      }
    }
  }
</script>
```

## Props

|参数|类型|说明|
|---|---|---|
|v-model|图片路径或对象|-|
|max|图片大小限制，默认500k|500|
|accept|可选文件类型|image/jpg,image/jpeg,image/png,image/gif|
|tip|提示语|仅支持jpg,png,gif文件|
