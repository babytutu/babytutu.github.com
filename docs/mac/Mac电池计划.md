# Mac电池计划

系统信息-硬件-电源-电源事件

## 常用命令

查看所有参数
```
pmset -g
```

查看计划任务
```
pmset -g sched
```

取消所有任务-需要管理员权限

```
sudo pmset schedule cancelall
```

查看日志
```
pmset -g log | grep Wake
```

查看唤醒原因原因
```
pmset -g log | grep -e "Sleep.*due to" -e "Wake.*due to"
```

查看从开机以来的睡眠/唤醒次数

```
pmset -g stats
```

|字段|注释|
|---|---|
|Sleep Count|睡眠次数|
|Dark Wake Count|后台唤醒次数（不亮屏）|
|User Wake Count|亮屏唤醒次数（通常是用户手动唤醒）|

## 个性化配置

电池下关闭小憩（推荐）：

```
sudo pmset -b powernap 0
```

查看配置是否生效，分别显示电池和插电模式下的配置

```
pmset -g custom
```
