---
title: "archlinux graphics"
lastmod: 2024-05-16T11:09:31+08:00
draft: true
toc: true
---

## multi monitor {#multi-monitor}

kscreen-doctor

_etc_ X11/xorg.conf
lspci | grep -E 'VGA|3D'
echo $XDG_SESSION_TYPE
journalctl -b 0 --grep "renderer for"

```shell
GBM_BACKEND=nvidia-drm
__GLX_VENDOR_LIBRARY_NAME=nvidia
```

一般是intel的,我的是intel+nvidia的笔记本.这时候如果安装了独立显卡的驱动,nvidia的optimus功能会把独立显卡绘制的结果传输给集成显卡.所以如果只安装了独立显卡的驱动的话是不会有显示的.

显卡驱动问题
在Wayland环境下，显卡驱动的配置可能会与X11有所不同。例如，NVIDIA显卡用户可能需要在启动参数中添加nvidia-drm.modeset=1。你可以编辑GRUB的配置文件/etc/default/grub，在GRUB_CMDLINE_LINUX_DEFAULT行中添加该参数，然后更新GRUB配置并重启系统。

sudo grub-mkconfig -o /boot/grub/grub.cfg
sudo reboot


## links {#links}

<https://xland.cyou/p/arch-linux-configuration-driver-and-software/#nvidia-%E9%A9%B1%E5%8A%A8>
<https://manateelazycat.github.io/2023/06/03/nvidia-driver/>
<https://arch.icekylin.online/guide/rookie/graphic-driver#%E7%8B%AC%E7%AB%8B%E6%98%BE%E5%8D%A1>
<https://arch.icekylin.online/guide/rookie/graphic-driver>
<http://ivo-wang.github.io/2018/02/18/a/>
<https://cloud.baidu.com/article/3249631>
