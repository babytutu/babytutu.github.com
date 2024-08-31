# ssh异常处理

## 生成ssh key

```
ssh-keygen -t ed25519 -C "Gitee SSH Key"
Your identification has been saved in /Users/tutu/.ssh/id_ed25519
pbcopy < ~/.ssh/id_ed25519.pub

ssh -T git@gitee.com
```

## 常见问题处理

Bad configuration option: usekeychain

```
vim .ssh/config
```

加最前
```
IgnoreUnknown UseKeychain
```

从 OpenSSH 8.8起，默认不支持 ssh-rsa

```
vim /etc/ssh/ssh_config
```

加最后，注意缩进
```
    HostKeyAlgorithms +ssh-rsa,ssh-dss
    PubkeyAcceptedKeyTypes +ssh-rsa
```