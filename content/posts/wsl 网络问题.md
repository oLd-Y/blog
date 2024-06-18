---
tags:
  - wsl
draft: false
lastmod: 2024-06-18T21:13:32+08:00
title: wsl 网络问题
date: 2024-06-18
---

# 解决方法
在 windows 的 `%USERPROFILE%` 目录下打开或新建 `.wslconfig` 文件并输入如下代码:
```
[experimental]
autoMemoryReclaim=dropcache  # gradual  | dropcache | disabled
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true
```
然后在 Windows 命令行中执行 `wsl --shutdown` 之后重新打开 `wsl` 即可.
[WSL2 的 2.0 更新彻底解决网络问题 - 知乎](https://zhuanlan.zhihu.com/p/657110386)


其它参考链接：
[给 WSL2 使用 Windows 代理的方法 · Issue #89 · lmk123/blog · GitHub](https://github.com/lmk123/blog/issues/89)

[wsl 无法访问主机，wsl 无法 ping 主机，wsl 无法访问 github，Connection refused - 掘金](https://juejin.cn/post/7346865350623707146)
