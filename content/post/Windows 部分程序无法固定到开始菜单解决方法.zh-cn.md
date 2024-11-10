---
title: Windows 部分程序无法固定到开始菜单解决方法
categories: 计算机
tags:
  - 软件
  - 电脑用法
date: 2024-11-04
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-04T21:36:48+08:00
---
有时候部分脚本或者程序无法固定到开始菜单，这里记录一下这个问题的解决方法。

将相关的文件创建一个快捷方式，然后将这个快捷方式放到 `C:\Users\<Username>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs` 目录中，然后等 Windows 更新相关的索引或者重启电脑之后，在任务栏的搜索框中搜索上述快捷方式的名称，就可以将其固定到开始菜单中了。

也可以通过 `win + r` 输入 `shell:programs` 命令直接打开相关的目录。