<template>
  <uploadImg v-model="imgurl"></uploadImg>
</template>
<script>
  export default {
    data () {
      return {
        imgurl: 'https://v2.vuepress.vuejs.org/images/hero.png'
      }
    }
  }
</script>
