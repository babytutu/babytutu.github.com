# Jmeter

基于java开发的一款开源压力测试工具

## 安装jdk

进入官网下载jdk1.8-mac https://www.oracle.com/java/technologies/downloads/#jdk18-mac

选择Java SE Development Kit 8u333下载，下载后安装即可

![img](./Jmeter/jdk.png)

在终端（terminal）输入java -version查看本机JDK版本

![img](./Jmeter/jdkversion.png)



## 安装Jmeter

进入官网下载 https://jmeter.apache.org/download_jmeter.cgi

![img](./Jmeter/jmeter.png)

解压后进入目录/apache-jmeter-5.5/bin，双击ApacheJMeter.jar即可运行，可制作1个替身放到应用程序

需要调整配置参数解决中文乱码问题，修改文件/apache-jmeter-5.5/bin/jmeter.properties

查找sampleresult.default.encoding（默认的编码格式），此参数默认注释，调整为UTF-8

```
sampleresult.default.encoding=UTF-8
```

修改配置后重启即可生效



## 设置测试计划

### 设置请求头

![img](./Jmeter/header.png)

常用请求头Content-Type: application/json;charset=UTF-8

### 添加变量

![img](./Jmeter/var.png)

一般会对接口的ip和port做变量定义方便使用

![img](./Jmeter/varres.png)

使用时用${名称}

### 新建线程组

![img](./Jmeter/group.png)

配置线程组

假设要在5秒内新建10个线程

![img](./Jmeter/groupsetting.png)

### 新建http请求

![img](./Jmeter/http.png)

编辑接口信息，以登陆接口为例，使用了之前定义的变量，接口传参通过消息体数据填写

![img](./Jmeter/login.png)

### 添加查看结果树

![img](./Jmeter/result.png)

### 添加汇总报告

![img](./Jmeter/report.png)

### 添加响应时间图

![img](./Jmeter/chart.png)

需要对图表进行简单配置，如时间间隔，可配置的再小一些，如1000

![img](./Jmeter/chartsetting.png)

## 开始测试

点击绿色箭头开始测试，根据线程组配置，5秒内10个线程请求登陆接口

![img](./Jmeter/run.png)

运行过程中绿色箭头置灰，可点击stop按钮暂停测试或关闭按钮停止测试，测试完成后绿色箭头恢复可点击

![img](./Jmeter/runres.png)

可以看到10次接口调用都成功返回，再查看汇总报告

![img](./Jmeter/loginreport.png)

可通过图形更直观的看到实际执行的结果

![img](./Jmeter/loginchart.png)



## 进阶使用

### 接口结果传递

正常业务场景，需要在登陆后获取登陆接口返回的票据，再后续接口请求头中都需要增加票据来实现权限认证，那么需要对登陆接口增加后置处理器

![img](./Jmeter/loginnext.png)

### 获取接口返回的票据并添加为变量

![img](./Jmeter/accessToken.png)

### 在HTTP信息头管理器中添加票据

![img](./Jmeter/addheader.png)

### 验证请求头

新增一个http请求

![img](./Jmeter/http2.png)

再次点击测试后查看结果树，请求-请求头，可以看到请求头中已经有了票据

![img](./Jmeter/infores.png)

## 安装插件

为了更好的使用工具，需要安装插件，首先需要安装jar包，然后安装说明放入指定目录后重启生效

https://jmeter-plugins.org/install/Install/

![img](./Jmeter/plugins.png)


![img](./Jmeter/addplugins.png)

插件包可能安装失败，可以直接下载插件包 https://jmeter-plugins.org/downloads/old/

JMeterPlugins-Standard-1.4.0.zip https://jmeter-plugins.org/downloads/file/JMeterPlugins-Standard-1.4.0.zip

JMeterPlugins-Extras-1.4.0.zip https://jmeter-plugins.org/downloads/file/JMeterPlugins-Extras-1.4.0.zip

解压后分别把/lib/ext中的JMeterPlugins-Extras.jar和JMeterPlugins-Standard.jar拷贝到/apache-jmeter-5.5/lib/ext目录，重启Jmeter就可以看到插件


## 其他压测方式

通过新增不同的线程组来实现

### jp@gc - Stepping Thread Group

![img](./Jmeter/step.png)

配置参数，使线程可促次递增

![img](./Jmeter/stepset.png)

同时配置jp@gc - Transactions per Second和jp@gc - Active Threads Over Time和jp@gc - Response Times Over Time来观察数据变化

![img](./Jmeter/tps.png)

![img](./Jmeter/at.png)

![img](./Jmeter/rtot.png)


### jp@gc - Ultimate Thread Group

配置更自由

![img](./Jmeter/ut.png)



## 测试场景

多用户登陆

### 计数器

如果变量是规律的数字，添加-配置元件-计数器

![img](./Jmeter/count.png)

可在接口传参中使用变量${userId}实现参数时从1001自动加1

### CSV 数据文件设置

把用户账号和密码写入csv文件

添加-配置元件-CSV 数据文件设置

![img](./Jmeter/csv.png)

接口请求时，用户名和密码使用变量

![img](./Jmeter/logincsv.png)



### 断言

可对接口返回增加断言，一般对相应结果内容做判断

![img](./Jmeter/assert.png)

