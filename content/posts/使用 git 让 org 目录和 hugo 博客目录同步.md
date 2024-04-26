---
title: 使用 git 让 org 目录和 hugo 博客目录同步
lastmod: 2024-04-26T18:07:23+08:00
draft: false
toc: true
---

## 同步脚本 {#同步脚本}

使用 org-mode 和 hugo 搭建博客的时候, 总是需要频繁地使用 `git add .`, `git commit -m "XXX"`, `git push origin main` 命令同步到远程仓库, 如果 org 文件夹和 hugo 站点目录不在同一个文件夹下的话, 就需要执行两遍这样的操作, 很是繁琐.
可以利用以下脚本自动执行相关命令:

```shell
#!/bin/bash

# Define the paths to the two repositories
repo1="$HOME/org/"
repo2="$HOME/blog/"

# Get the current date and time
current_time=$(date "+%Y-%m-%d %H:%M:%S")

# Change to the first repository and pull any new changes
cd "$repo1"
git add .

# Add and commit any new changes with a default message
if [ $# -ge 1 ]; then
git commit -m "$1 - $current_time"
else
git commit -m "Commit from $repo1 - $current_time"
fi

git pull origin main
# Push the changes to the remote repository
git push origin main

# Change to the second repository and repeat the process
cd "$repo2"
git add .

# Add and commit any new changes with a default message, or with a message provided as the second argument
if [ $# -ge 2 ]; then
git commit -m "$2 - $current_time"
else
git commit -m "Commit from $repo2 - $current_time"
fi

git pull origin main
# Push the changes to the remote repository
git push origin main
```

使用时自行替换 repo1 和 repo2 即可. 可以自行指定接受0~2个参数作为第1个和第2个仓库的提交注释.


## 解释 {#解释}

大致解释一下主要参数:

-   `if [ $# -ge 1 ]; then`: 这个判断条件表示如果接收的参数大于等于1, 则执行后续表达式.
-   `$()`: 命令替换, 将某个命令的结果替换到此处.
-   `date "+%Y-%m-%d %H:%M:%S"`: 打印当前日期, + 是格式化字符串前缀, 表示接下来的要格式化字符串.
