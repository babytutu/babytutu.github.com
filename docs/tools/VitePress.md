# VitePress

> Vue 驱动的静态网站生成器

[Vitepress官方文档](https://vitepress.vuejs.org/)

## 安装依赖

> 以books目录为例

```bash
mkdir books
cd books

git init
yarn init

yarn add -D vitepress
```

## 增加脚本

在 `package.json` 中添加一些 `scripts`

```json
{
  "scripts": {
    "start": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
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

新建目录`docs`,目录下新建`index.md`

```md
# Hello VitePress
```

## 开启本地调试

```bash
yarn start
```

## 增加菜单配置

在`docs/.vitepress`目录下，新建`config.js`

[默认主题配置官方文档](https://vitepress.vuejs.org/config/theme-configs)

```js
export default {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg',
    nav: [...],
    sidebar: { ... }
  }
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

[官方文档](https://vitepress.vuejs.org/guide/theme-home-page)

例子

```md
---
layout: home

hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---
```

通过设置`hero`,`actions`,`features`来配置个性化信息，效果同Vuepress官网首页




## Vue 组件

使用组件时，用内置的`ClientOnly`包裹

```md
<ClientOnly>
  <MyComponent />
</ClientOnly>
```

## 部署GitHub Pages

[部署说明官方文档](https://vitepress.vuejs.org/guide/deploying#github-pages)


新建`.github/workflows/docs.yml`


## 目录结构

```
├─ .github
│  └─ workflows
│     └─ docs.yml
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
├─ .gitignore
└─ package.json
```
