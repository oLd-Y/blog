---
title: "windows aspell 安装"
date: 2023-11-15T16:19:00+08:00
lastmod: 2023-11-16T09:03:57+08:00
tags: ["aspell"]
draft: false
toc: true
---

## 安装 {#安装}


### 安装 msys2 {#安装-msys2}

在[msys2官网](https://www.msys2.org/)安装 msys2


### 依次执行如下命令： {#依次执行如下命令}

-   在 msys2 命令行中安装 aspell：

<!--listend-->

```shell
pacman -Ss aspell
```

-   安装词典。aspell 通过词典检查拼写：

<!--listend-->

```shell
pacman -S mingw64/mingw-w64-x86_64-aspell
pacman -S mingw64/mingw-w64-x86_64-aspell-en
```

-   找到 aspell.exe 的安装目录，一般在在你的 msys2 目录的 mingw64 的 bin 目录下(e.g. D:\Program\msys2\mingw64\bin)，并将 bin 目录的完整路径添加到 elisp 的配置文件中

<!--listend-->

```shell
(add-to-list 'exec-path "C:/msys64/mingw64/bin/")
(setq ispell-program-name "aspell")
(setq ispell-personal-dictionary "D:\Program\msys2\mingw64\lib\aspell-0.60/en_GBD")
```


## 快捷键 {#快捷键}

| shortcuts | function |
|-----------|----------|
| C-M-i     | 快捷修复 |
