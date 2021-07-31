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
module.exports = {
  base: '/books/', // 部署到GitHub Pages需要
  title: '网站标题',
  description: '网站描述',
  themeConfig: {
    sidebar: [
      {
        text: '首页',
        link: '/README.md'
      },
    ]
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

## 部署GitHub Pages

[部署说明官方文档](https://v2.vuepress.vuejs.org/zh/guide/deployment.html#github-pages)


新建`.github/workflows/docs.yml`


::: details 点击查看代码
```yml

# 文件目录
name: docs

on:
  # 每当 push 到 master 分支时触发部署
  push:
    branches: [master]
  # 手动触发部署
  # workflow_dispatch:

jobs:
  docs:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
        with:
          # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          # 选择要使用的 node 版本
          node-version: '14'

      # 缓存 node_modules
      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # 如果缓存没有命中，安装依赖
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # 运行构建脚本
      - name: Build VuePress site
        run: yarn docs:build

      # 查看 workflow 的文档来获取更多信息
      # @see https://github.com/crazy-max/ghaction-github-pages
      - name: Deploy to GitHub Pages
        uses: crazy-max/ghaction-github-pages@v2
        with:
          # 部署到 gh-pages 分支
          target_branch: gh-pages
          # 部署目录为 VuePress 的默认输出目录
          build_dir: docs/.vuepress/dist
        env:
          # @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
:::

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
