import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  async enhance({ app }) {
    if (!__VUEPRESS_SSR__) {
      const recorder = await import('./components/recorder/recorder.vue')
      const uploadImg = await import('./components/uploadImg/uploadImg.vue')
      const player = await import('./components/player/audio-player.vue')
      const crypto = await import('./components/crypto/demo.vue')
      const iconPreview = await import('./components/icon-preview/icon-preview.vue')

      const myComponent = await import('./components/my-component/my-component.vue')
      app.component('recorder', recorder.default)
      app.component('uploadImg', uploadImg.default)
      app.component('player', player.default)
      app.component('crypto', crypto.default)
      app.component('iconPreview', iconPreview.default)

      app.component('myComponent', myComponent.default)
    }
  }
})
