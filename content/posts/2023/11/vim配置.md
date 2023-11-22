---
title: "Vim 配置"
date: 2023-11-20T14:30:00+08:00
lastmod: 2023-11-21T10:31:19+08:00
tags: ["Vim"]
draft: false
toc: true
---

## y/p 使用系统剪贴板 {#y-p-使用系统剪贴板}

在 vim 的配置文件(.vimrc/.ideaVimrc)中添加如下设置:

```shell
set clipboard^=unnamed,unnamedplus
```

其中:

-   unnamed 代表\*寄存器, unamedplus 代表+寄存器.


## 搜索高亮 {#搜索高亮}

```vimscript
set hlsearch
```

-   搜索完了之后会持续高亮. 要想清除单词的高亮状态, 需要输入 \`:noh\`


## 默认为 0 开头的为 8 进制, 改为 所有都是 10 进制: `set nrformats=` {#默认为-0-开头的为-8-进制-改为-所有都是-10-进制-set-nrformats}


## 搜索忽略大小写: `set ignorecase` {#搜索忽略大小写-set-ignorecase}
