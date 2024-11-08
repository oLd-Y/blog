---
title: Resolving image insert conflict of Hugo and Obsidian
categories: 
tags: 
date: 2024-11-06
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-08T09:16:34+08:00
---
I'm using `Hugo` to build my blog and `Obsidian` to locally read notes. However, there is a conflict in their rendering of images.

Hugo accesses all sources from its root, while obsidian vault gets images from its root too (which isn't the same path as hugo's root). This result in mismatched URLs in markdown files.

Fortunately, Hugo provides a mounting functionality that enable remapping paths within the project. Here's an example of my solution.

First, I have a Hugo project called `blog`, with a directory structure like this:

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

I use the `content/post` directory as my Obsidian vault. When I want to insert an image `img.png` (placed in `content/post/images`) into `file.md`, I tried these URLs: 
`![alt image](_image/img.png)` and `![alt image](img.png)`. Both rendered correctly in obsidian but failed in both local and remote Hugo sites for the reason mentioned above.

To solve this, we need to let Hugo know where we put the images. Add these configuration in your Hugo config file:
```toml
[[module.mounts]]
source = 'static'
target = 'static'

[[module.mounts]]
source = 'content/post/_images'
target = 'static/_images'
```

Here is the explanation:
- The first mount with same `static` of both source and target is aim to make resources in default hugo static directory not to be overwrited.
- The second mount of source `content/post/_images` and target `static` is try to mount the former to the latter. In that case, both your hugo site and obsidian with get the `_images` path properly.

There are several things you need to notice:
1. Hugo will combine all of the configuration files into one file, and place it in the root of hugo project. Thus the path in your hugo config code above starts from current directory with no leading slash `/`. 
2. The `static` directory will also be integrated and disapear, and the image url in your markdown files shouldn't have the leading `/`, because it will be interpreted to your host root rather than hugo project root.


Here are the different test results of whether there is a leading `/` about remote and local hugo site.

| baseurl       | img url            | remote  | local   |     |
| ------------- | ------------------ | ------- | ------- | --- |
| `xxx.io/`     | `/_images/img.png` | failed  | succeed |     |
| `xxx.io/`     | `_images/img.png`  | succeed | succeed |     |
| `xxx.io/blog` | `/_images/img.png` | failed  | failed  |     |
| `xxx.io/blog` | `_images/img.png`  | succeed | succeed |     |

Besides, only obsidian is able to render the image without prefix `/_images`, both remote site and local site fail.

Detailed test outcomes are as follows:

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

What we can learn from them is that `baseurl` only take effects in the local site.

