---
title: 电脑投屏手机软件 scrcpy 使用记录
categories: 计算机
tags:
  - 软件
  - 投屏
date: 2024-11-03
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-04T21:16:16+08:00
---
一直在用微信读书，它的手机 app 实在是比网页端好用太多，而且我经常需要在手机上查看内容，然后记录在电脑上，来回切换实在非常不方便。

于是我在搜索有什么解决方案，发现了一个好用的软件 scrcpy，可以直接在电脑上对手机的内容进行投屏和操作，一番折腾之后，基本可以满足我的使用需要，在此记录一下它的使用方法。

## 安装

首先在[安装界面](https://github.com/Genymobile/scrcpy/releases/tag/v2.7)下载适合操作系统的软件包。

在手机设置的参数信息里面狂按系统版本号，把开发者选项打开，然后在开发者选项里面把 USB 调试打开。

接着用一根 usb 线把手机和电脑连起来，在电脑中把解压好的软件包打开，点击 exe 文件，弹出一个界面，就是自己手机的投屏。

如果你的手机中安装的是搜狗输入法，那么直接把电脑中输入法切换成英文状态，就可以在投屏中对手机进行打字了。

但如果你和我一样用的其它小众输入法（例如虎码），那么需要安装其它输入法，如：
- [小企鹅输入法5](https://github.com/fcitx5-android/fcitx5-android)
- [同文输入法](https://github.com/osfans/trime)

虎码用户直接用手机在[官网](http://ys-j.ysepan.com/620946455/916731337/jfS9jUs5G4K7S26JIMKH62/%E8%99%8E%E7%A0%81%E5%B0%8F%E4%BC%81%E9%B9%85%E5%AD%97%E8%AF%8D%E7%89%882024_07_29.apk?lx=xz)下载资源即可。


## 常用快捷键

| 快捷键                  | 操作                   |
| -------------------- | -------------------- |
| alt-o                | 关闭真机屏幕（保持投屏，按电源键可恢复） |
| alt-O                | 打开真机屏幕               |
| alt-s                | 多任务                  |
| alt-b                | 返回上一级/鼠标右键           |
| alt-h                | home 键/鼠标中键          |
| alt-p                | 按电源                  |
| alt-\<left>/\<right> | 旋转屏幕                 |
| alt-\<up>/\<down>    | 调节音量                 |
| alt-g                | 投屏铺满窗口               |
| ctrl-c               | 复制（可跨机）              |
| ctrl-v               | 粘贴（可跨机）              |

以下为常用的启动参数：
 - `--stay-awake`，保持唤醒状态。
 - `--always-on-top`，总是位于顶部。
 - `--keyboard=uhid`，更加接近真实物理键盘。
 - `--turn-screen-off`，默认关闭真机的屏幕。
 - `--window-title="<你的窗口名称>"`，设置窗口名称。

Windows 在快捷方式的“属性 -> 目标” 处加上这个参数即可。

## 无线连接

除了使用 usb 连接，scrcpy 还可以通过无线连接的方式进行投屏。

在 scrcpy 的安装目录打开 windows terminal。

执行以下命令：
```shell
# 在插入 usb 的状态下执行，用于设置手机监听 5555 端口
.\adb.exe tcpip 5555

# 拔掉 usb 之后执行，用于通过 scrcpy 的 adb 工具连接到手机的指定端口
.\adb.exe connect <手机的 ip 地址>:5555
```

这样之后再打开 scrcpy 软件就可以通过 wifi 进行连接了。

手机的 ip 地址可以通过 `.\adb.exe shell ip -f inet addr show wlan0` 这条命令查询，或者直接通过在手机的设置搜索框中搜索。需要重新恢复不连接的状态的话则将 `connect` 改为 `disconnect` 即可。

重新启动操作系统之后，需要重新连接，并且 wifi 质量不好的话，会经常卡顿。因此不建议使用 wifi 的方式进行连接。


## 其它

使用 `scrcpy-noconsole.vbs` 脚本也是一样的效果，区别在于它不会有额外的 terminal。

