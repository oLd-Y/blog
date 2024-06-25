---
title: arch linux wayland chrome 浏览器输无法输入中文
lastmod: 2024-06-25T11:24:43+08:00
draft: true
toc: true
---

## 环境 {#环境}

arch linux, wayland, kde plasma 6, fcitx5, fcitx5-rime

`sudo vim ~/.config/chrome-flags.conf`, 打开(没有则创建) `chrome-flags.conf` 文件, 在其中加入如下代码使参数持久化:

```shell
--enable-features=UseOzonePlatform
--ozone-platform-wayland
--enable-wayland-ime
```

注意不要创建成 `chromium-flags.conf` 的文件了, 这是给 `chrome` 内核的其它软件用的.

备选设置：

1.  在地址栏输入：chrome://flags/，找到 `Preferred Ozone platform` 选项并将其设置为 `Wayland`.
2.  `sudo vim /usr/share/applications/google-chrome.desktop`, 然后找到包含 `Exec=/usr/bin/google-chrome-stable` 的变量, 在其后加上所需的参数.

参考链接:
<https://fcitx-im.org/wiki/Using_Fcitx_5_on_Wayland> (KDE Plasma 那节)
<https://wiki.archlinux.org/title/chromium>
