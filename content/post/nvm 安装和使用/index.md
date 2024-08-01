---
categories:
  - ""
  - nodejs
tags:
  - nvm
draft: true
lastmod: 2024-07-19T14:29:46+08:00
title: nvm 安装和使用
date: 2024-6-25
description: ""
slug: 
image: 
weight: 1
---

### 安装 nvm 
1. 下载并安装 nvm：
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
或者使用 wget：
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
``` 

2. 加载 nvm：
运行安装脚本后，添加以下内容到你的 shell 配置文件（例如 `~/.bashrc`, `~/.zshrc`, 或 `~/.profile`）：
```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

然后，重新加载 shell 配置文件：
```sh
source ~/.bashrc  # 或者 ~/.zshrc, ~/.profile
``` 
3. 验证 nvm 安装：
运行以下命令，确保 `nvm` 已正确安装：

```sh
nvm --version
```
### 安装最新版本的 Node.js 和 npm 
1. **安装最新的 LTS 版本** ：

你可以使用 `nvm` 安装最新的 LTS（长期支持）版本的 Node.js：

```sh
nvm install --lts
``` 
2. **设置默认版本** ：

安装完成后，你可以将其设置为默认版本：

```sh
nvm use --lts
nvm alias default lts/*
``` 
3. **验证 Node.js 和 npm 版本** ：

运行以下命令，确保 Node.js 和 npm 已成功安装并更新到最新版本：

```sh
node -v
npm -v
```
### 安装特定版本的 Node.js

如果你需要安装特定版本的 Node.js，例如 16.x，你可以使用以下命令：

```sh
nvm install 16
nvm use 16
nvm alias default 16
```


### 在不同版本之间切换

你可以使用 `nvm` 在不同版本的 Node.js 之间轻松切换。例如，切换到 14.x 版本：

```sh
nvm install 14
nvm use 14
```


### 更新 npm

`nvm` 通常会自动安装与 Node.js 对应的最新版本的 npm。如果需要单独更新 npm，你可以运行以下命令：

```sh
npm install -g npm@latest
```



通过以上步骤，你就可以在 Ubuntu 中安装并使用最新版本的 Node.js 和 npm 了。`nvm` 的使用可以让你方便地管理和切换不同版本的 Node.js，满足不同项目的需求。


```#### 使用 `test` 进行文件检查

```sh
if test -s "$NVM_DIR/nvm.sh"; then
  echo "File exists and is not empty"
else
  echo "File does not exist or is empty"
fi
```


#### 省略条件测试（错误示例）

```sh
if -s "$NVM_DIR/nvm.sh"; then
  echo "File exists and is not empty"
else
  echo "File does not exist or is empty"
fi
```



这个错误示例将导致语法错误，因为 `-s` 需要与 `[]` 或 `test` 一起使用。
### 总结

在 shell 脚本中，使用 `[]` 或 `test` 进行条件测试是必需的，以确保脚本能够正确地进行逻辑判断和控制。省略这些条件测试会导致语法错误和脚本行为异常。

You: 
- 安装了 nvm 之后，需要将原有的 nodejs 和 npm 卸载吗？

ChatGPT: 
- 安装 `nvm` 之后，不一定需要卸载原有的 `Node.js` 和 `npm`。但为了避免可能的冲突和混淆，通常建议卸载系统中已安装的 `Node.js` 和 `npm`。使用 `nvm` 可以更方便地管理不同版本的 `Node.js` 和 `npm`，所以保持系统环境的干净可以简化版本管理。
### 检查现有 Node.js 和 npm

首先，检查系统中是否安装了 `Node.js` 和 `npm`：

```sh
node -v
npm -v
```


### 卸载 Node.js 和 npm

如果确认系统中已安装 `Node.js` 和 `npm`，可以按照以下步骤卸载它们：
#### 使用包管理器卸载

如果你是通过系统的包管理器（如 `apt`）安装的 `Node.js` 和 `npm`，可以通过包管理器进行卸载。

对于 Ubuntu，可以使用 `apt` 命令：

```sh
sudo apt remove nodejs npm
```



有时候，可能需要运行 `purge` 命令以确保彻底清除配置文件：

```sh
sudo apt purge nodejs npm
```



然后，清理残留的依赖：

```sh
sudo apt autoremove
```


#### 手动卸载

如果你是通过其他方式（如手动下载、编译等）安装的 `Node.js` 和 `npm`，可能需要手动删除相关文件。通常，`Node.js` 和 `npm` 的可执行文件位于 `/usr/local/bin` 或 `/usr/bin` 目录中。 
1. **删除可执行文件** ：

```sh
sudo rm /usr/local/bin/node
sudo rm /usr/local/bin/npm
``` 
2. **删除相关目录** ：

```sh
sudo rm -rf /usr/local/lib/node_modules
sudo rm -rf ~/.npm
sudo rm -rf ~/.nvm
```
### 使用 nvm 安装 Node.js 和 npm

完成卸载后，你可以使用 `nvm` 安装和管理 `Node.js` 和 `npm`。以下是一些常用的 `nvm` 命令： 
1. **安装最新的 LTS 版本** ：

```sh
nvm install --lts
``` 
2. **安装特定版本** ：

```sh
nvm install 14.17.0  # 例如，安装 14.17.0 版本
``` 
3. **查看已安装的版本** ：

```sh
nvm ls
``` 
4. **使用特定版本** ：

```sh
nvm use 14.17.0
``` 
5. **设置默认版本** ：

```sh
nvm alias default 14.17.0
```
### 验证安装

确保新的 `Node.js` 和 `npm` 安装正确：

```sh
node -v
npm -v
```



通过上述步骤，你可以成功卸载系统中已有的 `Node.js` 和 `npm`，并使用 `nvm` 来管理它们。这将确保环境的整洁和管理的便利。
