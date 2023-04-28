<template>
  <input type="text" v-model="q">
  <button :disabled="!q" @click="search">搜索</button>
  <div class="imgList">
    <div class="imgList-item" v-for="i in list" :key="i.nasa_id">
      <div>{{ i.date_created }}</div>
      <p>{{ i.title }}</p>
      <img @click="showBigImg(i)" v-if="i.img" :src="i.img" alt="">
    </div>
  </div>
  <div class="bigImg" v-if="showBigImgDialog">
    {{ info.title }}
    <span @click="showBigImgDialog = false">X</span>
    <video class="bigImg-video" controls v-if="info.video" :src="info.video"></video>
    <p>{{ info.description }}</p>
  </div>

</template>
<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'

const q = ref('earth')
const list = ref([])
const info = ref({})
const showBigImgDialog = ref(false)

function showBigImg(i) {
  info.value = {...i}
  showBigImgDialog.value = true
}

function search() {
  fetch(`https://images-api.nasa.gov/search?q=${q.value}`).then(res => res.json()).then(res => {
    list.value = res.collection.items.map(i => ({
      ...i.data[0],
      img: i.links ? i.links[0].href : '',
      video: i.links ? i.links[0].href.replace('thumb.jpg', 'small.mp4') : '',
    })).filter(i => i.media_type === 'video')
  })
}

onBeforeMount(() => {
  search()
})
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
button {
  padding 10px 15px
  display: inline
  line-height 1.2
  color #409eff
  background #ecf5ff
  border 1px solid #b3d8ff
}
.imgList {
  display: flex
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  font-size: 12px
  &-item {
    position relative
    width 30%
    height 160px
    margin: 0 8px
    img {
      cursor: pointer;
    }
    p {
      position absolute
      width 100%
      background: rgba(0, 0, 0, .3)
      padding: 0 10px
      margin: 0
      color: #fff
    }
  }
}
.bigImg {
  position fixed
  z-index 3
  left 50%
  top 20%
  transform: translateX(-50%)
  width 680px
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
  &-video{
    width 640px
    height 360px
  }
  p {
    text-align: left
  }
}
</style>
