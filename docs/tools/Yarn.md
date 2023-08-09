# Yarn

安装前，肯定需要已安装Node.js，建议使用v16以上

## 安装

- 它的能力和npm相仿，然后，它还是用npm装的
- 个人觉得它装的快一点，占位小一点，原理就不说了，用就完了

```bash
npm install -g yarn
```

## v1升级到v2

- [官方升级文档](https://yarnpkg.com/getting-started/migration)
- [完整配置文档](https://yarnpkg.com/configuration/yarnrc)

*摘录最关键的步骤*

- Run npm install -g yarn to update the global yarn version to latest v1
  - 执行命令`npm install -g yarn`安装yarn最新的v1版本
- Go into your project directory
  - 进入项目目录
- Run yarn set version berry to enable v2 (cf Install for more details)
  - 执行命令`yarn set version berry`设置启用v2版本(然后你会发现最新版本是v3...)
- If you used .npmrc or .yarnrc, you'll need to turn them into the new format (see also 1, 2)
  - 如果项目中使用了.npmrc 或者 .yarnrc，需要修改配置为新的格式(具体参数名见配置文档)
- Run yarn config set nodeLinker node-modules
  - 执行命令`yarn config set nodeLinker node-modules`(字面意思，建立关系，看起来好像可以用其他目录)
- Commit the changes so far (yarn-X.Y.Z.js, .yarnrc.yml, ...)
  - 根据yarn配置文档增加设置
- Run yarn install to migrate the lockfile
  - 执行命令`yarn install`升级原来的`yarn.lock`文件

还需要在.gitignore中增加忽略文件

```
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions
```

### 举例

因众所周知的问题，默认的安装镜像地址建议是修改为淘宝源，v1版本的yarn可以直接读取.npmrc文件实现源切换

.npmrc

```
registry = https://registry.npm.taobao.org
```

升级后文件名改了，配置名也改了

.yarnrc.yml

```
nodeLinker: node-modules
npmRegistryServer: https://registry.npm.taobao.org
```

## 常用命令

```bash
# 初始化
yarn init

# 安装所有依赖
yarn

# 安装依赖包(以vue为例)
yarn add vue

# 安装仅开发开发依赖(以vue为例)
yarn add vue --dev

# 升级依赖包(以vue为例)
yarn up vue

# 删除依赖包(以vue为例)
yarn remove vue

# 更新yarn自身
yarn set version latest

# 查询设置(以npmRegistryServer为例)
yarn config get npmRegistryServer
```
