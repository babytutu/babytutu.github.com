# Github访问异常修复

核心问题是DNS解析异常，最直接的办法就是指定ip

## 获取ip

通过网站获取

https://sites.ipaddress.com/github.com/#dns

如 `140.82.112.3`

## 修改hosts

```bash
vim /etc/hosts
```

新增一条记录

```
140.82.112.3 github.com
```

保存后解析实时生效

## 验证结果

```bash
ssh -T git@github.com
```

验证成功结果，`babytutu`是我的用户名

```
Hi babytutu! You've successfully authenticated, but GitHub does not provide shell access.
```
