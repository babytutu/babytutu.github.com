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
