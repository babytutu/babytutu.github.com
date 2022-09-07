<template>
  <p class="input-text">
    <label for="iconPre">字体样式前缀</label>
    <input name="iconPre" type="text" v-model="iconPre">
  </p>
  <p>解析本地 ttf、woff、otf 文件</p>
  <div class="input-box">
    <template v-if="iconList.length">
      <label @click="reset">重置</label>
    </template>
    <template v-else>
      <label>上传文件</label>
      <input type="file" @change="getLocalTTF" accept=".ttf,.woff,.otf" />
    </template>
  </div>
  <section class="p-action">{{tips}}</section>
  <template v-if="iconList.length">
    <div v-for="item in iconList" :key="item.name"
      class="p-icon-item"
      :class="{ 'p-icon-item-active': activeIcon === item[copyType] }"
      @click="copyToClipboard(item[copyType])">
      <p class="iconfont" v-html="item.show"></p>
      <p class="name">{{iconPre}}{{item.name}}</p>
    </div>
  </template>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import opentype from 'opentype.js'

const iconList = ref<Array<any>>([]) // 图标数组
const tips = ref<string>('') // 提示语
const activeIcon = ref<string>('') // 高亮的图标
const copyType = ref<string>('name') // 复制类型
const iconPre = ref<string>('icon-') // 字体前缀

// 解析icon
function parseIcon(bufferStr: any) {
  iconList.value = []
  let result = opentype.parse(bufferStr, {})
  for (const i in result.glyphs.glyphs) {
    const item = result.glyphs.glyphs[i]
    if (item.name) {
      iconList.value.push({
        name: item.name,
        show: `&#${item.unicode};`,
      })
    }
  }
  tips.value = '点击复制icon代码'
}

// 添加style
function setStyle(url) {
  let $style = document.createElement('style')
  $style.innerHTML = `
    @font-face {
font-family: 'iconfont';
src: url('${url}') format('truetype');
}
.iconfont {
font-family: "iconfont" !important;
font-size: 24px;font-style: normal;
-webkit-font-smoothing: antialiased;
-webkit-text-stroke-width: 0.2px;
-moz-osx-font-smoothing: grayscale;
}`;
  document.body.append($style)
}

// 解析本地 ttf 文件
function getLocalTTF(event) {
  // 解析文件内容
  let file = event.target.files[0]
  let reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = (evt) => { parseIcon(evt?.target?.result); }

  // base64 编码，动态加入 @font-face
  let readerBase64 = new FileReader();
  readerBase64.readAsDataURL(file)
  readerBase64.onload = (evt) => { setStyle(evt?.target?.result) }
}

// 拷贝剪切板
function copyToClipboard(content) {
  activeIcon.value = content
  tips.value = `复制成功: ${iconPre.value + content}`

  let $input = document.createElement('input')
  $input.style.opacity = '0'
  $input.value = iconPre.value + content
  document.body.appendChild($input)
  $input.select()

  const result = document.execCommand('copy')
  document.body.removeChild($input)

  return result
}

function reset() {
  iconList.value = []
}
</script>
<style lang="stylus" scoped>
/*全局设置*/
.p-action {
  margin: 20px auto;
  max-width: 1100px;
  width: 100%;
  font-size: 35px;
  text-align: center;
  font-weight: bold;
}

.p-copy-type {
  font-size: 20px;
  cursor: pointer;
}

/*icon 列表样式*/
.p-icon-item {
  margin: 6px;
  padding: 10px 6px;
  display: inline-block;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #dddddd;
  overflow: hidden;
  white-space: pre-line;
  box-sizing: border-box;
  &:hover {
    background: #ffffff;
    border-color: transparent;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  }
  &-active {
    background #ecf5ff
    border-color #b3d8ff
    color #409eff
  }
  p {
    line-height 1.2
  }
  .iconfont {
    margin: 0 20px;
    padding: 6px;
    border-radius: 4px;
    font-size: 28px;
  }
  .name {
    font-size: 12px;
    font-weight: bold;
  }
  .value {
    font-size: 12px;
    font-weight: bold;
  }
}
.input-box {
  position relative
  padding 10px 15px
  display: inline
  line-height 1.5
  color #409eff
  background #ecf5ff
  border 1px solid #b3d8ff
  border-radius 4px
  &:hover{
    background: #409eff
    color #fff
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
}
.input-text {
  input {
    margin-left 10px
    padding 5px
  }
}
</style>
