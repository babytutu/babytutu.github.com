# Nginx 入门

## 安装

### Windows 下安装

[安装文档](http://nginx.org/en/docs/windows.html)

http://nginx.org/en/download.html

下载window安装包

以c盘为例，解压到`nginx-1.21.6`，进入文件夹，`start nginx`即可开启nginx

```
cd c:\
unzip nginx-1.21.6.zip
cd nginx-1.21.6
start nginx
```

### Mac 下安装

强烈建议使用[homebrew](https://brew.sh/)

安装homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

通过homebrew安装nginx

```bash
brew install nginx
```

升级

```bash
brew upgrade nginx
```

删除

```bash
brew uninstall nginx
```

获取安装信息

```bash
brew info nginx
```

结果示例

```
nginx: stable 1.19.2 (bottled), HEAD
HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server
https://nginx.org/
/usr/local/Cellar/nginx/1.19.2 (11 files, 2.2MB) *
Built from source on 2022-03-21 at 11:32:20
```

## 配置

此为mac下路径

- 配置文件路径：/usr/local/etc/nginx/nginx.conf

- 安装路径：/usr/local/Cellar/nginx/1.19.2

- 服务器默认路径：/usr/local/var/www

- 日志路径：/usr/local/var/log

## 常用命令

执行`nginx -h`获取命令合集

```
nginx version: nginx/1.19.2
Usage: nginx [-?hvVtTq] [-s signal] [-c filename] [-p prefix] [-g directives]

Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: /usr/local/Cellar/nginx/1.19.2/)
  -c filename   : set configuration file (default: /usr/local/etc/nginx/nginx.conf)
  -g directives : set global directives out of configuration file

```

### 查看基本信息

获取版本信息

```bash
nginx -v
// nginx version: nginx/1.19.2
```

### 验证配置文件

修改配置文件后，强烈建议校验准确性

```bash
nginx -t
// nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok
// nginx: configuration file /usr/local/etc/nginx/nginx.conf test is successful
```

### 执行指定命令

stop, quit, reopen, reload

```bash
// 启动
nginx
// 快速关闭
nginx -s stop
// 请求处理完成后关闭
nginx -s quit
// 重新打开日志文件
nginx -s reopen
// 重新加载配置文件
nginx -s reload
```

### 使用指定的配置文件

```bash
nginx -c /path/xxx.conf
```

## 虚拟主机

端口号 8081，默认首页 index.html

```
server {
  listen       8081;
  server_name  localhost;

  location / {
    root   html;
    index  index.html index.htm;
  }
}
```

## nginx 防盗链

设置 valid_referers

```
location ~* \.(gif|jpg|png|swf|js)$ {
  valid_referers 127.0.0.1;
  if ($invalid_referer) {
    return 404;
  }
  root  /usr/local/etc/nginx/test;
}


location / {
  root   /usr/local/etc/nginx/test;
  index  index.html index.htm;
}
```

### 验证结果

直接访问文件，返回 404

```bash
curl -I http://127.0.0.1:8081/js/test.js
// 404
```

添加 referer 后访问，返回 200

```bash
curl -I http://127.0.0.1:8081/js/test.js -e "http://127.0.0.1"
// 200
```

## 匹配规则

= 表示精确匹配

^~ 表示 uri 以某个字符串开头

~ 正则匹配(区分大小写)

~* 正则匹配(不区分大小写) !~和!~*分别为区分大小写不匹配及不区分大小写不匹配的正则

/ 任何请求都会匹配

匹配优先级：

= > ^~ > /

### 禁止访问某些后缀文件

```
location ~ \.(js|txt)$ {
  deny all;
}
```

### 禁止访问目录或目录下文件

```
// 禁止访问目录
location ^~ /js/ {
  deny all;
}

// 禁止访问目录下文件
location ^~ /js {
  deny all;
}
```

### 禁止直接访问文件

直接访问文件的`referer`为空。通过 html 去加载 js 会有`referer`，设置白名单后可保证无法直接访问文件

```
location ^~ /js/ {
  valid_referers localhost 127.0.0.1;
  if ($invalid_referer) {
    return 404;
  }
  root   /usr/local/etc/nginx/test;
}
```

## 本地测试

一个简单的例子

/usr/local/etc/nginx

nginx默认路径新增`test`文件夹

文件夹内容如下

```
.
├── index.html
└── js
    └── test.js

1 directory, 2 files
```

::: details index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta >
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>test</title>
  <script src="js/test.js"></script>
</head>
<body>
  Hello!
</body>
</html>
```

:::

::: details test.js

```js
window.onload = function () {
  document.body.append('test.js加载成功')
}
```

:::


/usr/local/etc/nginx/nginx.conf

`http`内部新增一个`server`，实现以下功能

- 端口号8081
- 日志路径`/usr/local/Cellar/nginx/1.19.2/logs/test.access.log`
- 路径配置到`test`文件夹
- js目录下文件无法在浏览器中直接访问
- 静态资源不缓存，更改代码后刷新即可生效

::: details nginx.conf server部分

```
# 测试nginx功能
    server {
        listen       8081;
        server_name  localhost;

        access_log  logs/test.access.log  main;

        location / {
            # 设置不缓存
            add_header Cache-Control no-cache;

            root   /usr/local/etc/nginx/test;
            index  index.html index.htm;
        }

        location ^~ /js/ {
            # 设置白名单
            valid_referers localhost 127.0.0.1 10.0.7.31;
            # 设置无法直接通过url打开文件
            if ($invalid_referer) {
                return 404;
            }
            root   /usr/local/etc/nginx/test;
        }
    }
```
:::

### 访问

浏览器访问`http://localhost:8081/`，页面展示

```
Hello! test.js加载成功
```

浏览器访问`http://localhost:8081/js/test.js`，页面`404 Not Found`

### 日志

```
127.0.0.1 - - [21/Mar/2022:16:32:33 +0800] "GET /js/test.js HTTP/1.1" 200 77 "http://localhost:8081/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
127.0.0.1 - - [21/Mar/2022:16:35:55 +0800] "GET /js/test.js HTTP/1.1" 404 555 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36"
```


## 设置软链

通过`ln -sf 来源 指向`

```bash
ln -sf /Users/tutu/Downloads/code/test /usr/local/etc/nginx/test
```

进入/usr/local/etc/nginx，执行ll

出现1个test，被软链到了/Users/tutu/Downloads/code/test

```
test -> /Users/tutu/Downloads/code/test
```

再次软链，实现二次指向，可实现不改nginx自由替换指向目录

```bash
ln -sf /Users/tutu/Downloads/code/demo /Users/tutu/Downloads/code/test
```

最终nginx的test目录，实际指向的是demo目录，此原理可用于前端部署，通过软链切换文件夹实现更新。
