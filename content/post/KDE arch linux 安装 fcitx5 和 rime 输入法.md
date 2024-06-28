---
title: KDE arch linux 安装 fcitx5 和 rime 输入法
lastmod: 2024-06-28T21:24:57+08:00
draft: true
toc: true
---

理论上安装好输入法框架并添加到键盘中, 然后配置好环境变量即可.

具体的操作为:

## 安装 fcitx5 相关框架:

`sudo pacman -S fcitx5 fcitx5-gtk fcitx5-qt fcitx5-configtool fcitx5-rime librime`
fcitx5: 输入法基础框架主程序
fcitx5-gtk: GTK 程序的支持， 必须安装， 修复打字太快漏字的问题
fcitx5-qt: QT5 程序的支持， 必须安装， 修复打字太快漏字的问题
fcitx5-configtool: 图形化配置工具
fcitx5-rime: RIME 输入法
librime: rime 相关库， 下面的 emacs-rime 会用到

1.  将虎码输入法的整个配置目录放到 rime 的配置目录下, 用户配置目录为: _home/lyao_.local/share/fcitx5/rime/
2.  在 /etc/environment 文件下写入如下环境变量即可 `XMODIFIERS=@im=fcitx5`

## 注意事项

1.  新版 KDE 的 fcitx5 框架已经不需要设置 `GTK_IM_MODULE/QT_IM_MODULE` 了.
2.  环境变量的设置也不是在 `~/.pam_environment` 中, 而是 `/etc/environment` 中.

参考链接:
<https://manateelazycat.github.io/2023/09/11/fcitx-best-config/>

