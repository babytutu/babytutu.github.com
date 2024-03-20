# Shell Script

Shell 脚本（shell script），是一种为 shell 编写的脚本程序。

## 第一个 shell 脚本

test.sh

```sh
#!/bin/bash
echo "Hello World !"
```

- 定义脚本类型 #!/bin/bash
- 输出信息 echo

在终端文件同级目录运行文件

```bash
sh test.sh
```

终端输出

```
Hello World !
```

## Shell 变量

### 定义变量

注意，变量名和等号之间不能有空格，这可能和你熟悉的所有编程语言都不一样。同时，变量名的命名须遵循如下规则：

- 命名只能使用英文字母，数字和下划线，首个字符不能以数字开头。
- 中间不能有空格，可以使用下划线 \_。
- 不能使用标点符号。
- 不能使用 bash 里的关键字（可用 help 命令查看保留关键字）。

```sh
hello="Hello World !"
```

### 使用变量

使用一个定义过的变量，只要在变量名前面加美元符号即可

变量名外面的花括号是可选的，加不加都行，加花括号是为了帮助解释器识别变量的边界

```sh
hello="Hello World !"

echo $hello
echo ${hello}xxx
```

### 只读变量

使用 readonly 命令可以将变量定义为只读变量，只读变量的值不能被改变

```sh
#!/bin/bash

myName="abc"
readonly myName
myName="JIM"
```

运行脚本会提示错误

```
test.sh: line 11: myName: readonly variable
```

### 删除变量

使用 unset 命令可以删除变量

```sh
#!/bin/bash

myName="abc"
echo "myName ${myName} ."
echo "删除变量"
unset myName
echo "myName ${myName} ."
```

运行脚本发现变量已经没有了

```
myName abc .
删除变量
myName  .
```

### Shell 字符串

单引号

- 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的

双引号

- 双引号里可以有变量
- 双引号里可以出现转义字符

```sh
#!/bin/bash

str='abc'
echo $str

str1="双引号$str \n"
echo $str1
```

#### 获取字符串长度

```sh
#!/bin/bash

string="abcd"
echo ${#string}   # 输出 4
```

### Shell 数组

#### 定义数组

在 Shell 中，用括号来表示数组，数组元素用"空格"符号分割开。定义数组的一般形式为：

```sh
#!/bin/bash

arr=(1 2 3)
```

#### 读取数组

数组元素的下标由 0 开始编号，通过下标读取，@可以获取全部

```sh
arr=(1 2 3)
echo "arr的第二位:${arr[1]}"
echo "arr:${arr[@]}"
```

结果输出

```
arr的第二位:2
arr:1 2 3
```

## Shell 传递参数

在执行 Shell 脚本时，向脚本传递参数，脚本内获取参数的格式为：$n。n 代表一个数字，1 为执行脚本的第一个参数，2 为执行脚本的第二个参数

```sh
#!/bin/bash

echo "Shell 传递参数实例！"
echo "执行的文件名：$0"
echo "第一个参数为：$1"
echo "第二个参数为：$2"
echo "第三个参数为：$3"
```

执行脚本

```bash
sh test.sh a b c
```

输出结果

```
Shell 传递参数实例！
执行的文件名：test.sh
第一个参数为：a
第二个参数为：b
第三个参数为：c
```

### 特殊字符

| 参数 | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| $#   | 传递到脚本的参数个数                                         |
| $\*  | 以一个单字符串显示所有向脚本传递的参数                       |
| $@   | 与$\*相同，但是使用时加引号，并在引号中返回每个参数          |
| $?   | 显示最后命令的退出状态。0 表示没有错误，其他任何值表明有错误 |

```sh
#!/bin/bash

echo "Shell 传递参数实例！"
echo "第一个参数为：$1"

echo "参数个数为：$#"
echo "传递的参数作为一个字符串显示：$*"
echo "退出状态 $?"
```

输出结果

```
Shell 传递参数实例！
第一个参数为：a
参数个数为：3
传递的参数作为一个字符串显示：a b c
退出状态 0
```

## Shell 基本运算符

Shell 和其他编程语言一样，支持多种运算符，包括：

- 算术运算符
- 关系运算符
- 布尔运算符
- 字符串运算符
- 文件测试运算符

原生 bash 不支持简单的数学运算，但是可以通过其他命令来实现，例如 awk 和 expr，expr 最常用。

expr 是一款表达式计算工具，使用它能完成表达式的求值操作。

