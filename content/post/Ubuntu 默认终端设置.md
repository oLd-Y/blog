---
title: Ubuntu 默认终端设置
lastmod: 2024-10-30T10:30:05+08:00
draft: true
toc: true
hideInList: false
---
Obsidian 中的插件数目众多，一不留神就会陷进折腾插件的陷阱。偶然找到的插件，当时未必立马有用，个人还是更倾向于用到了再装。但当时找得到的插件，以后就未必同样找得到；或者长时间不用某个插件之后忘记这个插件的用法。因此在这里记录一下用到的插件。持续更新。

Ubuntu 的默认终端不太好用, 在 ~/.inputrc 文件中, 加上一点设置:

```shell
# do not show hidden files in the list
set match-hidden-files off

# auto complete ignoring case
set show-all-if-ambiguous on
set completion-ignore-case on

"\e[A": history-search-backward
"\e[B": history-search-forward
```

解释:
show-all-if-ambiguous : 默认情况下，按下两次 &lt;tab&gt; 才会出现提示，现在只需要一次了。
match-hidden-files : 不显示隐藏文件，特别是当你在 Home 目录时，你会觉得眼前好干净。
completion-ignore-case : 在自动补全时忽略大小写
history-search-\* : 输入某个命令的一部分时，按上下箭头，会匹配关于这个这命令最近的使用历史。

[原链接](https://blog.csdn.net/guyue35/article/details/52994766)
