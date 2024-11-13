# CentOS 7 安装NodeJS

node从16升级到18后就不支持CentOS 7，有2个选择

- 安装16的最新版本 https://nodejs.org/dist
- 安装兼容的版本 https://github.com/sbwml/node-latest-centos

## 下载安装包

```bash
cd /home
```

16
```bash
wget https://nodejs.org/dist/v16.9.1/node-v16.9.1-linux-x64.tar.gz
```

20
```bash
wget https://github.com/sbwml/node-latest-centos/releases/download/v20.18.0/node-v20.18.0-linux-x64.tar.gz
```

## 解压文件

16
```bash
tar xzf node-v16.9.1-linux-x64.tar.gz
```

20
```bash
tar xzf node-v20.18.0-linux-x64.tar.gz
```

## 配置软链

-f参数会覆盖已有的设置

16
```bash
ln -sf /home/node-v16.9.1-linux-x64/bin/node /usr/bin/node
ln -sf /home/node-v16.9.1-linux-x64/bin/npm /usr/bin/npm
```

20
```bash
ln -sf /home/node-v20.18.0-linux-x64/bin/node /usr/bin/node
ln -sf /home/node-v20.18.0-linux-x64/bin/npm /usr/bin/npm
```

## 验证结果

```bash
node -v
# v20.18.0
npm -v
# 10.8.2
```
