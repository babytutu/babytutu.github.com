import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(async ({ app }) => {
  if (!__VUEPRESS_SSR__) {
    const recorder = await import('./components/recorder/recorder.vue')
    const uploadImg = await import('./components/uploadImg/uploadImg.vue')
    app.component('recorder', recorder.default)
    app.component('uploadImg', uploadImg.default)
  }
})
