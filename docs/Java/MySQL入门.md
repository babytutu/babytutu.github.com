# MySQL入门

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

## 用户管理

> 使用root连接mysql

### 新增用户

密码需要包含英文大小写、数字、特殊符号

```sh
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
```

### 设置权限

```sh
GRANT SELECT ON *.* TO 'username'@'localhost';
```

### 删除权限

```sh
REVOKE ALL ON *.* FROM 'username'@'localhost';
```

### 刷新权限

```sh
FLUSH PRIVILEGES;
```

### 查询权限

```sh
SHOW GRANTS FOR 'username'@'localhost';
```

```sh
+--------------------------------------------------------------------------------+
| Grants for username@localhost                                               |
+--------------------------------------------------------------------------------+
| GRANT USAGE ON *.* TO 'username'@'localhost'                                |
| GRANT SELECT ON *.* TO 'username'@'localhost' |
+--------------------------------------------------------------------------------+
2 rows in set (0.00 sec)
```

### 删除用户

```sh
DROP USER 'username'@'localhost';
```
