# Python3

## 基础语法

### 保留字

顾名思义，这些名称已被使用，可查看保留字列表

```py
import keyword

print(keyword.kwlist)
```

```sh
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
```

### 注释

使用#注释

```py
# 这是单行注释
```

使用'''或者"""代表多行注释

```py
'''
我就看看不做事
'''
```

### 行与缩进

用缩进来代表代码块，如果缩进不对，程序报错

### 用户输入

input()

```py
x = input('请输入姓名')

print('输入内容：' + x)
```

### 同一行显示多条语句

用;分隔

### 代码组

像if、while、def和class这样的复合语句，首行以关键字开始，以冒号( : )结束

### 输出

print()，默认换行，不换行需要在变量末尾加上 end=""

```py
print('hello world!')
print('hello world!', end="")
print('你好')
```

```sh
hello world!
hello world!你好
```

### 导入模块

用 import 或者 from...import

导入模块`import somemodule`

导入模块中某个方法`from somemodule import somefunction`

```py
import sys
print ('path', sys.path)
```

```py
from sys import path
print ('path', path)
```

## 基本数据类型

变量无需定义，但需要在使用变量前使用=定义

多个变量赋值

```py
a = b = c = 1
print(a)
print(b)
print(c)
```

```py
a,b,c = 1,2,'test'
print(a)
print(b)
print(c)
```

### 标准数据类型

- 不可变数据（3 个）：Number（数字）、String（字符串）、Tuple（元组）
- 可变数据（3 个）：List（列表）、Dictionary（字典）、Set（集合）

#### Number 数字

支持 int、float、bool、complex（复数）

- type() 可以查询类型
- isinstance()判断类型

isinstance 和 type 的区别在于：

- type()不会认为子类是一种父类类型。
- isinstance()会认为子类是一种父类类型。

```sh
>>> a=1
>>> isinstance(a, int)
True
>>> type(a)
<class 'int'>
>>> isinstance(a, bool)
False
>>> class A:
...     pass
...
>>> class B(A):
...     pass
...
>>> isinstance(B(), B)
True
>>> isinstance(B(), A)
True
>>> type(B()) == B
True
>>> type(B()) == A
False
```

bool 是 int 的子类，True 和 False 可以和数字相加， True==1、False==0 会返回 True。

```py
>>> issubclass(bool, int)
True
>>> True + 1
2
```

del语句删除单个或多个对象

```py
>>> a = 1
>>> del a
>>> a
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'a' is not defined
```

数值运算

- +,-,*,**,/,//,%
- / 返回一个浮点数，// 返回一个整数

```py
>>> 1+1
2
>>> 2-1
1
>>> 2*3
6
>>> 2**3
8
>>> 4/3
1.3333333333333333
>>> 4//3
1
>>> 6%5
1
```
#### String（字符串）

用单引号 ' 或双引号 " 括起来，同时使用反斜杠 \ 转义特殊字符

字符串的截取：`变量[头下标:截取长度]`，第二个参数默认是字符串长度

```py
>>> a = 'hello,world'
>>> print(a[0:5])
hello
>>>
```

加号 + 是字符串的连接符， 星号 * 表示复制当前字符串，与之结合的数字为复制的次数

```py
>>> a = 'hello,world'
>>> b = 'test'
>>> print(a + ',' + b)
hello,world,test
```

使用反斜杠 \ 转义特殊字符，如果不想转义，在字符串前面添加一个r，表示原始字符串

```py
>>> print('ab\nc')
ab
c
>>> print(r'ab\nc')
ab\nc
```
#### List（列表）

- 列表是写在方括号 [] 之间、用逗号分隔开的元素列表
- 列表被截取后返回一个包含所需元素的新列表,变量[头下标:截取长度]
- 加号 + 是列表连接运算符，星号 * 是重复操作
- 列表中的元素是可以改变的

```py
>>> a = [1,2,3,4]
>>> print(a[0:2])
[1, 2]
>>> b = [5,6,7,8]
>>> print(a+b)
[1, 2, 3, 4, 5, 6, 7, 8]
>>> print(a*3)
[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4]
>>> a[1]=3
>>> print(a)
[1, 3, 3, 4]
```

#### Tuple（元组）

元组写在小括号 () 里，元素之间用逗号隔开

- 元组不可修改
- 可以被索引和切片
- 加号 + 是列表连接运算符，星号 * 是重复操作
- 构造包含 0 个或 1 个元素的元组比较特殊

```py
>>> a = (1,) # 1个元素需要加逗号
>>> a
(1,)
>>> b = ()
>>> b
()
>>> c = (1, 1.1, 'hello')
>>> c[0:1]
(1,)
>>> c[0:2]
(1, 1.1)
>>> c[0:3]
(1, 1.1, 'hello')
>>> c[1:1]
()
>>> c[1:2]
(1.1,)
>>> c[1:3]
(1.1, 'hello')
```

#### Set（集合）

- 进行成员关系测试和删除重复元素
- 大括号 { } 或者 set() 函数创建集合，注意：创建空集合必须用 set()
- 集合运算，- a 和 b 的差集，｜并集，& 交集，^ 不同时存在

```py
>>> a = set('abcda')
>>> a
{'d', 'b', 'c', 'a'}
>>> 'a' in a
True
>>> b = set('adfg')
>>> a - b
{'c', 'b'}
>>> a | b
{'b', 'a', 'g', 'c', 'f', 'd'}
>>> a & b
{'d', 'a'}
>>> a ^ b
{'b', 'g', 'c', 'f'}
```

#### Dictionary（字典）

- 字典用 { } 标识，它是一个无序的 键(key) : 值(value) 的集合
- 字典的关键字必须为不可变类型，且不能重复
- dict() 可以直接从键值对序列中构建字典

```py
>>> a = {'name':'jack','age':20}
>>> a['name']
'jack'
>>> a.keys()
dict_keys(['name', 'age'])
>>> a.values()
dict_values(['jack', 20])
>>> dict(a=1, b=2, c=3)
{'a': 1, 'b': 2, 'c': 3}
```

## 数据类型转换

- 隐式类型转换 - 自动完成
- 显式类型转换 - 需要使用类型函数来转换

### 显式类型转换

- int() 强制转换为整型
- float() 强制转换为浮点型
- str() 强制转换为字符串类型

```py
>>> int(1.5)
1
>>> int(1)
1
>>> float(1)
1.0
>>> float(1.44)
1.44
>>> str(1)
'1'
>>> str('a')
'a'
```

## 推导式

- 列表(list)推导式
- 字典(dict)推导式
- 集合(set)推导式
- 元组(tuple)推导式

```py
>>> a = ['a','b']
>>> b = [x*2 for x in a]
>>> b
['aa', 'bb']
>>> c = {key:len(key) for key in b}
>>> c
{'aa': 2, 'bb': 2}
>>> d = {i**2 for i in [1,2,3]}
>>> d
{1, 4, 9}
>>> a = (x for x in range(10))
>>> a
<generator object <genexpr> at 0x1078a8eb0>
>>> tuple(a)
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```

## 流程控制

### if

if可以有多个elif（else if的缩写）只能有1个else

```py
if x < 0:
  x = 0
elif x < 10:
  x = 2 * x
else:
  x = 100
```

### for

```py
arr = [1,2,3]
for x in arr:
  print(x)
```

```sh
1
2
3
```

### range

range()用于数值序列

- range(stop)
- range(start, stop[, step])

list()用于生成数组

```py
>>> list(range(10))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> list(range(1, 11))
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
>>> list(range(0, 30, 5))
[0, 5, 10, 15, 20, 25]
```

### break 和 continue

break跳出循环

```py
for x in range(10):
  if x % 2:
    print('no ok')
    break
  else:
    print('ok')
```

continue就是继续

```py
for x in range(10):
  if x % 2:
    print('ok')
    continue
  print(x)
```

## 函数定义

def 关键词开头，后接函数标识符名称和圆括号 ()

```py
>>> def hello():
...     print('hi')
...
>>> hello()
hi
```

### 参数

#### 必需参数

```py
>>> def printme(str):
...     print(str)
...
>>> printme()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: printme() missing 1 required positional argument: 'str'
```

#### 关键字参数

传参数顺序可以变化

```py
>>> def printme(x, y):
...     print(x+y)
...
>>> printme(y='a',x='b')
ba
```


#### 默认参数

如果没有传递参数，则会使用默认参数

```py
>>> def hi(str='hi'):
...     print(str)
...
>>> hi()
hi
```

#### 不定长参数

星号 * 的参数会以元组(tuple)的形式导入，存放所有未命名的变量参数

```py
>>> def printinfo(arg, *args):
...     print(arg)
...     for x in args:
...             print(x)
...
>>> printinfo('a', 'b', 'c')
a
b
c
```

两个星号 ** 的参数会以字典的形式导入

```py
>>> def star(x,**y):
...     print(x)
...     print(y)
...
>>> star(1, a=2, b=3)
1
{'a': 2, 'b': 3}
```

### 匿名函数

lambda 来创建匿名函数

```py
>>> sun = lambda x,y:x+y
>>> sun(10,20)
30
```

### return 语句

```py
>>> def x(a,b):
...     return a+b
...
>>> b = x('a', 'b')
>>> b
'ab'
```

### 强制位置参数

/ 用来指明函数形参必须使用指定位置参数,星号 * 的参数必须为关键字形参:

```py
>>> def abc(a,b,/,c,d,*,e):
...     print(a+b+c)
...
>>> abc(1,2,3,d=4,e=5)
6
```

## 正则表达式

re 模块，它提供 Perl 风格的正则表达式模式

### re.match函数

re.match 尝试从字符串的起始位置匹配一个模式，如果不是起始位置匹配成功的话，match()就返回None。

```py
import re

>>> res = re.match('WWW', 'www.baidu.com', re.I).span()
>>> res
(0, 3)
>>> a = re.match('x', 'abc')
>>> print(a)
None
```

### re.search方法

re.search 扫描整个字符串并返回第一个成功的匹配。

re.match与re.search的区别,re.match 只匹配字符串的开始，如果字符串开始不符合正则表达式，则匹配失败，函数返回 None，而 re.search 匹配整个字符串，直到找到一个匹配。

```py
>>> a = re.search('x', 'abc')
>>> print(a)
None
>>> res = re.search('com', 'www.baidu.com', re.I)
>>> print(res)
<re.Match object; span=(10, 13), match='com'>
>>> res = re.match('com', 'www.baidu.com', re.I)
>>> print(res)
None
```

### 检索和替换

re.sub用于替换字符串中的匹配项。

```py
>>> phone='电话号码：123456789'
>>> print(re.sub(r'\d', '*', phone))
电话号码：*********
```

### compile 函数

编译正则表达式，生成一个正则表达式（ Pattern ）对象，供 match() 和 search() 这两个函数使用

### findall

在字符串中找到正则表达式所匹配的所有子串，并返回一个列表

```py
>>> re.compile('x').findall('xyxy')
['x', 'x']
```

### finditer

和 findall 类似，在字符串中找到正则表达式所匹配的所有子串，并把它们作为一个迭代器返回。

```py
>>> it = re.finditer('x', 'xyzxabcx')
>>> for x in it:
...     print(x.group())
...
x
x
x
```

### re.split

split 方法按照能够匹配的子串将字符串分割后返回列表

```py
>>> it = re.split('x', 'xyzxabcx')
>>> it
['', 'yz', 'abc', '']
```
