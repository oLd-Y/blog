---
title: lazyvim 配置记录
categories: 计算机
tags:
  - neovim
  - lazyvim
date: 2024-07-19
description: 
image: 
weight: 1
draft: false
lastmod: 2024-12-03T20:41:58+08:00
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


