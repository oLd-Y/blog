---
title: tmux shortcuts recording
categories: CS
tags:
  - tmux
  - terminal
  - shortcut
date: 2024-12-04
description: 
image: 
weight: 1
draft: true
lastmod: 2024-12-04T11:03:48+08:00
---
`man tmux` to view the command details.

Below assume that you use `C-b` as your prefix of tmux.

## Default shortcuts

`C-b o`, switch to the next panel.

`C-b !`, break the panel out into its own window, as a way to hide other pane.

`C-b w`, switch among windows.

`C-b ;`, switch to the latest pane.
`C-b l`, switch to the latest window.
`C-b L`, switch to the latest session.

`C-b q`，show the panel number, press the number will jump accordingly.




安装 tpm：`git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm`
[tmux resurrect 配置 - wang\_yb - 博客园](https://www.cnblogs.com/wang_yb/p/10208075.html)

## Plugins

### [tpm](https://github.com/tmux-plugins/tpm): manage your tmux plugins.

`C-b I`, install the plugins witten in `.tmux.conf`.

### [tmux-resurrect](https://github.com/tmux-plugins/tmux-resurrect): save & reload your session.

`C-b C-s`, save your current session.

`C-b C-r`, reload your last session.

[tmux-sensible](https://github.com/tmux-plugins/tmux-sensible): the most sensible configuration of tmux for everyone.


