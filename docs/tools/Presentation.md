# Presentation

通过js直接在第二屏幕打开指定网页

## 核心API

[Presentation_API](https://developer.mozilla.org/en-US/docs/Web/API/Presentation_API)

- 草案，2022-8-8更新，API内容可能调整
- 必须使用https
- 实验性技术，兼容性较差，Chrome47+，Edge79+

### Presentation

- 默认端 Presentation.defaultRequest
- 接收端 Presentation.receiver

### PresentationRequest

创建PresentationRequest对象

[API说明](https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest/PresentationRequest)


```js
new PresentationRequest(url)
new PresentationRequest(urls)
```

创建连接

PresentationRequest.start()

## 实现方式

### 主屏幕

1. 初始化PresentationRequest对象。设置第二屏幕地址
2. 设置默认的PresentationRequest对象
3. 通过按钮点击，调用start方法，触发浏览器的选择屏幕弹窗
4. 选择第二屏幕后，初始化连接connection
5. 监听onconnect和onterminate，控制按钮显示
6. 监听onmessage接收第二屏发的消息
7. 点击关闭按钮可主动关闭第二屏幕

### 第二屏

1. 页面加载后尝试获取Presentation.receiver
2. 初始化连接connection
3. 监听onmessage接收主屏幕发的消息

## DEMO

### 主屏幕 controller.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>主屏幕打开第二屏幕</title>
</head>
<body>
  <div>主屏幕</div>
  <button id="connect">打开第二个屏幕</button>
  <div id="connected" style="display: none">
    <button id="disconnectBtn">断开</button>
    <button id="sendMessage">发送消息</button>
    <input type="text" id="message">
  </div>
  <div id="message-list"></div>
  <script>
    const connectBtn = document.querySelector("#connect")
    const disconnectBtn = document.querySelector("#disconnectBtn")
    const sendMessageBtn = document.querySelector('#sendMessage')
    // 定义第二个屏幕地址
    const presUrl = "http://localhost:5500/presentation.html"
    // 初始化
    const presentationRequest = new PresentationRequest(presUrl)
    // 定义默认链接
    navigator.presentation.defaultRequest = presentationRequest

    // 监听连接状态，变更按钮可见
    const handleAvailabilityChange = (available) => {
      connected.style.display = available ? "inline" : "none"
      connectBtn.style.display = available ? "none" : "inline"
      if (!available) {
        presentationConnection = null
      }
    }

    // 渲染消息
    function addMessage(content, type) {
      const listItem = document.createElement("li")
      listItem.textContent = type + content
      document.querySelector("#message-list").appendChild(listItem)
    }

    // 点击按钮，触发弹出第二屏幕选择
    connectBtn.onclick = function () {
      presentationRequest.start().then(connection => {
        // 设置连接，监听消息和关闭方法
        presentationConnection = connection
        // 连接后渲染按钮状态，监听消息
        connection.onconnect = () => {
          handleAvailabilityChange(true)
          addMessage('第二屏幕已打开', '[提示]')
          connection.onmessage = message => {
            // 收到消息
            const data = JSON.parse(message.data)
            addMessage(data, '[接收]')
          }
        }
        // 连接关闭后渲染按钮状态
        connection.onterminate = () => {
          handleAvailabilityChange(false)
        }
      })
    }

    // 点击断开
    disconnectBtn.onclick = () => {
      // 主动关闭第二屏幕
      presentationConnection.terminate()
    }

    // 获取输入框内容并发送消息
    sendMessageBtn.onclick = () => {
      const message = document.querySelector('#message').value.trim()
      // 发送消息
      presentationConnection.send(JSON.stringify(message))
      addMessage(message, '[发送]')
    }
  </script>
</body>
</html>
```

### 第二屏 presentation.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>第二个屏幕</title>
</head>

<body>
  <div>第二个屏幕</div>
  <button id="sendMessage">发送消息</button>
  <input type="text" id="message">
  <div id="message-list"></div>
  <script>
    const sendMessageBtn = document.querySelector('#sendMessage')
    let presentationConnection // 定义连接

    // 监听连接
    function addConnection (connection) {
      // 设置链接
      presentationConnection = connection
      addMessage('从主屏幕打开', '[提示]')
      connection.onmessage = message => {
        // 收到消息
        const data = JSON.parse(message.data)
        addMessage(data, '[接收]')
      }
    }

    // 渲染消息
    function addMessage (content, type) {
      const listItem = document.createElement("li")
      listItem.textContent = type + content
      document.querySelector("#message-list").appendChild(listItem)
    }

    // 页面加载后，初始化receiver
    document.addEventListener('DOMContentLoaded', function () {
      if (navigator.presentation.receiver) {
        navigator.presentation.receiver.connectionList.then(list => {
          list.connections.map(connection => addConnection(connection))
        })
      }
    })

    // 发送消息
    sendMessageBtn.onclick = () => {
      const message = document.querySelector('#message').value.trim()
      // 发送消息
      presentationConnection.send(JSON.stringify(message))
      addMessage(message, '[发送]')
    }

  </script>
</body>

</html>
```