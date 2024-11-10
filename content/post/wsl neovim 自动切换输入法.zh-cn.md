---
title: wsl neovim 自动切换输入法
categories: 计算机
tags:
  - neovim
  - lazyvim
  - wsl
  - 输入法
date: 2024-11-05
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-05T17:21:42+08:00
---
使用 im-select 可以自动设置中英文输入法的切换。本文介绍一下在 lazyvim 下这个软件的使用方法。

首先在[这个页面](https://github.com/daipeihust/im-select/raw/master/win/out/x64/im-select.exe)下载 im-select，放到一个目录中，并将其所在目录添加到环境变量中。

然后我们需要安装一个使用 im-select 的 nvim 插件。

在 `~/.config/nvim/lua/plugins` 目录下创建一个文件 im-select.lua（任意取名），写下如下代码：
```lua
return {
  {
    "keaising/im-select.nvim",
    lazy = false,
    config = function()
      require("im_select").setup({
        default_im_select = 1033,

        default_command = "im-select.exe",
      })
    end,
  },
}
```

重启 lazyvim 即可。

注意事项：
1. im-select 需要电脑中同时拥有中文和英文的语言包。具体地看 Windows 设置中的“时间和语言 > 语言和区域”中看是否有两个语言，以及两个语言的语言包是否都已经下载了。
2. 其用法是切换不同的输入法，而非切换输入法中的中英文状态。关于如何直接切换中英文状态，暂时没有找到比较好用的解决方案，只能习惯使用 `win + <space>` 切换输入法状态了。
3. 1033 是英文（美国）的输入法句柄码，2052 为中文输入法的句柄码。
4. im-select 会记忆上次进入 normal 之前的输入法。