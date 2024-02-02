# Maven安装

Java开发基础入门

## 安装Java

> JDK20来了，但是据说大部分情况下还是用的8

下载 Java SE Development Kit 8u381

https://www.oracle.com/cn/java/technologies/downloads/#java8

## 安装Maven

官方下载

https://maven.apache.org/download.cgi

直接下载

https://dlcdn.apache.org/maven/maven-3/3.9.6/binaries/apache-maven-3.9.6-bin.zip

解压后放到自定义目录，如`/usr/local`

## 系统配置

打开终端，编辑配置文件：

```bash
vi ~/.zshrc
```

增加环境变量配置

```
export MAVEN_HOME=/usr/local/apache-maven-3.9.6
export PATH=$PATH:$MAVEN_HOME/bin
```

保存配置并重新加载配置

```bash
source .zshrc
```

## 验证配置结果

```
mvn -v
```

会展示信息如下，表示安装配置成功

```
Apache Maven 3.9.6 (bc0240f3c744dd6b6ec2920b3cd08dcc295161ae)
Maven home: /usr/local/apache-maven-3.9.6
Java version: 1.8.0_391, vendor: Oracle Corporation, runtime: /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
Default locale: zh_CN, platform encoding: UTF-8
OS name: "mac os x", version: "12.7", arch: "x86_64", family: "mac"
```

## 修改默认源

配置国内镜像加速：在setting.xml文件的mirrors标签中配置镜像源，这里使用的是阿里的远程maven镜像，目前国内大多数都使用它

```
<mirror>
    <id>aliyunmaven</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun maven</name>
    <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```
