# Redis简单入门

## 安装Redis

官方文档推荐直接使用homebrew安装

https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-mac-os/

```sh
brew install redis
```

### 验证结果

```sh
redis-server
```

会显示已安装的版本，此时可以直接通过`redis-cli`连接，Ctrl-C退出

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

## 连接Redis

### 命令行工具

```sh
redis-cli
```

常用命令

|命令|说明|示例|
|---|---|---|
|select index|切换数据库0-16|select 1|
|get key|查询对应值|get name|
|set key|设置对应值|set name "abc"|
|del key|删除值|del name|

### 使用vscode插件

官方插件

[Redis for VS Code](https://marketplace.visualstudio.com/items?itemName=Redis.redis-for-vscode)

通过界面输入用户名密码等信息即可连接Redis

## 设置密码

查找redis配置文件redis.conf的位置
```sh
find / -name redis.conf 2>/dev/null
```

搜索`requirepass`，原有配置行被#注释

修改为

```
requirepass yourpasword
```

修改完成后需要重启redis服务生效，登录时命令为

```
redis-cli -a yourpasword
```

## 使用Node.js连接

### 安装依赖包

```sh
npm install redis
```

### 连接本地redis

```js
import { createClient } from 'redis'

const client = createClient()

client.on('error', err => console.log('Redis Client Error', err))

await client.connect()

await client.set('key', 'value')
const value = await client.get('key')
```

### 连接外部带密码的redis

```
redis[s]://[[username][:password]@][host][:port][/db-number]
```

```js
createClient({
  url: 'redis://alice:foobared@awesome.redis.server:6380'
})
```