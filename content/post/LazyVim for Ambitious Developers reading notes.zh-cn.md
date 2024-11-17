---
title: LazyVim for Ambitious Developers 阅读笔记
categories: 计算机
tags:
  - 读书笔记
  - 在线教程
  - neovim
  - lazyvim
date: 2024-09-24
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-17T15:19:42+08:00
---
教程链接：[LazyVim for Ambitious Developers](https://lazyvim-ambitious-devs.phillips.codes/)

## [Chapter 1. Introduction and Installation](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-1/#_introduction_and_installation)

使用 GUI 加速的 terminal 来进行 Lazyvim 的安装，例如：[Kitty Terminal](https://sw.kovidgoyal.net/kitty/)、[Alacritty](https://alacritty.org/)、[Windows Terminal](https://github.com/microsoft/terminal?tab=readme-ov-file) 等。

安装教程请查看[官网](https://www.lazyvim.org/installation)

## [Chapter 2. What is Modal Editing, Anyway?](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-2/#_what_is_modal_editing_anyway)

在 normal mode 下 `"` 可以打开可用的寄存器。

`:x` 几乎等于 `:wq`，但 `:x` 在文件未第修改的时候不会执行保存操作。

## [Chapter 3. Getting Around](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-3/#_getting_around)

无

## [Chapter 4. Opening Files](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-4/#_opening_files)

Space q q 关闭整个 nvim 窗口

`:LazyExtras` 打开 mini.files 插件。mini.files 兼容许多 lazyvim 的文本编辑操作。使用 `=` 进行修改的保存。

再次找到同一个插件按 x 就可以禁用这个插件。

## [Chapter 5. Configuration and Plugin Basics](https://lazyvim-ambitious-devs.phillips.codes/course/chapter-5/#_configuration_and_plugin_basics)

`.config/nvim/lua/config/keymaps.lua` 中一般用于设置 neovim 或者 lazyvim 中自带的按键设置。

插件配置参数中的 keys 设置按键，opts 设置与这个插件相关的选项配置。

各项配置参考示例：
1. 禁用某项功能：
2. 



