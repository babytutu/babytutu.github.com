# ES6实用技术点

## 目录

- 块级作用域
- 字符串
- 解构
- 函数
- 数组
- 对象
- Set
- Map
- Class
- Module
- 异步编程



## 1、块级作用域

### 变量申明，let取代var

- 只在声明所在的块级作用域内有效
- 不会发生变量提升—先定义后使用，or *ReferenceError*(引用错误)
- 不允许重复声明—作用域内只能定义1次，or *SyntaxError*(语法错误)

```js
function test () {
  let a1 = 1
}
console.log(a1)
// Uncaught ReferenceError: a1 is not defined

console.log(a2)
let a2 = 1
// Uncaught ReferenceError: a2 is not defined

let a3 = 1
// ...
let a3 = 2
// Uncaught SyntaxError: Identifier 'a3' has already been declared
```


### 使用const定义常量

- `const`声明一个只读的常量，且不能修改值，否则*TypeError*(类型错误)
- `const`本质——变量指向的内存地址所保存的数据不得改动

  简单类型的数据（数值、字符串、布尔值），变量的值就保存在变量指向的内存地址，因此等同于常量

  复合类型的数据（主要是对象和数组），变量指向的内存地址不可变，但它指向的数据结构不可控

```js
const b1 = 1
b1 = 2
// Uncaught TypeError: Assignment to constant variable.

const b2 = {}
b2.x = 'hehe'
console.log(b2)
// { x: 'hehe' }

const b3 = []
b3.push(1)
console.log(b3)
// [1]
```



## 2、字符串

### 模板字符串

> 增强版的字符串，用反引号（`）标识

- 普通字符串
- 多行字符串——所有的空格和缩进都会被保留
- 字符串中嵌入变量

```js
const str1 = `我就是一串字`

const str2 = `我是第一行
 我是第二行`

console.log(str2)
// 我是第一行
// 我是第二行

let name = 'utry'
console.log(`Hello ${name}`)
// Hello utry
```


### 新增API

- **includes()**：返回布尔值，表示是否找到了参数字符串
- **repeat()**：返回一个新字符串，表示将原字符串重复`n`次

```js
const str = 'hello world'
console.log(str.includes('hello'))
// true

const words = str.repeat(3)
console.log(words)
// hello worldhello worldhello world
```


## 3、解构

### 数组解构

```js
let [a, b, c] = [1, 2, 3]
console.log(a, b, c)
// 1 2 3
```

### 对象解构
```js
let { name, age } = { name: 'a', age: 10 }
console.log(name, age)
// a 10

// 如果变量名与属性名不一致
let { name: key, year = 1000, tel } = { name: 'a', age: 10 }
console.log(key, year, tel)
// a 1000 undefined
```
### 函数参数的解构
```js
function add([x, y = 1]){
  console.log(x + y)
}

add([1, 2])
// 3
```


### 遍历 Map
```js
const map = new Map()
map.set('first', 'hello')
map.set('second', 'world')

for (let [key, value] of map) {
  console.log(`${key} is ${value}`)
}
// first is hello
// second is world

for (let [key] of map) {
  console.log(`map has ${key}`)
}
// map has first
// map has second
for (let [, value] of map) {
  console.log(`map has value ${value}`)
}
// map has value hello
// map has value world
```


### 模块导入
```js
// test.js
export const a = 1
export const b = 2

// index.js
import { a, b } from './test'
console.log(a, b)
// 1 2
```


## 4、函数

### 函数参数默认值

```js
function add(x, y = 1) {
  return x + y
}
add(1)
// 2
```

### rest 参数

> 形式为`...变量名`

```js
function sum(...args) {
  let sum = 0

  for (let val of args) {
    sum += val
  }

  return sum
}
sum(1, 2, 3, 4, 5)
// 15
```


### 箭头函数

> 使用“箭头”（`=>`）定义函数

```js
const add = (num1, num2) => num1 + num2

// 与解构一起
const fullName = ({ first, last }) => `${first} ${last}`
fullName({
  first: 'han',
  last: 'meimei'
})
// han meimei

