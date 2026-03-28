# Redis 简单入门

## 安装 Redis

官方文档推荐直接使用 homebrew 安装

https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-mac-os/

```sh
brew install redis
```

### 验证结果

```sh
redis-server
```

会显示已安装的版本，此时可以直接通过`redis-cli`连接，Ctrl-C 退出

## 启动/停止服务

启动

```sh
brew services start redis
```

信息

```sh
brew services info redis
```

停止

```sh
brew services stop redis
```

## 连接 Redis

### 命令行工具

```sh
redis-cli
```

常用命令

| 命令         | 说明            | 示例           |
| ------------ | --------------- | -------------- |
| select index | 切换数据库 0-16 | select 1       |
| get key      | 查询对应值      | get name       |
| set key      | 设置对应值      | set name "abc" |
| del key      | 删除值          | del name       |

### 使用 vscode 插件

官方插件

[Redis for VS Code](https://marketplace.visualstudio.com/items?itemName=Redis.redis-for-vscode)

通过界面输入用户名密码等信息即可连接 Redis

## 修改配置

查找 redis 配置文件 redis.conf 的位置

```sh
find / -name redis.conf 2>/dev/null
```

位置可能在/etc/redis/、/usr/local/etc/redis/或者 Redis 安装目录下

mac 通过 homebrew 安装，目录在`/opt/homebrew/etc/redis.conf`

```sh
sudo nano /opt/homebrew/etc/redis.conf
```

### 修改默认端口

默认端口号是 6379，可通过修改 `port` 字段自定义

保存修改后重启 redis 服务，执行命令确认生效，如修改为 `6380`

```sh
redis-cli -p 6380 ping
```

返回`PONG`说明生效

### 仅设置密码

默认无密码，修改 `requirepass` 配置项

```
requirepass testpassword
```

测试是否生效

```
redis-cli -a testpassword
```

### 设置用户名和密码

Redis 6.0 及以上版本支持多用户模式

搜索`user`，原有配置行被#注释

```
# user alice on +@all -DEBUG ~* >somepassword
```

修改为

```
user newuser on +@all ~* >password
```

- newuser 是用户名。
- on 表示启用该用户。
- password 是用户密码。
- ~\* 表示该用户可以访问所有键。
- +@all 表示该用户可以执行所有命令。

修改完成后需要重启 redis 服务生效，登录时命令为

```
redis-cli -u redis://newuser:password@localhost:6379
```

## 使用 Node.js 连接

### 安装依赖包

```sh
npm install redis
```

### 连接本地 redis

```js
import { createClient } from 'redis'

const client = await createClient({
  url: 'redis://newuser:password@localhost:6380/0',
})
  .on('error', (err) => {
    console.log('Redis Client Error', err)
    process.exit(1)
  })
  .connect()

await client.set('key', 'value')
const value = await client.get('key')

client.destroy()
```

### 连接外部带密码的 redis

```
redis[s]://[[username][:password]@][host][:port][/db-number]
```

```js
createClient({
  url: 'redis://alice:foobared@awesome.redis.server:6379/0',
})
```
