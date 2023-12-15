# Universal Links

## Apple Developer 设置

BundleId设置Associated Domains Enable

![bundleId](./bundleId.png)

## 增加配置文件

网站以`test.cn`为例

新增apple-app-site-association

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TeamID.com.xxx.test",
        "paths": [
          "*"
        ]
      }
    ]
  }
}
```

上传到网站根目录或`.well-known`文件夹下

通过网址
https://test.cn/apple-app-site-association
或者
https://test.cn/.well-known/apple-app-site-association
访问或下载文件

使用苹果官方工具验证是否正常访问

https://app-site-association.cdn-apple.com/a/v1/test.cn

## uniapp配置

[官方配置说明](https://uniapp.dcloud.net.cn/tutorial/app-ios-capabilities.html)

修改manifest.json

```json
"capabilities" : {
    "entitlements" : {
        "com.apple.developer.associated-domains" : [ "applinks:test.cn" ]
    }
}
```

## 验证

安装app

Safari中打开`https://test.cn`应该有打开xxx的选项，说明可以触发跳转
