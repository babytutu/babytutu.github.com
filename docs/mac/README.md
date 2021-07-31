# Mac小技巧
## 解决端口被占用

> 查看被占用端口对应PID

```bash
lsof -i:9001
```

终端会把坏人给列出来

```bash
COMMAND  PID USER   FD   TYPE   DEVICE SIZE/OFF NODE NAME
node    7500 tutu   24u  IPv4  0x27bd9      0t0  TCP *:etlservicemgr (LISTEN)
```

> 解放端口号

```bash
kill 92239
```

## 安装非官方下载的App

如果是从网络下载的软件，容易出现提示'这个软件已损坏'，解决办法：

系统偏好设置 -> 安全性与隐私 -> 通用 -> 选择“任何来源”

```bash
# 显示"任何来源"选项在控制台中执行
sudo spctl --master-disable
```

好了，现在软件可以打开了，记得把spctl给开启，安全第一啊

```bash
# 不显示"任何来源"选项在控制台中执行，默认值
sudo spctl --master-enable
```
