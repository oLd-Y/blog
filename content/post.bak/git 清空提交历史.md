---
tags: 
draft: true
hideInList: false
isTop: false
feature: 
lastmod: 2024-04-26T22:50:45+08:00
title: git 清空提交历史
date: 2024-04-26
---
执行下列命令
```shell
git checkout --orphan latest_branch # 创建并切换到一个只包含当前提交记录的分支
git add .
git commit -m "message"
git branch -D main # 删除原来的 main 分支
git branch -m main # 修改当前分支的名字为 main
git push -uf origin main # 强制提交当前分支到远程
```

参考链接
[彻底清除git所有历史提交记录使其为“新”库 - 简书](https://www.jianshu.com/p/e2b3d04542cb)