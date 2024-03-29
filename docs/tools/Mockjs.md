# Mockjs

> 生成随机数据，拦截 Ajax 请求

[官网](http://mockjs.com/)

## 安装

```bash
npm i mockjs
```

- 具体例子

```js
const Mock = require('mockjs')
const Random = Mock.Random

const template = {
  name: Random.cname()
}
console.log(Mock.mock(template))
// => {name: "李雷"}
```

## 语法规范

### 数据模板

```
// 属性名   name
// 生成规则 rule
// 属性值   value
'name|rule': value
```

列子

```js
const Mock = require('mockjs')

// Number
const template = {
  'number1|1-10.1-2': 1,
  'number2|1.1-2': 1,
  'number3|1.3': 1,
  'number4|1.10': 1.123
}

console.log(Mock.mock(template))

// =>
// {
//   number1: 2.4,
//   number2: 1.8,
//   number3: 1.888,
//   number4: 1.1238143732
// }
```


### 数据占位符

```
@占位符
@占位符(参数 [, 参数])
```

例子

```js
const Mock = require('mockjs')

// @
const template = {
  city: '@city(true)',
  cname: '@cname',
  color: '@color',
}

console.log(Mock.mock(template))

// =>
// {
//   city: "广东省 东莞市",
//   cname: "范芳",
//   color: "#a1f279",
// }
```


## 常用方法

### Mock.mock()

- Mock.mock( template )
> 根据数据模板生成模拟数据

- Mock.mock( rurl, template )
> 记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。

这个方法就老厉害了～直接把ajax请求给拦截了

- Mock.mock( rurl, function( options ) )
> 记录用于生成响应数据的函数。当拦截到匹配 rurl 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。

可以获取接口中的传参，根据参数返回不同的数据，让mock数据更真实一些

> options
指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性


### Mock.Random

[详细API文档](https://github.com/nuysoft/Mock/wiki/Mock.Random)

> 是一个工具类，用于生成各种随机数据。
> Mock.Random 的方法在数据模板中称为『占位符』，书写格式为 @占位符(参数 [, 参数])

一个例子
```js
const Mock = require('mockjs')
const Random = Mock.Random

console.log(Random.email())
// => "n.clark@miller.io"
console.log(Mock.mock('@email'))
// => "y.lee@lewis.org"
```