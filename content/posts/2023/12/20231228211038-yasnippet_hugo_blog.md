---
title: "yasnippet-hugo_blog"
date: 2023-12-28T21:18:00+08:00
lastmod: 2023-12-28T21:29:14+08:00
tags: ["yasnippet", "hugo"]
draft: false
toc: true
---

## hugo_blog 代码模板属性解释 {#hugo-blog-代码模板属性解释}

```yasnippet
# -*- mode: snippet -*-
# name: hugo_blog
# key: <hugo
# --
#+OPTIONS: author:nil ^:{}
#+hugo_front_matter_format: yaml
#+HUGO_BASE_DIR: ~/blog/
#+HUGO_SECTION: posts/`(format-time-string "%Y/%m")`
#+DATE: `(format-time-string "[%Y-%m-%d %a %H:%M]")`
#+HUGO_CUSTOM_FRONT_MATTER: :toc true
#+HUGO_AUTO_SET_LASTMOD: t
#+HUGO_TAGS: $1
#+HUGO_CATEGORIES: $2
#+HUGO_DRAFT: false
#+EXPORT_OPTIONS: no-properties

$0
```


### EXPORT_OPTIONS: no-properties {#export-options-no-properties}

作用是防止 org-roam 的 `Properties` 等属性标签被导出
