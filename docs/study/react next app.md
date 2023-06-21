# React-app

基于[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[React-app](https://github.com/babytutu/react-app)

## 路由

通过文件目录自动添加路由

例子：

- 普通路由 /test
- 动态路由 /test/a, /test/b（export导出还有bug）

```
- test               // 目录
    - [name]         // 动态路由
        - layout     // 框架
        - page       // 页面
    - layout         // 框架
    - page           // 页面
```

## Redux

### 定义store

store/store.ts

```ts
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import formReducer from './form/FormSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
```

store/form/FormSlice.ts

```ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  name: string
  age: number
}

const initialState: FormState = {
  name: 'test',
  age: 10,
}

export const FormSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setName, setAge } = FormSlice.actions

export default FormSlice.reducer
```

### 初始化

nextjs默认都是服务端渲染，需要单独客户端组件加载redux

store/providers.tsx

```tsx
'use client'

/* Core */
import { Provider } from 'react-redux'

/* Instruments */
import { store } from '@/store/store'

export const Providers = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>
}
```

RootLayout中加载

app/layout.tsx

```tsx
import { Providers } from '@/store/providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Providers>
  )
}
```

### 添加hooks.ts

方便页面调用

app/hooks.ts

```ts
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '@/store/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

### 页面调用

- useAppSelector 获取state的值
- useAppDispatch 通过dispatch方法修改state的值

```tsx
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import { setName } from '@/store/form/FormSlice'

export default function Page() {
  const state = useAppSelector((state) => state.form)
  const dispatch = useAppDispatch()
  function setData (name: string) {
    dispatch(setName(name))
  }
  return <div>{state.name}</div>
}
```

## 组件库

安装组件库

```
yarn add antd-mobile
```

在 Next.js 中使用 antd-mobile 需要做一些额外的配置

next.config.js

```js
const nextConfig = {
  transpilePackages: ['antd-mobile'],
}

module.exports = nextConfig
```

在 app 目录下使用 antd-mobile，需要在文件顶部添加 'use client' 指令

app/page.tsx

```tsx
'use client'

import { Button } from 'antd-mobile'
```

## 部署

通过设置next.config.js可以实现静态代码导出，可部署到github上

```js
/** @type {import('next').NextConfig} */
const { execSync } = require('child_process')
const basePath = '/react-app'

// 获取最后一次提交的commitID,处理异常报错
let version
try {
  version = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '')
} catch (e) {
  /* eslint-disable no-console */
  console.warn('Getting revision FAILED. Maybe this is not a git project.')
}

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  env: {
    basePath,
  },
  generateBuildId: () => version,
  transpilePackages: ['antd-mobile'],
  reactStrictMode: true,
}

module.exports = nextConfig
```

- output，导出静态代码
- basePath，对应到github的目录，如`https://xxx.github.io/xxx`
- trailingSlash，保证路由'/'的准确
- env，环境变量设置，在代码中可以通过`process.env.basePath`获取
- generateBuildId，给代码添加版本号，可使用githash
- reactStrictMode，严格模式，保证代码可靠性

### workflow

通过github-action实现代码更新后自动部署到GitHub-page

以下代码效果为`main`分支代码变更后自动通过`yarn`打包代码并把out文件夹发布

```yml
name: Build and Deploy
on:
  push:
    branches:
      - main
permissions:
  contents: write
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn

      - name: Install and Build
        run: |
          yarn install --frozen-lockfile
          yarn build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: out

```

## MDX

You write markdown with embedded components through JSX

[MDX](https://mdxjs.com/)

### 安装依赖

```bash
yarn add @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

src/mdx-components.tsx

```ts
import type { MDXComponents } from 'mdx/types'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  }
}
```

### 更新配置

next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
```

### 新增mdx文件

src/mdx/hello.mdx

```mdx
import { NoticeBar } from 'antd-mobile'

export const year = "Markdown is a lightweight markup language used to format text. It allows you to write using plain text syntax and convert it to structurally valid HTML. It's commonly used for writing content on websites and blogs."

<NoticeBar content={year} color='alert' />
```

### 页面中加载

page.tsx

```tsx
import HelloWorld from '@/mdx/hello.mdx'

export default function Page () {
  return <HelloWorld />
}
```

## 存在问题

React官方推荐使用next框架，但是因为服务端渲染对于前端来说非必须，在next进行调整过程中，对纯静态导出不是很友好，已知2个比较影响使用的bug

- 访问动态路由404[output: 'export' with use client in dynamic routes doesn't work](https://github.com/vercel/next.js/issues/48022)
- 无法自定义404页面[not-found.js not work when use static HTML export](https://github.com/vercel/next.js/issues/51400)