# 自动生成目录结构

使用tree命令可以自动生成目录结构

```bash
tree
```

## 安装

Windows可以直接使用，cmd到目录执行即可

Mac需要安装tree命令

```bash
brew install tree
```

## 常用参数

### 排除目录

排除依赖包目录

```bash
tree -I node_modules
```

### 限制目录层级

只生成2级目录结构

```bash
tree -L 2
```

### 只显示目录

```bash
tree -d
```

### 生成文件

把tree的结果写入到一个md文件

```bash
tree -I node_modules -d > text.md
```

text.md

```markdown
.
└── docs
    ├── components
    ├── es6tutorial
    │   ├── docs
    │   └── images
    ├── mac
    ├── study
    └── tools

8 directories
```


### 帮助

```bash
tree -help
```