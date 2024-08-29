# Awesome Soft for macOS

| Name | Desc | Links |
| -------- | ------------------ | ----------------------------------- |
| Visual Studio Code | Coding Editor |https://code.visualstudio.com/|
| Oh-My-Zsh | Terminal | http://ohmyz.sh/  |
| Node.js | JavaScript Runtime Built | https://nodejs.org/en/|
| Git | Version Control System | https://git-scm.com/|
| Sourcetree | Git GUI | https://www.sourcetreeapp.com/ |
| Charles | Official Website Debugging Proxy | https://www.charlesproxy.com/ |
| Rectangle | Move and resize windows | https://rectangleapp.com |
| Typora | Markdown Editor | https://www.typora.io |
| Dash | API Documentation Browser | https://kapeli.com/dash |
|AppCleaner|Uninstall Apps|https://freemacsoft.net/appcleaner/|

## Key

### Charles

Charles报错Failed to install helper CFErrorDomainLaunchd error 9解决方案

1. 输入 launchctl print-disabled system 回车后查看com.xk72.charles.ProxyHelper，如果是true，执行2
2. 输入 sudo launchctl enable system/com.xk72.charles.ProxyHelper，按回车，然后正确输入系统密码即可，执行3
3. 重启Charles

```
Registered Name:https://zhile.io
License Key: 48891cf209c6d32bf4
```

### Axure RP 9

Turn your Internet connection OFF, install, register. Turn Internet connection on again when registration is finished.

Block outgoing connections with firewall

```
Pro edition:

Licensee: speedzodiac
Key: aPPDTWFbeBCDl3pdgeOQB15Z4CUGy3JDsQPktJ+/dVQRNmwTmsJZEDlslIyTVJ03

Team edition:

Licensee: speedzodiac
Key: o6hDTBsTUOCg4+iSPfjL8QkM73kG+oHYiXWjEEyNGJ6JdPimk7c6Sy9fQDm8KXNc

Enterprise edition:

Licensee: speedzodiac
Key: UpzmG6yPo/QyZbu4vhiNe5+Oy9U57YGqW6hglQC1B2uF1eHScD70uAHbZ+Gza0tf
```


## Office Download URL

https://learn.microsoft.com/zh-cn/officeupdates/release-notes-office-for-mac

### Office 2021

https://officecdn.microsoft.com/pr/C1297A47-86C4-4C1F-97FA-950631F94777/MacAutoupdate/Microsoft_365_and_Office_16.88.24081116_Installer.pkg

### Office_License_Removal

https://officecdn-microsoft-com.akamaized.net/pr/C1297A47-86C4-4C1F-97FA-950631F94777/MacAutoupdate/Microsoft_Office_License_Removal_2.7.pkg

## Homebrew

```bash
sh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```
### Install App

```bash
brew install tree
```

### Error

```bash
Error: The following directories are not writable by your user:
/usr/local/share/doc
/usr/local/share/man
/usr/local/share/man/man1
```

Fix it

```bash
sudo chown -R $(whoami) /usr/local/share
```

## oh-my-zsh

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

mirror in mainland China

```bash
sh -c "$(curl -fsSL https://gitee.com/mcornella/ohmyzsh/raw/master/tools/install.sh)"
```

### Error

```bash
Insecure completion-dependent directories detected:
/usr/local/share/zsh
/usr/local/share/zsh/site-functions
```

To fix your permissions，set the variable ZSH_DISABLE_COMPFIX to "true"

```bash
nano ~/.zshrc
```

Add frist line

```bash
ZSH_DISABLE_COMPFIX="true"
```

Reload Setting

```bash
source .zshrc
```
