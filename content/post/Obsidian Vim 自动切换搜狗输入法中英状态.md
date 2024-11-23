---
date: 2024-4-25
share: "true"
title: Obsidian Vim 自动切换搜狗输入法中英状态
lastmod: 2024-06-25T11:23:04+08:00
hideInList: false
draft: true
---

https://github.com/gamife/im-select-cn
将上述地址中的代码复制到本地
解压之后将 `im-select-cn.exe` 的文件路径放到环境变量中
按照如下设置插件
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240425233000.png)
重启 obsidian 即可.

补充:
- 在 `cmd` 使用 `im-select-cn.exe 0|1|2` 可以修改搜狗输入法的输入状态.
- 0 - 英文
- 1 - 中文
- 2 - 自动切换
