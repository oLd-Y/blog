---
tags: 
draft: true
lastmod: 2024-06-25T11:24:07+08:00
title: hdc 无法挂载 minix
date: 2024-06-06
---

在 wsl2 中进行李治军的操作系统实验，执行 `sudo ./mount-hdc` 的时候会提示 `mount: /home/lyao/oslab/hdc: unknown filesystem type 'minix'.` 原因是 windows 自带的 wsl2 内核不支持挂载 minix。

解决方法是用编译好的带 minix 文件系统的 wsl-linux 内核替代原有的 wsl-linux 内核。相关的参考链接如下：
[编译WSL2 linux内核以支持minix文件系统\_unknown filesystem type 'minix'.-CSDN博客](https://blog.csdn.net/weixin_60738001/article/details/130739183)
[WSL2 Linux内核替换\_wsl切换内核组件-CSDN博客](https://blog.csdn.net/weixin_60738001/article/details/130739325)