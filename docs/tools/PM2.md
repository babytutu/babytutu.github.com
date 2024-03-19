# PM2

Node.js进程管理工具

## 安装

全局安装，保证`pm2`命令全局可用

```bash
npm i pm2 -g
```

## 常用命令

```bash
# 启动服务
pm2 start app.js

# 查看列表
pm2 ls

# 停止/启动/重启
pm2 stop id|name|namespace|all
pm2 start id|name|namespace|all
pm2 restart id|name|namespace|all

# 停止并删除进程
pm2 delete id|name|namespace|all

# 杀死进程
pm2 kill
```

## 配置文件

创建配置文件

```bash
pm2 init
```

自动生成文件`ecosystem.config.js`,可手动生成

```js
module.exports = {
  apps: [
    {
      name: 'apis',
      script: './index.js',
      watch: true, // 文件更新后自动重启
    },
  ],
}
```

通过配置文件启动

```bash
pm2 start ecosystem.config.js
```
