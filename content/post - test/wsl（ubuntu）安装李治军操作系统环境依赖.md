---
tags: 
draft: true
lastmod: 2024-06-28T21:39:50+08:00
title: 李治军操作系统 wsl 环境搭建
date: 2024-06-06
---
正在学习操作系统，尝试在 wsl 上安装相关的环境。
# 开启 32 位架构
在 ubuntu 22.04 上进行李治军的操作系统实验，需要安装一些 32 位的库依赖。由于默认 ubuntu 22.04 是不开启 32 位库支持的，所以需要手动开启。否则，在执行添加 32 位库命令的时候会提示下列类似的错误：
```
Reading package lists... Done Building dependency tree... Done Reading state information... Done E: Unable to locate package libsm6:i386
```

执行下列命令即可：
`sudo dpkg --add-architecture i386`
`sudo apt update`

# 安装库依赖


首先根据下列链接把 os-lab 和 gcc-3.4 配置好：[阿里云ubuntu系统配置linux-0.11（哈工大 李治军）实验环境搭建\_.利用提供的“hit-oslab-linux-20110823.tar.gz”压缩包中的文件,在ub-CSDN博客](https://blog.csdn.net/leoabcd12/article/details/118755040)

然后就是运行 os-lab 中的 `run` 脚本，查看缺少哪些依赖，安装其对应的 32 位库（i386）即可。

