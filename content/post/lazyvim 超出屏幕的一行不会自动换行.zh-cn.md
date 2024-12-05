---
title: lazyvim 超出屏幕的一行不会自动换行
categories: 计算机
tags:
  - lazyvim
  - neovim
date: 2024-12-05
description: 
image: 
weight: 1
draft: false
lastmod: 2024-12-05T22:02:54+08:00
---
如题，在 lazyvim 的配置文件中加入如下代码即可：

```lua
vim.opt_local.wrap = true
vim.opt_local.linebreak = true -- 避免单词被拆开折叠
vim.opt_local.breakindent = true -- 为折叠行添加缩进
```