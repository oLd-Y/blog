---
tags: 
draft: true
lastmod: 2024-06-25T11:21:08+08:00
title: windows 和 arch 双系统安装
date: 2024-05-13
---
```
msinfo32 // 查看 windows BIOS 的类型
```
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240513114123.png)

设置 windows 时钟偏移
```
reg add "HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /d 1 /t REG_DWORD /f

```