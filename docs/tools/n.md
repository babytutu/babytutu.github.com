# 安装不同版本的nodejs

部分场景需要低版本的nodejs，可使用n或者nvm安装不同版本后切换实现，n安装简单。

## 准备

安装nodejs

## 安装

通过npm全局安装n

```bash
npm i n -g
```

### 设置环境变量

因下载node版本时默认镜像速度过慢，需要设置`NODE_MIRROR`加速下载

打开终端，编辑配置文件：

```bash
vi ~/.zshrc
```

增加环境变量配置

```bash
export NODE_MIRROR=https://npmmirror.com/mirrors/node/
export PATH=$PATH:$NODE_MIRROR
```

保存配置并重新加载配置

```bash
source .zshrc
```

确认设置

```bash
echo $NODE_MIRROR
```

## 常用命令

|命令|说明|示例|
|---|---|---|
|1|展示已安装版本并安装选中版本|n|
|ls|展示已安装版本|n ls|
|version|安装版本|n 20|
|rm version|卸载node|n rm 20|
|uninstall|卸载已安装的node|n uninstall|
