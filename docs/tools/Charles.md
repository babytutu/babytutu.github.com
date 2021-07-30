# Charles

[软件下载](https://www.charlesproxy.com/download/)

key
```
Registered Name: https://zhile.io
License Key: 48891cf209c6d32bf4
```

## 电脑端设置

### 证书安装

`Help-SSL Proxying-Install Charles Root Certificate`

### 开启代理

> 默认Port`8888`

`Proxy-Proxy Settings-Enable transparent HTTP proxying`

### 添加https的网址和端口

> 端口默认443

`Proxy-SSL Proxying Settings-Enable SSL Proxying-Add `


## 手机端设置

### 设置代理

- 连接电脑所在的Wi-Fi，设置代理，填入电脑在Wi-Fi下IP，端口默认`8888`

- 手机访问网页后，Charles会弹出提示手机接入，点击`allow`允许手机连接

### 证书安装

- 手机打开浏览器，访问`chls.pro/ssl`安装证书
- ***iOS*** 需要在手机`设置 -> 通用 -> 关于本机 -> 证书信任设置` 中打开信任



## 基础使用

### 代理到本地文件

- 添加代理规则，`Tools-Map Local Settings-Add`
- 分别填写远程和本地地址，`Map From-Map To`
- 设置完成后手机重新请求资源，即可代理到本地文件

