# Crontab命令

定时任务

## 首次使用

查询定时任务列表报错

```sh
crontab -l
```

```
crontab: no crontab for root
```

```sh
crontab -e
```

按ESC退出，输入`wq`回车，会生成文件，再次执行`crontab -l`就正常了

## 添加任务

```sh
crontab -e
```

insert切换到输入模式

```
*/1 * * * * /path/test.sh
```

保存并退出，控制台提示`crontab: installing new crontab`

## 常见命令

- 查看任务crontab -l
- 编辑任务crontab -e
- 清空任务crontab -r
- 恢复任务crontab file

## 日志

```sh
# 不输出内容
*/1 * * * * /path/XXXX.sh &> /dev/null

# 将正确和错误日志都输出到 /tmp/load.log
*/1 * * * * /root/XXXX.sh > /tmp/load.log 2>&1 &

# 只输出正确日志到 /tmp/load.log
*/1 * * * * /root/XXXX.sh > /tmp/load.log &
# 等同于
*/1 * * * * /root/XXXX.sh 1>/tmp/load.log &

# 只输出错误日志到 /tmp/load.log
*/1 * * * * /root/XXXX.sh 2> /tmp/load.log &
```


## 时间表达式

|*|*|*|*|*|command|
|:---:|:---:|:---:|:---:|:---:|:---:|
|分|时|日|月|周|命令|
|0-59|0-23|1-31|1-12|0-7|命令|

- `*`代表取值范围内的所有数字，如在分钟单位，则表示每分钟执行一次，其它时间点同理。第3段上的`*`代表[01-31]日，第4段上的`*`代表[01-12]月；
- `,`用于列举多个数字，如 `1,3,5` 指定`1，3，5`这三个时间点；
- `-`用于确定时间区间，如 `2-6` 等价于 `2,3,4,5,6`；
- `/`代表每的意思,`*/5`表示每5个单位，如在分钟位置设置 `*/2`表示每两分钟执行一次


## 查看邮件

定时任务执行后都会发送一封邮件

- 登录邮件工具`mail`
- 查看指定邮件,直接输入序号，如`1`
- 删除指定邮件,`d 1`或者`d 1-10`
- 查看邮件列表,`h`
- 退出邮件工具`q`