例如，两个数相加(注意使用的是反引号 ` 而不是单引号 ')：

- 表达式和运算符之间要有空格，例如 2+2 是不对的，必须写成 2 + 2
- 完整的表达式要被 ` ` 包含

```shell
#!/bin/bash

val=`expr 2 + 2`
echo "两数之和为 : $val"
```

输出结果

```
两数之和为 : 4
```

### 算术运算符

下表列出了常用的算术运算符，假定变量 a 为 10，变量 b 为 20：

| 运算符 | 说明                                          | 举例                         |
| :----- | :-------------------------------------------- | :--------------------------- |
| +      | 加法                                          | `expr $a + $b` 结果为 30。   |
| -      | 减法                                          | `expr $a - $b` 结果为 -10。  |
| \*     | 乘法                                          | `expr $a \* $b` 结果为 200。 |
| /      | 除法                                          | `expr $b / $a` 结果为 2。    |
| %      | 取余                                          | `expr $b % $a` 结果为 0。    |
| =      | 赋值                                          | a=$b 把变量 b 的值赋给 a。   |
| ==     | 相等。用于比较两个数字，相同则返回 true。     | [ $a == $b ] 返回 false。    |
| !=     | 不相等。用于比较两个数字，不相同则返回 true。 | [ $a != $b ] 返回 true。     |

### 关系运算符

关系运算符只支持数字，不支持字符串，除非字符串的值是数字。

下表列出了常用的关系运算符，假定变量 a 为 10，变量 b 为 20：

| 运算符 | 说明                                                  | 举例                       |
| :----- | :---------------------------------------------------- | :------------------------- |
| -eq    | 检测两个数是否相等，相等返回 true。                   | [ $a -eq $b ] 返回 false。 |
| -ne    | 检测两个数是否不相等，不相等返回 true。               | [ $a -ne $b ] 返回 true。  |
| -gt    | 检测左边的数是否大于右边的，如果是，则返回 true。     | [ $a -gt $b ] 返回 false。 |
| -lt    | 检测左边的数是否小于右边的，如果是，则返回 true。     | [ $a -lt $b ] 返回 true。  |
| -ge    | 检测左边的数是否大于等于右边的，如果是，则返回 true。 | [ $a -ge $b ] 返回 false。 |
| -le    | 检测左边的数是否小于等于右边的，如果是，则返回 true。 | [ $a -le $b ] 返回 true。  |

### 布尔运算符

假定变量 a 为 10，变量 b 为 20

| 运算符 | 说明                                                | 举例                                     |
| :----- | :-------------------------------------------------- | :--------------------------------------- |
| !      | 非运算，表达式为 true 则返回 false，否则返回 true。 | [ ! false ] 返回 true。                  |
| -o     | 或运算，有一个表达式为 true 则返回 true。           | [ $a -lt 20 -o $b -gt 100 ] 返回 true。  |
| -a     | 与运算，两个表达式都为 true 才返回 true。           | [ $a -lt 20 -a $b -gt 100 ] 返回 false。 |

### 逻辑运算符

假定变量 a 为 10，变量 b 为 20

| 运算符 | 说明       | 举例                                     |
| :----- | :--------- | :--------------------------------------- |
| &&     | 逻辑的 AND | [[$a -lt 100 && $b -gt 100]] 返回 false  |
| \|\|   | 逻辑的 OR  | [[$a -lt 100 \|\| $b -gt 100]] 返回 true |

### 字符串运算符

假定变量 a 为 "abc"，变量 b 为 "efg"

| 运算符 | 说明                                         | 举例                     |
| :----- | :------------------------------------------- | :----------------------- |
| =      | 检测两个字符串是否相等，相等返回 true。      | [ $a = $b ] 返回 false。 |
| !=     | 检测两个字符串是否不相等，不相等返回 true。  | [ $a != $b ] 返回 true。 |
| -z     | 检测字符串长度是否为 0，为 0 返回 true。     | [ -z $a ] 返回 false。   |
| -n     | 检测字符串长度是否不为 0，不为 0 返回 true。 | [ -n "$a" ] 返回 true。  |
| $      | 检测字符串是否不为空，不为空返回 true。      | [ $a ] 返回 true。       |

### 文件测试运算符

文件测试运算符用于检测 Unix 文件的各种属性。

| 操作符  | 说明                                                                        | 举例                      |
| :------ | :-------------------------------------------------------------------------- | :------------------------ |
| -b file | 检测文件是否是块设备文件，如果是，则返回 true。                             | [ -b $file ] 返回 false。 |
| -c file | 检测文件是否是字符设备文件，如果是，则返回 true。                           | [ -c $file ] 返回 false。 |
| -d file | 检测文件是否是目录，如果是，则返回 true。                                   | [ -d $file ] 返回 false。 |
| -f file | 检测文件是否是普通文件（既不是目录，也不是设备文件），如果是，则返回 true。 | [ -f $file ] 返回 true。  |
| -g file | 检测文件是否设置了 SGID 位，如果是，则返回 true。                           | [ -g $file ] 返回 false。 |
| -k file | 检测文件是否设置了粘着位(Sticky Bit)，如果是，则返回 true。                 | [ -k $file ] 返回 false。 |
| -p file | 检测文件是否是有名管道，如果是，则返回 true。                               | [ -p $file ] 返回 false。 |
| -u file | 检测文件是否设置了 SUID 位，如果是，则返回 true。                           | [ -u $file ] 返回 false。 |
| -r file | 检测文件是否可读，如果是，则返回 true。                                     | [ -r $file ] 返回 true。  |
| -w file | 检测文件是否可写，如果是，则返回 true。                                     | [ -w $file ] 返回 true。  |
| -x file | 检测文件是否可执行，如果是，则返回 true。                                   | [ -x $file ] 返回 true。  |
| -s file | 检测文件是否为空（文件大小是否大于 0），不为空返回 true。                   | [ -s $file ] 返回 true。  |
| -e file | 检测文件（包括目录）是否存在，如果是，则返回 true。                         | [ -e $file ] 返回 true。  |

## Shell echo 命令

### 显示普通字符串

```shell
echo "hello"
```

### 显示转义字符

```shell
echo "\"It is a test\""
```

### 显示变量

read 命令从标准输入中读取一行,并把输入行的每个字段的值指定给 shell 变量

```shell
#! /bin/bash
read name
echo $name
```

### 显示换行

```shell
#! /bin/bash

echo "Hello /n"
echo "end"
```

### 显示不换行

```shell
#! /bin/bash

echo "Hello /c"
echo "world"
```

### 显示结果定向至文件

echo "It is a test" > myfile

### 显示命令执行结果

echo `date`

## Shell printf 命令

printf 使用引用文本或空格分隔的参数

%s %c %d %f 都是格式替代符，％s 输出一个字符串，％d 整型输出，％c 输出一个字符，％f 输出实数，以小数形式输出。

```shell
#!/bin/bash

printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg
printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234
printf "%-10s %-8s %-4.2f\n" 杨过 男 48.6543
printf "%-10s %-8s %-4.2f\n" 郭芙 女 47.9876
```

运行结果

```
姓名     性别   体重kg
郭靖     男      66.1234
杨过     男      48.6543
郭芙     女      47.9876
```

## Shell 流程控制

### if else

```shell
#! /bin/bash

a=10
b=20
if [ $a == $b ]
then
  echo "a 等于 b"
elif [ $a -gt $b ]
then
  echo "a 大于 b"
else
  echo "a 小于 b"
fi

# 单行模式
if [ $a == $b ]; then echo "a 等于 b"; elif [ $a -gt $b ]; then echo "a 大于 b"; else echo "a 小于 b"; fi
```

### for 循环

```shell
#! /bin/bash

# 顺序输出当前列表中的数字
for loop in 1 2 3 4 5
do
  echo "The value is: $loop"
done

# 顺序输出字符串中的字符
for str in This is a string
do
  echo $str
done
```

### while 语句

while 循环用于不断执行一系列命令

```shell
#!/bin/bash
int=1
# 当int小于等于5时，int加1，大于5时停止循环
while(( $int<=5 ))
do
  echo $int
  # Bash let 命令，它用于执行一个或多个表达式
  let "int++"
done
```

### until 循环

until 循环执行一系列命令直至条件为 true 时停止。

```shell
#!/bin/bash

a=0

until [ ! $a -lt 10 ]
do
  echo $a
  a=`expr $a + 1`
done
```

### case ... esac

case ... esac 为多选择语句，与其他语言中的 switch ... case 语句类似，是一种多分支选择结构

```shell
#! /bin/bash

echo '输入 1 到 4 之间的数字:'
echo '你输入的数字为:'
read aNum
case $aNum in
  1) echo '你选择了 1'
  ;;
  2) echo '你选择了 2'
  ;;
  3) echo '你选择了 3'
  ;;
  4) echo '你选择了 4'
  ;;
  *) echo '你没有输入 1 到 4 之间的数字'
  ;;
