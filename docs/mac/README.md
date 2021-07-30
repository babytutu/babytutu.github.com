# 解决端口被占用

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