// 与rest一起
const numbers = (...nums) => nums
numbers(1, 2, 3, 4, 5)
// (5) [1, 2, 3, 4, 5]
```



## 5、数组

### 扩展运算符

好比 rest 参数的逆运算

```js
console.log(...[1, 2, 3])
// 1 2 3

const add = (num1, num2) => num1 + num2

const numbers = [4, 38]
add(...numbers)
// 42
```

使用扩展运算符（...）拷贝数组

```js
let items = [1, 2, 3]
const itemsCopy = [...items]
console.log(itemsCopy)
// [1, 2, 3]
```


### Array.from

用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象

```js
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}
let arr = Array.from(arrayLike)
// ['a', 'b', 'c']

const foo = document.querySelectorAll('.foo')
const nodes = Array.from(foo)
```


## 6、对象

### Object.assign

- 用于对象的合并，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性

> 浅拷贝

简单对象不受影响

```js
const obj1 = { a: 1 }
const obj2 = Object.assign({}, obj1)
obj1.a = 2
obj2.a
// 1
```


嵌套对象，混乱了

```js
const obj1 = {a: {b: 1}}
const obj2 = Object.assign({}, obj1)

obj1.a.b = 2
obj2.a.b
// 2

obj2.a.b = 10
obj1.a.b
// 10
```


解决坑点——嵌套对象的深拷贝

```js
const obj1 = {a: {b: 1}}
const obj2 = JSON.parse(JSON.stringify(obj1))

obj1.a.b = 2
obj2.a.b
// 1

obj2.a.b = 100
obj1.a.b
// 2
```


#### 用途

```js
// 添加属性
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y})
  }
}

// 克隆
const clone = (origin) => Object.assign({}, origin)

// 合并对象
const merge = (...sources) => Object.assign({}, ...sources)
```

### 新增API

> 供`for...of`循环使用

- **Object.keys()**：对象的键名
- **Object.values()**：对象的键值
- **Object.entries()**：对象的键值对数组

```js
let {keys, values, entries} = Object
let obj = { a: 1, b: 2, c: 3 }

for (let key of keys(obj)) {
  console.log(key)
}
// 'a', 'b', 'c'

for (let value of values(obj)) {
  console.log(value)
}
// 1, 2, 3

for (let [key, value] of entries(obj)) {
  console.log([key, value])
}
// ['a', 1], ['b', 2], ['c', 3]
```


## 7、Set

> 类似数组，但没有重复的值，通过`add`方法向 Set 结构加入成员

### API

- **add(value)**：添加某个值，返回 Set 结构本身。
- **delete(value)**：删除某个值，返回一个布尔值，表示删除是否成功。
- **has(value)**：返回一个布尔值，表示该值是否为`Set`的成员。
- **clear()**：清除所有成员，没有返回值。

```js
const s = new Set()
s.add(1).add(2).add(2)
// 注意2被加入了两次

console.log(s.size) // 2

console.log(s.has(1)) // true
console.log(s.has(2)) // true
console.log(s.has(3)) // false

s.delete(2)
console.log(s.has(2)) // false
```


### 数组去重

```js
// 去除数组的重复成员
const array = [1, 2, 3, 3, 4, 4, 5, 6]
const arr = [...new Set(array)]
console.log(arr)
// [1, 2, 3, 4, 5, 6]
```

### 其他应用

> 并集（Union）、交集（Intersect）和差集（Difference）

```js
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])

// 并集
let union = new Set([...a, ...b])
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)))
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)))
// Set {1}
```


## 8、Map

### API

- **set(key, value)**：设置键名`key`对应的键值为`value`并返回Map
- **get(key)**：读取`key`对应的键值，找不到返回`undefined`
- **has(key)**：返回一个布尔值，表示某个键是否在当前 Map 对象之中
- **delete(key)**：删除某个键，返回`true`。失败返回`false`
- **clear()**：清除所有成员，没有返回值

```js
const m = new Map()
const o = { p: 'Hello World' }

// “键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
m.set(o, 'content')
m.get(o)
// content
m.get('o')
// undefined
m.has(o)
// true
m.delete(o)
// true
m.has(o)
// false
```



## 9、Class

>  ES6 的`class`可以看作只是一个语法糖

### 取代 prototype

```js
// old
function Dog(name = 'dog') {
  this.name = name
}
Dog.prototype.say = function() {
  console.log(`我叫${this.name}`)
}
const ww = new Dog('旺财')
ww.name
// 旺财
ww.say()
// 我叫旺财

