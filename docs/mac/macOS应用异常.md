# 破解软件安装失败解决办法

## macOS 运行应用出现「意外退出」及「崩溃闪退」问题修复方法

更新系统后有很多软件打不开，或者出现闪退的情况，是因为Apple苹果公司在新系统中删除了TNT的证书

打开终端工具输入并执行如下命令：

```bash
sudo codesign --force --deep --sign - (应用路径)
```

应用路径：打开访达（Finder），点击左侧导航栏的 应用程序，找到相关应用，将它拖进终端命令- 的后面，然后按下回车即可，注意最后一个 - 后面有一个空格。

正常情况下只有一行提示，即成功：

```bash
/文件位置 : replacing existing signature
```

## 解决APP安装已损坏，无法打开

```bash
sudo xattr -d com.apple.quarantine 空格键（然后在应用程序里拖入）
```