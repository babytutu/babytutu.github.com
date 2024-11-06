# 定时备份sql数据库

## crontab

使用crontab，实现每天定时备份数据库

时间表达式

```
* * * * *
- - - - -
| | | | |
| | | | +---- 星期中日期值（0-7，星期日可以是0或7）
| | | +------ 月份（1-12）
| | +-------- 一个月中的日期（1-31）
| +---------- 小时（0-23）
+------------ 分钟（0-59）
```

## 备份sql

backup.sh

```sh
#!/bin/bash

TIME=$(date +%Y%m%d%H%M%S)
DBUSER='DBUSER'
DBPASSWORD='DBPASSWORD'
DBNAME='DBNAME'
PATH='/PATH/'
FILE=$PATH$TIME$DBNAME'.sql'

mysqldump -u$DBUSER -p$DBPASSWORD $DBNAME > $FILE

```

## 增加定时任务

编辑文件

```sh
crontab -e
```

输入后保存,每天凌晨1点执行脚本

```sh
0 1 * * * /path/backup.sh
```

确认添加成功

```sh
crontab -l
```

## 设置权限

确保脚本具有执行权限

```sh
chmod +x /path/backup.sh
```
