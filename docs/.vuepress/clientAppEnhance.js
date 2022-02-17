import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(async ({ app }) => {
  if (!__VUEPRESS_SSR__) {
    const recorder = await import('./components/recorder/recorder.vue')
    const uploadImg = await import('./components/uploadImg/uploadImg.vue')
    const player = await import('./components/player/audio-player.vue')

    const myComponent = await import('./components/my-component/my-component.vue')
    app.component('recorder', recorder.default)
    app.component('uploadImg', uploadImg.default)
    app.component('player', player.default)

    app.component('myComponent', myComponent.default)
  }
})
