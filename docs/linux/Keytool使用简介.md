# Keytool工具使用

> Keytool 是一个 Java数据证书的管理工具, Keytool将密钥（key）和证书（certificates）存在一个称为 keystore的文件中。

需要安装Java，使用场景如安卓app备案需要提供MD5和公钥

## 常用命令

进入证书所在目录

### 获取证书信息

```bash
keytool -list -v -keystore xxx.keystore -storepass 证书密码
```

### 获取证书公钥

```bash
keytool -list -rfc -keystore xxx.keystore -storepass 证书密码 | openssl x509 -inform pem -pubkey
```
