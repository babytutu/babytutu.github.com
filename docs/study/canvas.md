# Canvas

[官方API](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)

## 基础API

- beginPath()
- moveTo()
- clearRect()

## 基本应用

### 创建画布

```html
<canvas id="canvas" width="300" height="300" />
```

```js
const dom = document.getElementById(id)
const ctx = dom.getContext('2d', {
  willReadFrequently: true
})
```

### 配置画笔

设置颜色和粗细

```js
ctx.strokeStyle = 'red'
ctx.lineWidth = 3
ctx.lineCap = 'round'
```

### 画笔类型

#### 铅笔

```js
ctx.lineTo(x, y)
ctx.stroke()
```

#### 橡皮

```js
ctx.clearRect(x - 5, y - 5, 20, 20)
```

#### 矩形

```js
ctx.beginPath()
ctx.rect(x, y, x1 - x, y1 - y)
ctx.stroke()
```

### 动态画笔

通过监听鼠标事件`onmousedown`,`onmousemove`,`onmouseup`

```js
// 监听canvas内部的鼠标左键事件
dom.onmousedown = (e) => {
  // 只监听左键点击
  if (e.button !== 0) {
    return
  }
  const x = e.offsetX
  const y = e.offsetY
  // 准备开始绘制新的路径
  ctx.beginPath()
  // 画笔移动到鼠标按下位置
  ctx.moveTo(e.offsetX, e.offsetY)
  // 跟随鼠标移动绘制路径
  dom.onmousemove = (e) => {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
  }
  // 鼠标抬起后停止绘制并清除监听
  document.onmouseup = (e) => {
    dom.onmousemove = null
    document.onmouseup = null
  }
}
```
