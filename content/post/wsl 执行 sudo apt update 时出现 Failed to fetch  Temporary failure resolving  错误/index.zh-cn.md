---
title: wsl 执行 sudo apt update 时出现 Failed to fetch  Temporary failure resolving  错误
catogories: Windows
tags:
  - wsl
date: 2024-07-17
description: 
image: 
weight: 1
draft: false
lastmod: 2024-08-01T10:10:17+08:00
---
在使用 wsl ubuntu 22.04 时执行 sudo apt update 出现标题中的错误，经查询是 DNS 解析相关的问题。

涉及到的文件有两个：wsl 中的 `/etc/resolv.conf` 和 `/etc/wsl.conf`

前者用于设置 wsl 的的域名解析相关的设置，后者用于控制 wsl 的某些行为，比如在这里就用于设置 wsl 是否自动生成域名解析。

## 步骤
接下来是相关的步骤参考：

1. 在 Windows Powershell 中查看自己的 DNS 服务器网关
```shell
ipconfig /all
```

找到并记下该 ip 地址
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240717161942.png)



2. 在 wsl 中的 `/etc/wsl.conf` 文件（没有就创建）中加入如下代码以禁用域名解析的自动生成。
```shell
[network]
generateResolvConf = false
```

3. 删除并重新编写 resolv.conf 相关的文件
删除 resolv.conf
```shell
cd /etc/
sudo rm resolv.conf

# 如果有
cd /run
sudo rm resolvconf/resolv.conf
```
重新编写 resolv.conf
```shell
sudo vim /etc/resolv.conf
```
然后在其中写入下列配置：
```shell
nameserver <你的DNS网关>
```

4. 接着重启 wsl 即可
```shell
exit
wsl --shutdown
```

## 注意事项
1. 网上的一些帖子可能会让你在 resolv.conf 中用谷歌的 8.8.8.8/8.8.4.4 域名，但对我不起作用。反而只保留我自己的网关可以解决问题。
2. 如果无法删除 resolv.conf，则执行 `sudo chattr -i /etc/resolv.conf` 命令为该文件添加执行权限。[引自这里](https://support.tools/post/fix-stuck-resolv-conf/)
3. 可能还与防火墙有一定的关系，请自行查阅网上资料。
4. 有时候需要重置一下网络，执行下列代码之后重启一下电脑：
```shell
wsl --shutdown
netsh winsock reset
netsh int ip reset all
netsh winhttp reset proxy
ipconfig /flushdns
```
5. 如果出现后续 `sudo apt update` 的时候出现 404 错误，则是镜像源出现了问题。以下为 22.04 的 ubuntu 源参考：

```shell
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
```

[参考链接](https://stackoverflow.com/questions/66338549/wsl2-network-unreachable/66340554#66340554)

