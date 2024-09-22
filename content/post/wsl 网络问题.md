---
tags:
  - wsl
draft: true
lastmod: 2024-09-22T18:29:33+08:00
title: wsl 网络问题
date: 2024-06-18
---

# 解决方法
在 windows 的 `%USERPROFILE%` 目录下打开或新建 `.wslconfig` 文件并输入如下代码:
```
[experimental]
autoMemoryReclaim=dropcache  # gradual  | dropcache | disabled
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true
```
然后在 Windows 命令行中执行 `wsl --shutdown` 之后重新打开 `wsl` 即可.
[WSL2 的 2.0 更新彻底解决网络问题 - 知乎](https://zhuanlan.zhihu.com/p/657110386)


其它参考链接：
[给 WSL2 使用 Windows 代理的方法 · Issue #89 · lmk123/blog · GitHub](https://github.com/lmk123/blog/issues/89)

[wsl 无法访问主机，wsl 无法 ping 主机，wsl 无法访问 github，Connection refused - 掘金](https://juejin.cn/post/7346865350623707146)

注意，在较新的版本中，wsl 可以直接使用本机的代理了，不需要在 `.zshrc` 或者 `.bashrc` 设置 `https_proxy` 或者 `http_proxy` 变量了。

# 其它一些重置 wsl 网络的操作

### 检查WSL网络适配器

首先，确保WSL2和虚拟网络适配器正常工作：

1. **重启WSL和主机网络服务** 在PowerShell或CMD中运行以下命令：
    
```sh
wsl --shutdown
netsh winsock reset
netsh int ip reset all
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```
    
    然后重新启动计算机。
    
2. **更新WSL** 确保你使用的是最新版本的WSL：

```sh
wsl --update
```
    

### 配置WSL网络代理

如果你使用代理，可能需要在WSL中配置代理设置。假设你已经在Windows上配置了代理（比如Clash），你可以在WSL中设置HTTP和HTTPS代理：

1. **查看Windows代理配置** 打开Clash或你的代理软件，查看代理的监听地址和端口。假设代理监听地址是`127.0.0.1`，端口是`7890`。
    
2. **在WSL中配置代理** 在你的WSL终端中，运行以下命令：
    
```sh
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"
export no_proxy="localhost,127.0.0.1,::1"
```

	你可以将这些命令添加到你的`~/.bashrc`或`~/.zshrc`文件中，使其在每次启动WSL时自动执行。
    

### 检查WSL网络配置

如果以上步骤没有解决问题，可以检查WSL网络配置文件`/etc/resolv.conf`和网络接口配置。

1. **检查网络接口** 在WSL中运行以下命令，查看网络接口信息：
    
    ```sh
    ip addr
    ```
    
    你应该看到一个`eth0`接口，它是WSL的默认网络接口。
    
2. **检查DNS配置** 确保WSL的DNS配置正确。在WSL中运行以下命令查看DNS配置：
    
    ```sh
    cat /etc/resolv.conf
    ```
    
    如果DNS配置不正确，可以手动设置：
    
    ```sh
    echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf > /dev/null
    sudo chattr +i /etc/resolv.conf
    ```
    

通过以上步骤，你应该能够解决WSL无法连接代理的问题。如果问题依然存在，请提供更多详细信息以便进一步诊断。