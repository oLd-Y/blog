---
title: "error: target not found: lib32-zlib"
lastmod: 2024-05-16T20:41:51+08:00
draft: true
toc: true
---

解决: 打开 multilib
To enable multilib repository, uncomment the [multilib] section in /etc/pacman.conf:
/etc/pacman.conf
\#+begin_src
[multilib]
Include = /etc/pacman.d/mirrorlist
\#+end_src&gt;
