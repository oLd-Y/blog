---
title: lazyvim 中的 C 及 C++ 开发环境
categories: 计算机
tags:
  - lsp
  - lazyvim
date: 2024-12-03
description: 
image: 
weight: 1
draft: false
lastmod: 2024-12-04T08:37:28+08:00
---
### LSP（Clangd）配置

在 `:LazyExtras` 中打开 `langd.clangd` 即可。此时关闭项目，任意打开一个项目，发现还是会有很多不应该的报错。这是因为缺少项目中缺少一个 `compile_commands.json` 帮助 lsp server 理解代码。

lsp 的原理是将当前代码发给正在运行的 lsp server，lsp server 解析之后将分析结果返回，再展示到编辑器中。对于有包管理器的一些语言，可以借助其包管理器进行分析；而对于 C、C++这种比较古老的语言，没有包管理器，就需要用额外的文件来展示结构。这个文件就是 `compile_commands.json`。

理论上直接把你的项目结构按照一定的格式写入该文件然后放在项目的根目录即可。但很显然，有工具可以帮助我们完成这件事，即 [bear](https://github.com/rizsotto/Bear) 或者 [compiledb](https://github.com/nickdiego/compiledb)。bear 是用 C++ 编写的，compiledb 是用 Python 编写的。

由于 bear 只能在 linux 平台上使用，这里我们选择跨平台的 compiledb。

首先确保系统中安装了 python。执行 `pip install compiledb` 安装 compiledb。ubuntu 系统如果没有 pip 可以先用 `sudo apt install python3-pip` 安装一下 pip（pip3）。

如果安装完 compiledb 之后无法直接使用 compiledb 命令，可能是因为其路径没有加入到环境变量中。

在 `~/.bashrc` 或者 `~/.zshrc` 中加入如下代码：
```sh
export PATH="$PATH:/home/<username>/.local/bin"
eval "$(_COMPILEDB_COMPLETE=source compiledb)"
```

下面那行代码用于开启 compiledb 在命令行中的补全功能。

配置完成之后，我们只需要在项目的编译命令之前加上 `compiledb`，就可以为这个项目加上 `compile_commands.json` 文件。

例如我有一个 linux-0.11 的源码项目，在根目录下执行 `compiledb make all`，只要编译成功，就可以为其添加 `compile_commands.json` 文件了。

### 参考链接

[Neovim C Cpp Lsp Integration Tips | /dev/ttyS3 Blog](https://ttys3.dev/blog/neovim-c-cpp-lsp-integration-tips)
