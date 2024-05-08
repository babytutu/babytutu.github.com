# MySQL设置密码

一般使用图形化工具进行数据库操作更安全方便，服务器上访问，一般用于设置密码

## 连接数据库

### 连接本地数据库

```sh
mysql -u root -p
```

会提示输入密码（安装完成后root用户没有密码）

### 连接远程数据库

假设ip`192.168.1.1`

```sh
mysql -h 192.168.1.1 -u root -p
```

### 退出

```sh
exit
```

## 设置密码

5.7之后版本

```sh
ALTER USER 'root'@'localhost' IDENTIFIED BY '密码';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password  BY '密码';
```

5.7之前版本

```sh
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('密码');
```

刷新权限

```sh
FLUSH PRIVILEGES;
```
