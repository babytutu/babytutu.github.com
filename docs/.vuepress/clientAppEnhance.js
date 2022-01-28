import { defineClientAppEnhance } from '@vuepress/client'
import recorder from './components/recorder/recorder.vue'
import uploadImg from './components/uploadImg/uploadImg.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('recorder', recorder)
  app.component('uploadImg', uploadImg)
})
