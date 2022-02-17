<template>
  <player :list="list" :rates="[1, 2, 3]"></player>
  <button class="btn" @click="showDialog = true">弹窗播放</button>
  <player miniable :list="list" v-model="showDialog" v-if="showDialog" @close="showDialog = false" />
</template>
<script>
  export default {
    data () {
      return {
        list: [
          {
            name: '远程mp3',
            src: 'xxx.mp3',
          },
        ],
      }
    },
  }
</script>
