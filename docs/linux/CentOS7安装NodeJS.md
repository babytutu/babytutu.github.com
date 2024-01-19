# CentOS 7 安装NodeJS

## 下载安装包

```bash
cd /home
wget https://nodejs.org/dist/v16.9.1/node-v16.9.1-linux-x64.tar.gz
```

## 解压文件

```bash
tar xzf node-v16.9.1-linux-x64.tar.gz
```

## 配置软链

```bash
ln -s /home/node-v16.9.1-linux-x64/bin/node /usr/bin/node
ln -s /home/node-v16.9.1-linux-x64/bin/npm /usr/bin/npm
```

## 验证结果

```bash
node -v
npm -v
```
