# Docker快速上手

## 安装Docker Desktop

### 下载安装包

[官网下载安装包](https://www.docker.com/products/docker-desktop)

### 换源

首先,我们打开Docker的设置

选择Docker Engine,在其中输入(这里使用的是163的源,如果想要使用其他源可以自行设置,github上有个项目:docker_mirror可以自动检测在你的网络环境下那个源是最快的)

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

本地开启网页服务，展示docker文档，可以作为本地的学习文档

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

## 使用Dockerfile部署vue项目

将前端已打好的代码（dist文件夹）打包成docker

### 创建Dockerfile

和dist文件夹放在一起

```
# 设置nginx
FROM nginx:latest
# 将dist文件夹中内容复制到 /usr/share/nginx/html/ 目录
COPY dist/ /usr/share/nginx/html/
# 用本地的default.conf 配置文件替换nginx镜像里的默认配置
COPY default.conf /etc/nginx/conf.d/default.conf
```

### 创建default.conf

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

执行命令

```bash
docker build -t docker-demo .
```

加载容器

```bash
docker run -dp 9002:8080 --name docker-demo docker-demo
```

打开浏览器可以查看

[http://localhost:9002](http://localhost:3000/)

### 快捷脚本

start.sh

```shel
#! /bin/bash

echo "docker-demo 停止容器"
sleep 3
docker stop docker-demo

echo "docker-demo 删除容器"
sleep 3
docker rm docker-demo

echo "docker-demo 删除镜像"
docker rmi docker-demo

echo "docker-demo 打包镜像"
sleep 3
docker build -t docker-demo .

echo "docker-demo 启动镜像"
sleep 3
docker run -dp 9002:8080 --name docker-demo docker-demo
```

在脚本同目录下执行脚本

```bash
sh ./start.sh
```
