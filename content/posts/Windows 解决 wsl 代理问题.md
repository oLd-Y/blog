---
lastmod: 2024-04-26T18:07:23+08:00
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
