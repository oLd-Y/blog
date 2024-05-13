---
tags: 
draft: false
lastmod: 2024-05-13T10:13:37+08:00
title: wsl2 安装 gnome 桌面环境
date: 2024-05-13
---


```
sudo apt update && sudo apt upgrade -y
apt purge -y acpid acpi-support modemmanager
sudo apt-mark hold acpid acpi-support
sudo apt install ubuntu-desktop gnome

vim ~/.bashrc
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0  
export LIBGL_ALWAYS_INDIRECT=1

git clone https://github.com/DamionGans/ubuntu-wsl2-system-script.git
cd ubuntu-wsl2-system-script/
bash ubuntu-wsl2-system-script.sh
```
