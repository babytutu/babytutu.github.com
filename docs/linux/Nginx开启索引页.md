# Nginx开启索引页

[Nginx官方文档](https://nginx.org/en/docs/http/ngx_http_autoindex_module.html)

通过`ngx_http_autoindex_module`模块实现制定目录的文件索引功能

## 开启索引

```
location / {
    autoindex on;
}
```

## 参数说明

激活/关闭自动索引

autoindex 默认关闭

```
Syntax:	 autoindex on | off;
Default: autoindex off;
```

是否显示文件确切大小

autoindex_exact_size 默认开启

```
Syntax:	 autoindex_exact_size on | off;
Default: autoindex_exact_size on;
```

开启以本地时间来显示文件时间的功能

autoindex_localtime 默认关闭

```
Syntax:	 autoindex_localtime on | off;
Default: autoindex_localtime off;
```

## 使用示例

```
location / {
    autoindex on; # 激活/关闭自动索引
    autoindex_exact_size off; # 是否显示文件确切大小
    autoindex_localtime on; # 开启以本地时间来显示文件时间的功能
    charset utf-8; # 设置编码格式，中文不乱码
}
```
