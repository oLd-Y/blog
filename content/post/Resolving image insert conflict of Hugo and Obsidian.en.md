---
title: Resolving image insert conflict of Hugo and Obsidian
categories: 
tags: 
date: 2024-11-06
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-08T08:14:58+08:00
---
I'm using `Hugo` to build my blog and `Obsidian` to locally read notes. However, there is a conflict at their rendering of images.

The hugo achieve all sources from its root, while obsidian vault gets images from its root too (which isn't the same path as hugo's root), and result in the mismatch of the url in an markdown file.

Luckily, hugo provide a functionality of mounting, which enable remapping a path inner it to another inside path. Here is an example of mine to illustrate the solution.

First of all, I have a hugo project called `blog`, and its directory structure would be something like:
```
blog/
├── static/           
│   ├── favicon.ico
│   └── css/
├── content/
│   └── post/
│       ├── file.md
│       └── ...
├── ...
```

I use the `content/post` directory as my obsidian vault, if I want to insert into the `file.md` an image called `img.png` placed in `content/post/images`, which is a subdirectory in my obsidian vault, I tried these urls: 
`![alt image](_image/img.png)` and `![alt image](img.png`, both can be rendered correctly in obsidian, but both failed in the local or remote Hugo site. The reason is said above.

To solve this, we should let Hugo know the path we put the images. Put these code in your hugo config file:
```toml
[[module.mounts]]
source = 'static'
target = 'static'

[[module.mounts]]
source = 'content/post/_images'
target = 'static/_images'
```

Here is the explanation:
- The first mount of source with `static` and target with `static`, is aim to make resources in default hugo static directory not to be overwrited.
- The second mount of source with `content/post/_images` and target `static`

There are several things you need to notice:
1. Check the 


I've written an article to record the solution in English, please help me polish the text to fix it grammar as well as making it more native and fluent without changing its original meanings.


| baseurl       | img url            | remote  | local   |
| ------------- | ------------------ | ------- | ------- |
| `xxx.io/`     | `/_images/img.png` | failed  | succeed |
| `xxx.io/`     | `_images/img.png`  | succeed | succeed |
| `xxx.io/blog` | `/_images/img.png` | failed  | failed  |
| `xxx.io/blog` | `_images/img.png`  | succeed | succeed |
Only obsidian is able to render the image without prefix `/_images`, both remote site and local site fail.

If only file name without directory, only obsidian side can render correctly and both site rendered failed.

Here are detailed test outcomes:

baseurl = "https://old-y.github.io/", url = `/_images/figure%201.3%20compliation%20system.png`, 
- remote failed, src = `https://old-y.github.io/_images/figure%201.3%20compliation%20system.png`
- local succeed, src = `http://localhost:1313/_images/figure%201.3%20compliation%20system.png`

baseurl = "https://old-y.github.io/", url = `_images/figure%201.3%20compliation%20system.png`, 
- remote succeed, src = `https://old-y.github.io/blog/_images/figure%201.3%20compliation%20system.png`
- local succeed, src = `http://localhost:1313/_images/figure%201.3%20compliation%20system.png`

baseurl = "https://old-y.github.io/blog", url = `/_images/figure%201.3%20compliation%20system.png`, 
- remote failed, src = `https://old-y.github.io/_images/figure%201.3%20compliation%20system.png`
- local failed, src = `http://localhost:1313/_images/figure%201.3%20compliation%20system.png`

baseurl = "https://old-y.github.io/blog", url = `_images/figure%201.3%20compliation%20system.png`, 
- remote succeed, src = `https://old-y.github.io/blog/_images/figure%201.3%20compliation%20system.png`; 
- local succeed, src = `http://localhost:1313/blog/_images/figure%201.3%20compliation%20system.png`


