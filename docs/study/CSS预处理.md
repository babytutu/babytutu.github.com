# CSS预处理 - Stylus

EXPRESSIVE, DYNAMIC, ROBUST CSS

[Stylus官方网站](https://stylus-lang.com/)

[vscode插件](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)

## 选择器

### 缩进

括号，冒号，分号，逗号都可选

```css
textarea, input {
  border: 1px solid #eee;
}
```

```stylus
textarea
input
  border 1px solid #eee
```

### 父级引用

& 符号代表父级选择器

```css
textarea, input {
  border: 1px solid #eee;
}

textarea:hover, input:hover {
  border-color: #000
}

```

```stylus
textarea
input
  border 1px solid #eee
  &:hover
    border-color #000
```

## 变量

```stylus
$font-size = 14px

body
  font $font-size Arial, sans-serif
```

### 属性查找

通过前置 @ 字符在属性名前来访问该属性名对应的值

```stylus
#logo
  width 150px
  height 80px
  margin-left -(@width / 2)
  margin-top -(@height / 2)
```

## 函数

### 返回值

```stylus
add(a, b)
  a + b

body
  padding add(10px, 5)
```

```css
body {
  padding: 15px;
}
```

### 默认参数

```stylus
add(a, b = a)
  a + b

body
  padding add(10px)
```

```css
body {
  padding: 20px;
}
```

### 参数

`arguments`包含了传递过来的所有参数

```stylus
sum()
  n = 0
  for num in arguments
    n = n + num

sum(1,2,3,4,5)
// => 15
```

## @IMPORT

引用文件

```stylus
@import 'reset.css'
@import 'bar.styl'
```
