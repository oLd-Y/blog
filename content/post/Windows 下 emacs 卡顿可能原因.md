---
title: Windows 下 emacs 卡顿可能原因
lastmod: 2024-06-25T16:19:10+08:00
draft: true
toc: true
---

## 打开 emacs 时卡顿 {#打开-emacs-时卡顿}

可能原因是被 Windows Defender 拦截了。


### 解决 {#解决}

将 emacs 加入 Windows Defender 的排除项即可。


### 步骤 {#步骤}

右下角 "Windows 安全中心" 右键 -&gt;  查看安全仪表盘 -&gt; 病毒威胁防护 -&gt; 下划，添加或删除排除项。
在其中把 emacs 所在文件夹加上即可。

可以查看 <https://emacs-china.org/t/emacs-windows/24866/19>


## 加载命令时卡顿 {#加载命令时卡顿}

将代理的设置中的 localhost 改为 127.0.0.1。
具体原因可以查看[这篇文章](https://egh0bww1.com/posts/2023-07-14-40-emacs-use-127-not-localhost/)。
其它链接：<https://github.com/manateelazycat/blink-search/issues/42>
