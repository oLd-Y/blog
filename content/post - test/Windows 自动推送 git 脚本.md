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
lastmod: 2024-04-26T20:51:12+08:00
---

# 编写脚本

```batch
@echo off
echo "DOCS PUSH BAT"

echo "1. Move to working directory" 
D:
cd D:\home\guolianyao\blog\

echo "2. Start submitting code to the local repository"
git add .

echo "3. Commit the changes to the local repository"
set now=%date% %time%
echo "Time:" %now%
git commit -m "%now%"

echo "4. Push the changes to the remote git server"
git push -uf origin main 

echo "Batch execution complete!"
pause
```

# 设置 Windows 定时任务


[参考链接](https://blog.csdn.net/CJPSR/article/details/131625411)
