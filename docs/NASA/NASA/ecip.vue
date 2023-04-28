<template>
  <div class="imgList">
    <div class="imgList-item" v-for="i in list" :key="i.image">
      <p>{{ i.date }}</p>
      <img @click="showBigImg(i)" :src="imgUrl(i)" :alt="i.image">
    </div>
  </div>
  <div class="bigImg" v-if="showBigImgDialog">
    {{ info.image }}
    <span @click="showBigImgDialog = false">X</span>
    <img :src="imgUrl(info)" alt="">
  </div>
  <!-- <pre>{{ list }}</pre> -->
</template>
<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'

const list = ref([])
const info = ref({})
const showBigImgDialog = ref(false)

function showBigImg(i) {
  info.value = {...i}
  showBigImgDialog.value = true
}

function imgUrl(i) {
  return `https://epic.gsfc.nasa.gov/archive/natural/${i.date.slice(0,10).replace(/-/g, '/')}/png/${i.image}.png`
}

onBeforeMount(() => {
  fetch('https://epic.gsfc.nasa.gov/api/natural').then(res => res.json()).then(res => {
    list.value = res
  })
})
</script>
<style lang="stylus" scoped>
.imgList {
  display: flex
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  font-size: 12px
  &-item {
    width 25%
    padding: 10px
  }
  img {
    width 100%
    cursor: pointer;
  }
}
.bigImg {
  position fixed
  z-index 3
  left 50%
  top 10%
  transform: translateX(-50%)
  width 600px
  height 630px
  background: #fff
  padding: 20px
  line-height 30px
  text-align: right;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
  span{
    padding: 2px 5px
    background: grey;
    color: #fff;
    cursor: pointer;
  }
}
</style>