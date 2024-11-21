---
title: extract a .tar.gz file
categories: CS
tags:
  - linux
  - tar
  - gzip
date: 2024-11-16
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-16T11:38:46+08:00
---
```shell
tar -xvzf test.tar.gz
```

`tar` collected all the files into one package `test.tar`. The gzip program applied compression, hence the `gz` extension. So the command does a couple things:

- `f`: this must be the last flag of the command, and the tar **f**ile must be immediately after. It tells tar the name and path of the compressed file.
- `z`: tells tar to decompress the archive using g**z**ip
- `x`: tar can collect files or e**x**tract them. `x` does the latter.
- `v`: makes tar talk a lot. **V**erbose output shows you all the files being extracted.

To extract into a **c**ustom folder, add the `-C` option with a folder name of your choice:

```
tar -xvzf test.tar.gz -C some_custom_folder_name
```

[reference](https://askubuntu.com/questions/25347/what-command-do-i-need-to-unzip-extract-a-tar-gz-file)
