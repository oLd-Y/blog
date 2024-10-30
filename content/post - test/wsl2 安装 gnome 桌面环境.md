---
tags: 
draft: true
lastmod: 2024-06-28T21:40:50+08:00
title: wsl2 安装 gnome 桌面环境
date: 2024-05-13
---

以下为要使用的命令一览：
```
sudo apt update && sudo apt upgrade -y
sudo apt purge -y acpid acpi-support modemmanager
sudo apt-mark hold acpid acpi-support
sudo apt install ubuntu-desktop gnome

vim ~/.bashrc
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0  
export LIBGL_ALWAYS_INDIRECT=1

git clone https://github.com/DamionGans/ubuntu-wsl2-system-script.git
cd ubuntu-wsl2-system-script/
bash ubuntu-wsl2-system-script.sh
```


1. `apt purge -y acpid acpi-support modemmanager`
    
    - `apt purge`：这个命令用于彻底删除软件包，包括它们的配置文件。与`apt remove`不同，`purge`不会留下任何痕迹，因此如果将来需要重新安装这些软件包，它们将完全从头开始安装。
    - `-y`：这个选项是告诉`apt`在执行过程中自动回答所有的提示问题，相当于默认回答“yes”，用于自动化脚本中，以避免手动输入。
    - `acpid`、`acpi-support`、`modemmanager`：这些是要从系统中删除的软件包的名称。`acpid`是一个守护进程，用于处理ACPI（高级配置和电源接口）事件；`acpi-support`提供了ACPI相关的支持工具；`modemmanager`是一个守护进程，用于管理调制解调器设备。
2. `sudo apt-mark hold acpid acpi-support`
    
    - `sudo`：这是一个命令行程序，允许授权的用户以另一个用户的安全权限执行命令，默认情况下是以超级用户（root）的权限执行。
    - `apt-mark hold`：这个命令用于将指定的软件包标记为“held”（保持）状态，这意味着APT将不会自动更新这些软件包，即使它们有可用的更新。
    - `acpid`、`acpi-support`：这些是被标记为保持状态的软件包的名称。一旦软件包被标记为保持状态，APT将不会尝试更新它们，直到它们被解除保持状态（通常使用`apt-mark unhold`命令）。

总结来说，第一条命令用于彻底删除指定的软件包及其配置文件，第二条命令用于防止这些软件包在未来被自动更新。这通常用于系统维护，以确保关键系统组件不会因为自动更新而发生变化，从而可能影响系统的稳定性或兼容性。