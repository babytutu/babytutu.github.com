# Oh My ZSH!

> 超级终端

## 安装

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

mirror in mainland China

```bash
sh -c "$(curl -fsSL https://gitee.com/mcornella/ohmyzsh/raw/master/tools/install.sh)"
```


设置为默认终端

```bash
chsh -s $(which zsh)
```

### 解决权限错误

```
Insecure completion-dependent directories detected:
/usr/local/share/zsh
/usr/local/share/zsh/site-functions
```

修改配置

```bash
nano ~/.zshrc
```

在配置文件第一行加上

```
ZSH_DISABLE_COMPFIX="true"
```

保存配置并重新加载配置

```bash
source .zshrc
```

## 定制化zsh配置

[配置文档](https://github.com/ohmyzsh/ohmyzsh/wiki/Settings)

```bash
nano ~/.zshrc
```

## 修改主题

[主题列表](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

```bash
ZSH_THEME="pygmalion"
```

## 定义别名

> `alias`是别名，表示你输入'pz'就会执行等号后面的命令

```bash
alias pz="nano ~/.zshrc"
alias ns="npm start"
```

ctrl + x 退出，如果内容有修改，会提示是否保存修改（Y/N），修改配置后需要执行命令重启，可以通过'source ~/.zshrc'或者'. ~/.zshrc'立刻加载修改后的设置，使之生效，或者重新打开终端（原理是，每次新开终端，都会读取.zshrc文件）

> 默认的终端也可以定制,配置方式一致

```bash
nano ~/.bashrc
```

### 实用alias

```bash
alias pz="nano ~/.zshrc"
alias cq=". ~/.zshrc"
alias ip="ipconfig getifaddr en1"
alias ns="npm start"
alias ni="npm i"
alias sshkey="pbcopy < ~/.ssh/id_rsa.pub"
alias sall="defaults write com.apple.finder AppleShowAllFiles YES"
alias noall="defaults write com.apple.finder AppleShowAllFiles NO"
```

## 解决更新异常

进入目录
```sh
cd $ZSH
```

修改远程仓库的地址
```sh
git remote set-url origin "https://github.com/ohmyzsh/ohmyzsh.git"
```

升级
```sh
omz update
```
