# Vuepress

> Vue 驱动的静态网站生成器

[vuepress官方文档](https://v2.vuepress.vuejs.org/zh/)

## 安装依赖

> 以books目录为例

```bash
mkdir books
cd books

git init
yarn init

yarn add -D vuepress@next
```

## 增加脚本

在 `package.json` 中添加一些 `scripts`

```json
{
  "scripts": {
    "start": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

添加`.gitignore`文件

```
node_modules
.temp
.cache
```

## 增加第一个文件

新建目录`docs`,目录下新建`README.md`

```md
# HELLO VUEPRESS
```

## 开启本地调试

```bash
yarn start
```

## 增加菜单配置

在`docs/.vuepress`目录下，新建`config.js`

[默认主题配置官方文档](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)

```js
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  base: '/books/', // 部署到GitHub Pages需要
  title: '网站标题',
  description: '网站描述',
  theme: defaultTheme({
    sidebar: [
      {
        text: '首页',
        link: '/README.md'
      },
    ]
  })
}
```

## Markdown

[自定义容器](https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html)

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::
```

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

## 配置首页

[官方文档](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#首页)

例子

```md
---
home: true
---
```

通过设置`heroImage`,`actions`,`features`来配置个性化信息，效果同Vuepress官网首页


## 自定义样式

[官方说明](https://v2.vuepress.vuejs.org/zh/reference/default-theme/styles.html)

Style 文件的路径是 `.vuepress/styles/index.scss`，新建一个就可以了

可以添加额外的样式，或者利用它来覆盖默认主题的预定义 CSS 变量，需要注意样式有2套变量，默认的和暗黑模式的，想改哪个改哪个

::: details 此项目的样式
```scss
:root {
  // brand colors
  --c-brand: #f60;
  --c-brand-light: #f90;

  // custom container colors
  --c-tip: #f60;

  // layout vars
  --sidebar-width: 18rem;
  --content-width: 900px;
  --homepage-width: 960px;
}

// 暗黑模式样式
html.dark {
  // brand colors
  --c-brand: #f60;
  --c-brand-light: #f90;
}
```
:::

## 增加搜索功能

需要手动安装插件，[配置文档](https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html)

```bash
yarn add -D @vuepress/plugin-search@next
```

在配置文件中增加plugins配置，docs/.vuepress/config.js

```js
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  plugins: [
    [
      searchPlugin({
        locales: {
          '/': {
            placeholder: '站内搜索',
          }
        },
      }),
    ],
  ],
}
```

## 注册 Vue 组件

你可以通过 component 方法来注册 Vue 全局组件：

官方文档[客户端配置的使用方法](https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html)

.vuepress/client.js

```js
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }){},
  setup(){},
  rootComponents: [],
})
```

vuepress在build时在`Node`环境进行预渲染，可能导致报错（window，document等未定义），可通过环境变量`__VUEPRESS_SSR__`判断是否加载组件

```js
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  async enhance({ app }) {
    if (!__VUEPRESS_SSR__) {
      const MyComponent = await import('./MyComponent.vue')
      app.component('MyComponent', MyComponent.default)
    }
  }
})
```

使用组件时，用内置的`ClientOnly`包裹即可

```md
<ClientOnly>
  <MyComponent />
</ClientOnly>
```

## 引入代码块

你可以使用下面的语法，从文件中导入代码块：

```md
<!-- 最简单的语法 -->
@[code js](../foo.js)
```

需要注意的是，路径别名在导入代码语法中不会生效。你可以通过下面的配置来自行处理路径别名：

```js
// .vuepress/config.js
const path = require('path')

module.exports = {
  markdown: {
    importCode: {
      handleImportPath: (str) => str.replace(/^@src/, path.resolve(__dirname)),
    },
  },
}
```

```md
<!-- 会被解析至 '.vuepress/foo.js' -->
@[code js](@src/foo.js)
```

## 部署GitHub Pages

[部署说明官方文档](https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages)


新建`.github/workflows/docs.yml`


## 目录结构

```
├─ .github
│  └─ workflows
│     └─ docs.yml
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
├─ .gitignore
└─ package.json
```
