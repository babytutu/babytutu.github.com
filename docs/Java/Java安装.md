# Java安装

> JDK20来了，但是据说大部分情况下还是用的8

下载 Java SE Development Kit 8u381

https://www.oracle.com/cn/java/technologies/downloads/#java8

## 系统配置

打开终端，编辑配置文件：

```bash
vi ~/.zshrc
```

增加环境变量配置

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home
```

保存配置并重新加载配置

```bash
source .zshrc
```

## 验证配置结果

```bash
java -version
```

会展示信息如下，表示安装配置成功

```bash
java version "1.8.0_381"
Java(TM) SE Runtime Environment (build 1.8.0_381-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.381-b09, mixed mode)
```