// new
class NewDog {
  constructor(name = 'dog') {
    this.name = name
  }
  say() {
    console.log(`我叫${this.name}`)
  }
}
const www = new NewDog('大黄')
www.name
// 大黄
www.say()
// 我叫大黄
```



### 使用`extends`实现继承

```js
class Animal {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log(`我叫${this.name}`)
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  type() {
    console.log('dog')
  }
}

const w = new Dog('小强', 10)
w.name
// 小强
w.age
// 10
w.say()
// 我叫小强
w.type()
// dog
```


### 静态方法

> 加上static关键字，表示不会被实例继承

```js
class Foo {
  static classMethod() {
    return 'hello'
  }
}

Foo.classMethod()
// 'hello'

var foo = new Foo()
foo.classMethod()
// TypeError: foo.classMethod is not a function

```

父类的静态方法，可以被子类继承

```js
class Father {
  static classMethod() {
    return 'hello'
  }
}

class Child extends Father {}
Child.classMethod()
// 'hello'
```




## 10、Module

### export

> 定义了模块的对外接口

```js
// test1.js
const a1 = 11
const b1 = 12
export { a1, b1 }

// test2.js
export const a2 = 21
export const b2 = 22

// test3.js
export default {
  a3: 31,
  b3: 32
}
```



### import

> 加载模块

```js
// index.js
import { a1, b1 } from './test1.mjs'
import { a2, b2 } from './test2.mjs'
import res from './test3.mjs'

console.log(a1, b1)
// 11 12
console.log(a2, b2)
// 21 22
const { a3, b3 } = res
console.log(a3, b3)
// 31 32
```



### 在Node环境使用Module

Node 要求 ES6 模块采用`.mjs`后缀文件名

目前，这项功能还在试验阶段。安装 Node v8.5.0 或以上版本，要用--experimental-modules参数才能打开该功能。

```bash
node --experimental-modules index.mjs
```


## 11、异步编程

### promise

```js
const promise = new Promise((resolve, reject) => {
  if (/* 异步操作成功 */){
    resolve(value)
  } else {
    reject(error)
  }
})

// then第二个参数接收错误的处理
promise.then((value) => {
  // success
}, (error) => {
  // failure
})

// 建议总是使用catch方法
promise.then((value) => {
  // success
}).catch((error) => {
  // error
})

// finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。ES2018 引入
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···})
```



### API

- **Promise.all**：全部返回成功才`resolve`
- **Promise.race**：比比谁跑的快

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 50, 'three')
})

Promise.race([promise1, promise2]).then((value) => {
  console.log(value)
  // Both resolve, but promise2 is faster
})
// two

Promise.race([promise1, promise2, promise3]).then((value) => {
  console.log(value)
}).catch(err => {
  console.log('err', err)
  // promise3 is faster
})
// err three

```



> *Axios*是一个基于*promise*的HTTP库

```js
// 一个使用axios获取接口数据的例子
getData () {
  this.$axios.get(this.$apis.iceandfire.books).then(res => {
    if (res) {
      this.$message.success('信息获取成功')
      this.books = res
    } else {
      this.$message.error('信息获取失败')
    }
  }).catch(() => {
      this.$message.error('信息获取失败')
  })
}
```



### async/await

> ES2017 标准引入了 async 函数

```js
// 可以用于二次封装axios，使用场景更简单
async get (url) {
  try {
    let res = await this.$axios.get(url)
    return new Promise((resolve, reject) => {
      if (res) {
        this.$message.success('信息获取成功')
        resolve(res)
      } else {
        this.$message.error('信息获取失败')
        reject(res)
      }
    })
  } catch (err) {
    this.$message.error('信息获取失败')
    console.log('err', err)
  }
}

async getData () {
  this.books = await this.get(this.$apis.iceandfire.books)
}
```



## 相关推荐

- 在线教程-[ECMAScript 6 入门](http://es6.ruanyifeng.com)

