# Vue3 with Vite

## Vue 官方的项目脚手架工具

[快速开始](https://staging-cn.vuejs.org/guide/quick-start.html)

官方demo选的最佳搭档变成了vite，不知道是否心理作用，打包真的快了呢。。。

Vue3使用ts重构，开始尝试把js都改成ts


```bash
npm init vue@latest
```

Vue3 + Vue-Router + Pinia

## VSCode Plugins

- 需要安装vue@3插件Volar
- vue@2专用的Vetur必须禁用，否则一堆错误提示
- 为了解决ts引入vue的问题，需要安装TypeScript Vue Plugin (Volar)

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 路由懒加载

[路由懒加载](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html)

webpack没有了，但是分块打包vite也是支持的，就是写法好像有点粗糙

需要通过修改vite打包配置实现

vite.config.ts

```ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'demo': [
            './src/views/HomeView.vue',
            './src/views/AboutView.vue'
          ]
        }
      }
    }
  }
})
```

为了让配置文件优雅些，使用单独的json文件配置分块配置

```ts
import manualChunks from './manualChunks.json'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks
      }
    }
  }
})
```

manualChunks.json

```json
{
  "demo": [
    "./src/views/HomeView.vue",
    "./src/views/AboutView.vue"
  ]
}
```

ts配置文件中include也要加上manualChunks.*

tsconfig.config.json

```json
{
  "include": ["vite.config.*", "vitest.config.*", "cypress.config.*", "manualChunks.json"]
}
```

运行打包命令`npm run build`就可以发现打包出来的文件名变成demo了

```
vite v3.0.4 building for production...
✓ 46 modules transformed.
dist/assets/logo.da9b9095.svg    0.30 KiB
dist/index.html                  0.55 KiB
dist/assets/index.b52b83bf.js    24.62 KiB / gzip: 10.25 KiB
dist/assets/demo.1d23a85f.css    1.10 KiB / gzip: 0.43 KiB
dist/assets/index.bacc5500.css   3.06 KiB / gzip: 1.07 KiB
dist/assets/demo.89f4e38a.js     57.36 KiB / gzip: 22.87 KiB
```

## 状态管理 Pinia

[Pinia官网](https://pinia.vuejs.org/)

Install

```bash
yarn add pinia
```

Usage

```ts
// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
```

新建文件夹stores，新增一个store，还是习惯用vue2的风格

```ts
// counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    changeCount(payload: string) {
      this.count = Number(payload)
    },
  }
})
```

在组件中使用

```vue
<template>
  <van-cell-group title="状态管理" inset>
    <van-field center :model-value="count" label="计数器" readonly>
      <template #button>
        <van-button size="small" type="primary" @click="reset">重置</van-button>
      </template>
    </van-field>
    <van-field
      v-model="digit"
      center
      type="digit"
      label="整数"
    >
      <template #button>
        <van-button size="small" type="primary" @click="update(digit)">更新</van-button>
      </template>
    </van-field>
  </van-cell-group>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
const digit = ref('')
const store = useCounterStore()
const count = computed(() => store.count)
const update = (val: string) => store.changeCount(val)
const reset = () => store.$reset()
</script>
```

## 加载静态资源

默认public下的内容会一并打包，如在项目中调用`public/img/avatar.png`，直接写`/img/avatar.png`就可以

## ts配置

根据create-vue生成的默认配置，结合vue3开发中加入了一些参数配置

### 配置文件

[搭配 TypeScript 使用 Vue](https://staging-cn.vuejs.org/guide/typescript/overview.html)

tsconfig.json

```json
{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue"],
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }
  },

  "references": [
    {
      "path": "./tsconfig.config.json"
    }
  ]
}
```

tsconfig.config.json

```json
{
  "extends": "@vue/tsconfig/tsconfig.node.json",
  "include": ["vite.config.*", "vitest.config.*", "cypress.config.*", "manualChunks.json"],
  "compilerOptions": {
    "composite": true,
    "types": ["node"]
  }
}
```

package.json

```json
{
  "name": "front-h5",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://babytutu.github.io/front-h5",
  "scripts": {
    "start": "vite --host",
    "build": "run-p type-check build-only",
    "preview": "vite preview --port 4173",
    "build-only": "vite build",
    "type-check": "vue-tsc --noEmit",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  },
  "dependencies": {
    "pinia": "^2.0.16",
    "vue": "^3.2.37",
    "vue-router": "^4.1.2"
  },
  "devDependencies": {
    "@rushstack/eslint-patch": "^1.1.0",
    "@types/node": "^16.11.45",
    "@vitejs/plugin-vue": "^3.0.1",
    "@vitejs/plugin-vue-jsx": "^2.0.0",
    "@vue/eslint-config-typescript": "^11.0.0",
    "@vue/tsconfig": "^0.1.3",
    "eslint": "^8.5.0",
    "eslint-plugin-vue": "^9.0.0",
    "npm-run-all": "^4.1.5",
    "typescript": "~4.7.4",
    "vite": "^3.0.1",
    "vue-tsc": "^0.38.8"
  }
}
```

### 在单文件组件中的用法

需要在 script 标签上加上 lang="ts"

#### 组合式 API

[单文件组件 `<script setup>`](https://staging-cn.vuejs.org/api/sfc-script-setup.html)

```vue
<script setup lang="ts">
interface Book {
  title: string
  author: string
  year: number
}


defineProps<{
  title: string,
  list: Array<Book>,
  id?: 'id',
}>()
</script>
```

#### 选项式 API

对 prop 的类型推导需要用 defineComponent() 来包装组件

```ts
import { defineComponent } from 'vue'

export default defineComponent({
  // 启用了类型推导
  props: {
    name: String,
    id: [Number, String],
    msg: { type: String, required: true },
    metadata: null
  }
})
```

使用 PropType 进行类型校验

```ts
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface Book {
  title: string
  author: string
  year: number
}

export default defineComponent({
  props: {
    book: {
      // 提供相对 `Object` 更确定的类型
      type: Object as PropType<Book>,
      required: true
    },
  }
})
```

### 全局变量支持

vue3中定义全局变量

```ts
import axios from 'axios'

app.config.globalProperties.$axios = axios
```

新增 global.d.ts

```ts
import axios from 'axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: typeof axios,
  }
}
```

使用window

```ts
const global = window as any

global.document.title = '标题'
```


## 移动端vant组件库

### 按需引入组件

推荐安装 unplugin-vue-components 插件

#### 安装插件

```bash
yarn add unplugin-vue-components -D
```

#### 配置插件

vite.config.js 文件

```js
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
})
```

在 `<script setup>` 中可以直接使用 Vant 组件，不需要进行组件注册。

### 浏览器适配

Viewport 布局

vant官方推荐的postcss-px-to-viewport不支持postcss8，找到一个支持的

```bash
yarn add postcss-px-to-viewport-8-plugin -D
```

新增配置文件`postcss.config.js`

```js
/**
 * @see https://youzan.github.io/vant/#/zh-CN/advanced-usage
 * @see https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin
 */
 module.exports = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      viewportWidth: 375,
      replace: false,
    },
  },
}
```

## Vite插件

[官方插件](https://cn.vitejs.dev/plugins/)

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)
- [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)

### vue3相关

Install

```bash
yarn add @vitejs/plugin-vue @vitejs/plugin-vue-jsx -D
```

Usage

```js
// vite.config.js
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default {
  plugins: [
    vue(),
    vueJsx(),
  ]
}
```


### @vitejs/plugin-legacy

Install

还需要安装terser，用于代码压缩

```bash
yarn add @vitejs/plugin-legacy terser -D
```

Usage

```js
// vite.config.js
import legacy from '@vitejs/plugin-legacy'

export default {
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
}
```

### vite-plugin-html

[github](https://github.com/vbenjs/vite-plugin-html/blob/main/README.zh_CN.md)

安装

```bash
yarn add vite-plugin-html -D
```

使用

在 index.html 中增加 EJS 标签

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><%- title %></title>
</head>
```

在 vite.config.ts 中配置

```ts
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      /**
       * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
       * @default src/main.ts
       */
      entry: 'src/main.ts',

      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          title: 'index',
        },
      },
    }),
  ],
})
```