esac
```

### 跳出循环

#### break 命令

break 命令允许跳出所有循环（终止执行后面的所有循环）

```shell
#! /bin/bash

while :
do
  echo "输入 1 到 5 之间的数字:"
  read aNum
  case $aNum in
    1|2|3|4|5) echo "你输入的数字为 $aNum!"
    ;;
    *) echo "你输入的数字不是 1 到 5 之间的! 游戏结束"
        break
    ;;
  esac
done
```

#### continue

continue 命令与 break 命令类似，但是只跳出当前循环

```shell
#! /bin/bash

while :
do
  echo "输入 1 到 5 之间的数字:"
  read aNum
  case $aNum in
    1|2|3|4|5) echo "你输入的数字为 $aNum!"
      echo "游戏结束"
      break
    ;;
    *) echo "你输入的数字不是 1 到 5 之间的!游戏继续"
      continue
    ;;
  esac
done

```

## Shell 函数

- 可以带 function fun() 定义，也可以直接 fun() 定义,不带任何参数
- 参数返回，可以显示加：return 返回，如果不加，将以最后一条命令运行结果，作为返回值。 return 后跟数值 n(0-255)

### 函数参数

通过 $n 的形式来获取参数的值

```shell
#! /bin/bash

demofun () {
  echo This is a demofun
  return 3
}

