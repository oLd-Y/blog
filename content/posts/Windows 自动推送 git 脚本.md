---
title: Windows 自动推送 git 脚本
tags:
  - windows
date: 2024-04-25 23:11:38
draft: true
hideInList: false
isTop: false
feature: 
share: "true"
lastmod: 2024-04-26T18:34:11+08:00
---

# 编写脚本

```batch
@echo off
setlocal

set "datestamp=%date:~0,4%%date:~5,2%%date:~8,2%"
set "timestamp=%time:~0,2%%time:~3,2%%time:~6,2%"
set "datetime=%datestamp%_%timestamp%"

cd /d D:\home\guolianyao\blog

git add .
git status
git commit -m "自动推送 - %datetime%"
git push -u origin main

endlocal
```

# 设置 Windows 定时任务


[参考链接](https://blog.csdn.net/CJPSR/article/details/131625411)
