# Docker

## 安装Docker Desktop

### 下载安装包

[官网下载安装包](https://www.docker.com/products/docker-desktop)

### 换源

首先,我们打开Docker的设置，选择Docker Engine，设置docker镜像源

#### 国内docker镜像源

- azure - http://dockerhub.azk8s.cn
- tencent - https://mirror.ccs.tencentyun.com
- daocloud - http://f1361db2.m.daocloud.io
- netease - http://hub-mirror.c.163.com
- ustc - https://docker.mirrors.ustc.edu.cn
- aliyun - https://2h3po24q.mirror.aliyuncs.com


```json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn"
  ],
  "insecure-registries": [],
  "debug": true,
  "experimental": false
}
```

## Docker基础使用

### 官方示例

入门教程，全自动生成本地学习docker网站

```bash
docker run -d -p 80:80 docker/getting-started
```

### 对Docker操作

```bash
# 启动
sudo service docker start
# 重启
sudo service docker restart
# 停止
sudo service docker stop
```

### 对镜像操作

```bash
# 获取镜像列表
docker images
# 拉取镜像
docker pull 镜像名称
# 删除镜像
docker rmi 镜像名称
# 加载镜像
docker run 镜像名称
# 打包镜像
docker build -t 镜像名称 路径
```

### 对容器操作

```bash
# 查看容器
docker ps
# 启动容器
docker start 容器名或id
# 停止容器
docker stop 容器名或id
# 强制关闭容器
docker kill 容器名或id
# 删除容器
docker rm 容器名或id
```

### 容器制作成镜像

```bash
# 容器做成镜像
docker commit 容器名 镜像名
# 镜像打包备份
docker save -o 保存的文件名 镜像名
# 镜像解压
docker load -i 文件路径/备份文件
```

## 使用Dockerfile部署静态文件

如：把vue编译产出的代码（dist文件夹）打包成docker镜像并加载

### 创建Dockerfile

和dist文件夹放在一起

```
# 设置nginx
FROM nginx:latest
# 将dist文件夹中内容复制到 /usr/share/nginx/html 目录
COPY dist /usr/share/nginx/html
# 用本地的default.conf 配置文件替换nginx镜像里的默认配置
COPY default.conf /etc/nginx/conf.d/default.conf
```

### 创建default.conf

其中配置的8080作为docker内部的端口号

```conf
server {
    listen       8080;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        root   /usr/share/nginx/html/;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html/;
    }
}
```

打包镜像

```bash
docker build -t docker-demo .
```

加载容器，端口号A:B，A是本机访问使用，B是docker镜像端口

```bash
docker run -dp 9002:8080 --name docker-demo docker-demo
```

打开浏览器可以查看

[http://localhost:9002](http://localhost:3000/)

### 快捷脚本

clean.sh

```shell
#! /bin/bash

echo "docker-demo 停止容器"
docker stop docker-demo

echo "docker-demo 删除容器"
docker rm docker-demo

echo "docker-demo 删除镜像"
docker rmi docker-demo

```

### 应用场景

A机生成镜像，打包成tar文件，发送到服务器B机

```bash
docker build -t docker-demo .
docker save -o docker-demo.tar docker-demo
```

B机解压tar文件后加载镜像

```bash
docker load -i ./docker-demo.tar
docker run -dp 9002:8080 --name docker-demo docker-demo
```

### 整合命令

package.json

```json
{
  "name": "docker-demo",
  "version": "1.0.0",
  "description": "docker-demo",
  "scripts": {
    "start": "sh clean.sh && docker build -t docker-demo . && docker run -dp 9002:8080 --name docker-demo docker-demo",
    "save": "sh clean.sh && docker build -t docker-demo . && docker save -o docker-demo.tar docker-demo",
    "load": "sh clean.sh && docker load -i ./docker-demo.tar && docker run -dp 9002:8080 --name docker-demo docker-demo"
  },
  "license": "ISC"
}
```