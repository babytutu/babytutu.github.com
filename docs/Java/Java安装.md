# Java安装

> JDK20来了，但是据说大部分情况下还是用的8

下载 Java SE Development Kit 8u411

https://www.oracle.com/cn/java/technologies/downloads/#java8

官网下载需要登陆账号

## 设置环境变量

打开终端，编辑配置文件：

```bash
vi ~/.zshrc
```

增加环境变量配置

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home
export PATH=$PATH:$JAVA_HOME/bin
```

保存配置并重新加载配置

```bash
source .zshrc
```

确认变量

```bash
echo $JAVA_HOME
```

## 验证安装结果

```bash
java -version
```

会展示信息如下，表示安装成功

```bash
java version "1.8.0_421"
Java(TM) SE Runtime Environment (build 1.8.0_421-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.421-b09, mixed mode)
```
