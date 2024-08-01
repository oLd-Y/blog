---
title: lazyvim 配置记录
catogories: 计算机
tags:
  - neovim
  - lazyvim
date: 2024-07-19
description: 
image: 
weight: 1
draft: false
lastmod: 2024-07-20T17:54:44+08:00
---

正在上手 neovim，首先使用 lazyvim 进行过渡。可以预见的是，在较长的时间内我使用的应该都是 neovim 的发行版而非自已进行配置（也可能不配置了hh），所以在此帖记录一些折腾 lazyvim 的过程，也防止自己长时间不用之后忘记了。

## 配置 java 开发环境

插件：[nvim-java](https://github.com/nvim-java/nvim-java/wiki/Lazyvim)，[视频链接](https://www.youtube.com/watch?v=CXv0WUX_E_Q&list=PL-8OUPYQITXYBtr76njke25F452xJWcQT)，[Q & A](https://github.com/nvim-java/nvim-java/wiki/Q-&-A)

### 初始化教程

在 lazyvim 中输入 `:LazyExtras`，找到 `dap-core` 插件，按 `x` 进行下载。

然后在 `~/.config/nvim/lua/plugins/java/init.lua` 目录下放入如下代码：
```lua
return {
  'nvim-java/nvim-java',
  config = false,
  dependencies = {
    {
      'neovim/nvim-lspconfig',
      opts = {
        servers = {
          jdtls = {
            -- Your custom jdtls settings goes here
          },
        },
        setup = {
          jdtls = function()
            require('java').setup({
              -- Your custom nvim-java configuration goes here
            })
          end,
        },
      },
    },
  },
}
```
接着关闭 nvim，打开任意一个 java 项目等待插件安装完成即可。

这里需要注意的是，如果是一个 maven 项目，首次打开的时候 lsp 可能无法生效，因此需要在项目根目录中使用 `mvn -o eclipse:clean eclipse:eclipse` 下载一些 eclipse 的依赖以供 nvim-jdtls 识别。网络不好有可能卡住， `-o` 参数用于跳过本地已有依赖的下载。

一些快捷键：

| 快捷键                        | 作用         |
| -------------------------- | ---------- |
| C-s                        | 快速格式化      |
| SPC d b                    | 打断点        |
| SPC d c                    | 跳到下个断点     |
| :JavaTestDebugCurrentClass | 对当前类进行断点调试 |
| :JavaTestViewLastReport    | 查看上一个测试结果  |

### 其它参考链接
[Configure Neovim for Java Development - YouTube](https://www.youtube.com/watch?v=C7juSZsM2Fg)

[Configure Neovim for Java Development - by Andrew Courter](https://andrewcourter.substack.com/p/configure-neovim-for-java-development)import org.springframework.aop.*;*;*;*;

[reddit.com/r/neovim/comments/11k3zuv/jdtls\_and\_lazyvim/](https://www.reddit.com/r/neovim/comments/11k3zuv/jdtls_and_lazyvim/)

### 遗留问题

1. 在对 ruoyi-vue-pro 这个项目使用 `SPC d c` 进行 debug 的时候，会出现以下问题：

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240720173703.png)

不知道是否是因为执行 `mvn clean install -DskipTests=true` 跳过了测试模块的原因，还是 eclipse 之类的没下好，总之就是无法使用 dap 进行 debug。如果有谁知道原因的话可以在评论区告诉我。

2. maven 没配置好，网络太慢了。

3. 在打开任意一个文件加载 lsp 的配置的时候非常慢。

综上，暂时不搞 用 nvim-java 的开发环境的配置了，以后有时间再看看。

## 配置 C/C++ 开发环境

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
