---
title: go installation
categories: CS
tags:
  - go
  - installation
date: 2024-10-31
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-31T12:34:45+08:00
---
# Linux

go1.23.2 for instance:

```shell
wget https://go.dev/dl/go1.23.2.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.23.2.linux-amd64.tar.gz
```

then add
```bash
export PATH=$PATH:/usr/local/go/bin
```
to the profile and run the `source ~/.zshrc` command.


