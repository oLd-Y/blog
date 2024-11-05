---
title: Upgrade Neovim To The Latest
categories: CS
tags:
  - neovim
  - installation
date: 2024-11-05
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-05T22:10:31+08:00
---
If you want to upgrade neovim to the latest version in Linux/WSL, here is the steps:
```shell
# remove the current version
sudo apt remove neovim

# add neovim ppa
sudo add-apt-repository ppa:neovim-ppa/stable
sudo apt update
sudo apt install neovim

# verify neovim installation
nvim --version
```

If you encounter an error "sudo: add-apt-repository: command not found", then you should install the `software-properties-common` package.
```shell
sudo apt update
sudo apt install software-properties-common
```
