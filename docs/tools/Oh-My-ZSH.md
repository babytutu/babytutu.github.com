# Oh My ZSH!

> 超级终端

### 安装

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

设置为默认终端

```bash
chsh -s $(which zsh)
```

### 定制化zsh配置

[配置文档](https://github.com/ohmyzsh/ohmyzsh/wiki/Settings)

```bash
nano ~/.zshrc
```

### 修改主题

[主题列表](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

```bash
ZSH_THEME="robbyrussell"
```

### 定义别名

> `alias`是别名，表示你输入'pz'就会执行等号后面的命令

```bash
alias pz="nano ~/.zshrc"
alias ns="npm start"
```

ctrl + o 是保存，ctrl + x 是退出，修改配置后需要执行命令重启，可以通过'source ~/.zshrc'或者'. ~/.zshrc'立刻加载修改后的设置，使之生效，或者重新打开终端（原理是，每次新开终端，都会读取.zshrc文件）

> 默认的终端也可以定制,配置方式一致

```bash
nano ~/.bashrc
```

#### 实用alias

```bash
alias pz="nano ~/.zshrc"
alias cq=". ~/.zshrc"
alias ip="ipconfig getifaddr en1"
alias ns="npm start"
alias ni="npm i"
```
