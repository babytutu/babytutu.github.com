# 使用Electron制作豆瓣FM的Mac版

仅通过`Electron`的API`loadURL`实现窗口内嵌套豆瓣FM网址生成app和dmg
[github代码仓库](https://github.com/babytutu/doubanApp)

## 创建项目

```bash
mkdir my-electron-app && cd my-electron-app
npm init
```

安装依赖包

```bash
npm install -D electron
```

### 解决安装依赖失败

新增.npmrc

```
registry = https://registry.npm.taobao.org
ELECTRON_MIRROR = https://npmmirror.com/mirrors/electron/
```

## 核心实现代码

基于[官方文档](https://www.electronjs.org/docs/latest/tutorial/quick-start)，修改部分内容实现，使用`loadURL`加载url即可

```js
  // 创建浏览窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    resizable: false,
    icon: path.join(__dirname, 'img/icon.png')
  })

  // 加载 url
  mainWindow.loadURL('https://fm.douban.com')
```

## dock设置

mac独有

```js
const { app } = require('electron')
const path = require('path')

// dock弹跳效果
app.dock.bounce()

// 设置dock图标
app.dock.setIcon(path.join(__dirname, 'img/icon.png'))
```

## 设置菜单

在app.whenReady()之前调用

### 禁用默认菜单

```js
// 禁用默认菜单
Menu.setApplicationMenu(null)
```

### 自定义菜单

```js
const menuTemp = [
  {
    label: '设置',
    submenu: [
      {
        label: '关于',
        role: 'about',
      },
      { type: 'separator' },
      {
        label: '退出',
        role: 'quit',
      }
    ]
  }
]
const menu = Menu.buildFromTemplate(menuTemp)
Menu.setApplicationMenu(menu)
```

## 设置顶部图标

使用Tray

```js
let tray

const image = nativeImage.createFromPath('img/icon.png')
tray = new Tray(image.resize({
  width: 20,
  height: 20
}))

const contextMenu = Menu.buildFromTemplate([
  {
    label: '退出',
    role: 'quit',
  }
])
tray.setContextMenu(contextMenu)
```

## 设置关于面板

```js
// 设置 "关于" 面板选项
app.setAboutPanelOptions({
  credits: '使用Electron制作,可点击源代码DIY',
})
```

## 本地缓存

新增`electron-store`实现app内数据缓存，不能安装在开发依赖`devDependencies`中，生成app时需要把这个模块一起打包才能使用

```bash
npm install electron-store
```

```js
const Store = require('electron-store')

// 初始化缓存
const schema = {
  showTitle: {
    type: 'boolean',
    default: true
  }
}

const store = new Store({schema})

// 读取
console.log(store.get('showTitle'))

// 修改
store.set('showTitle', false)
```

## 生成app

### 使用 Electron Forge

```
npm install -D @electron-forge/cli @electron-forge/maker-dmg
npx electron-forge import
```

### 自定义信息

forge.config.js

调整packagerConfig实现打包app的图标和版本自定义

需要新增img文件夹，准备icon.icns文件作为app的图标

打包时默认使用`package.json`中的`name`，建议增加`productName`，Electron 会优先使用这个字段作为应用名

```js
module.exports = {
  packagerConfig: {
    icon: 'img/icon',
    buildVersion: '2023-03-23',
  },
  makers: [
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './img/background.png',
        icon: './img/icon.icns',
      }
    }
  ]
}
```

#### 存在问题

参数封装过于扎实，造成背景图可能不生效（白色）

- 每次生成dmg后，需要退出后再重新打包
- 配置路径必须用`./`起头，表示js和img目录的相对关系
- 背景图尺寸，推荐658*498（源代码里写的），至少高度大于480，否则会出现滚动条

### 创建可分发的应用程序

```bash
npm run package
```

Electron-forge 会创建 out 文件夹

### 生成dmg文件

```bash
npm run make
```

## 直接使用appdmg打包

直接打包需要处理文件删除，参数配置，但生成的dmg会小将近20M