echo 函数开始
demofun
echo "函数结束 $?"

funWithParam(){
  echo "第一个参数为 $1 !"
  echo "第二个参数为 $2 !"
  echo "第十个参数为 $10 !"
  echo "第十个参数为 ${10} !"
  echo "第十一个参数为 ${11} !"
  echo "参数总数有 $# 个!"
  echo "作为一个字符串输出所有参数 $* !"
}
funWithParam 1 2 3 4 5 6 7 8 9 34 73

```

## Shell 输入/输出重定向

| 命令            | 说明                                               |
| :-------------- | :------------------------------------------------- |
| command > file  | 将输出重定向到 file。                              |
| command < file  | 将输入重定向到 file。                              |
| command >> file | 将输出以追加的方式重定向到 file。                  |
| n > file        | 将文件描述符为 n 的文件重定向到 file。             |
| n >> file       | 将文件描述符为 n 的文件以追加的方式重定向到 file。 |
| n >& m          | 将输出文件 m 和 n 合并。                           |
| n <& m          | 将输入文件 m 和 n 合并。                           |
| << tag          | 将开始标记 tag 和结束标记 tag 之间的内容作为输入。 |

```shell
#! /bin/bash

echo "Hello World" > demo.md
```

运行脚本会生成`demo.md`文件

使用命令`wc -l`获取文件行数

```shell
#! /bin/bash

wc -l < demo.md
```

### /dev/null 文件

如果希望执行某个命令，但又不希望在屏幕上显示输出结果

```shell
command > /dev/null
```

## Shell 文件包含

. filename # 注意点号(.)和文件名中间有一空格

例子

test1.sh

```shell
#! /bin/bash

name="abc"
```

test2.sh

```shell
#! /bin/bash
. test1.sh

echo "name $name"
```

运行 test2.sh,输出 name abc

## Shell 选择

```shell
#! /bin/bash

echo "what is your favorite color :"
select color in "red" "blue" "green" "white" "black"
do
  echo "you choose is $color"
  break
done
```

执行后，输入 5，会打印 black 会退出

```
what is your favorite color :
1) red
2) blue
3) green
4) white
5) black
#? 5
you choose is black
```

## Shell read

通过用户输入设置变量，可设置-s 隐藏输入内容，-p 来设置提示语

```bash
read -sp "请输入用户密码:" pwd

echo "\n输入的密码是：$pwd"
```

假设输入 1234，输入时不会展示文字，但内部变量已赋值

```
请输入用户密码:
输入的密码是：1234
```

## Shell 彩色文字

[terminals_compatibility](https://misc.flogisoft.com/bash/tip_colors_and_formatting#terminals_compatibility)

```bash
\033[设置;文字颜色;背景颜色m
```

- 16 色设置:0Normal,1Bold,2dim,4Underlined,7Reverse
- 256 色设置:38Normal,48Reverse

```bash
# 定义颜色
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 使用颜色变量
echo "${RED}这是红色文本${NC}"
echo "${GREEN}这是绿色文本${NC}"
echo "${YELLOW}这是黄色文本${NC}"
echo "${BLUE}这是蓝色文本${NC}"

# 直接使用
echo "\033[1;31;107m 加粗红字白底 \033[0m"
echo "\033[4;31;42m 下划线红字绿底 \033[0m"
```

图谱

```bash
echo "16 color"
# 背景颜色
for clbg in 49 {40..47} {100..107} ; do
  # 文字颜色
  for clfg in 39 {30..37} {90..97} ; do
    for attr in 1 2 4 7 ; do
      # 结果输出
      printf "\033[${attr};${clfg};${clbg}m ^[${attr};${clfg};${clbg}m \033[0m"
    done
    echo #Newline
  done
done

echo "256 color"
for type in 38 48; do
  for color in {0..255}; do
    printf "\e[%s;5;%sm %s;5;%3s  \e[0m" $type $color $type $color
    if [ $((($color + 1) % 6)) == 4 ]
    then
      echo
    fi
  done
  echo
done
```
