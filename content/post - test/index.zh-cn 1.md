---
title: lazyvim 中无法使用 Ctrl - r
categories: 计算机
tags:
  - wsl
  - windows
  - bug
date: 2024-07-17
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-30T10:34:14+08:00
---
今天在 lazyvim 中一直无法使用小写的 `Ctrl-r` 触发寄存器菜单，但我之前却是可以的，研究了半天，原来是安装了 flomo，它的全局快捷键把我的按键拦截了。

把 flomo 关掉或者把其中的快捷键关掉就可以了。