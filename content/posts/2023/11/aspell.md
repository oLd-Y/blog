---
title: "windows aspell 安装"
date: 2023-11-15T16:19:00+08:00
lastmod: 2023-11-15T16:27:27+08:00
tags: ["aspell"]
draft: false
toc: true
---

## 安装 {#安装}


### 安装 msys2 {#安装-msys2}

在[msys2官网](https://www.msys2.org/)安装 msys2


### 依次执行如下命令： {#依次执行如下命令}

```shell
In MingW64 terminal search aspell:

    pacman -Ss aspell

Installing aspell and dictionary you need :

    pacman -S mingw64/mingw-w64-x86_64-aspell
    pacman -S mingw64/mingw-w64-x86_64-aspell-en

Find aspell.exe location with which aspell, e.g. C:\msys64\mingw64\bin

Update in dotfile. Especially in Spacemacs:

    (add-to-list 'exec-path "C:/msys64/mingw64/bin/")
    (setq ispell-program-name "aspell")
    (setq ispell-personal-dictionary "c:/msys64/mingw64/lib/aspell-0.60/en_GB")
```


### 将 {#将}


## 快捷键 {#快捷键}

| shortcuts | function |
|-----------|----------|
| C-M-i     | 快捷修复 |
