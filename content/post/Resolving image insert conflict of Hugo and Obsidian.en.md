---
title: Resolving image insert conflict of Hugo and Obsidian
categories: CS
tags:
  - tool
date: 2024-11-06
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-08T09:55:20+08:00
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

I use the `content/post` directory as my Obsidian vault. When I want to insert an image `img.png` (placed in `content/post/_images`) into `file.md`, I tried these URLs: 
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
- The first mount with same `static` source and target aims to prevent resources in default Hugo static directory from overwritten.
- The second mount maps `content/post/_images` to `static/_images`, allowing both Hugo site and Obsidian to resolve the `_images` path properly.

Important notes:
1. Hugo will combine all configuration files into one, and place it in the project root. Therefore, paths in the Hugo config above should start from current directory without leading slash `/`. 
2. The `static` directory will be integrated and disappear, and image URLs in markdown files shouldn't have a leading `/` as it will be interpreted as your host root rather than Hugo project root.

Here are the different test results showing how the presence of  leading `/` in an image URLs affects remote and local Hugo sites:

| baseurl       | img url            | remote  | local   |     |
| ------------- | ------------------ | ------- | ------- | --- |
| `xxx.io/`     | `/_images/img.png` | failed  | succeed |     |
| `xxx.io/`     | `_images/img.png`  | succeed | succeed |     |
| `xxx.io/blog` | `/_images/img.png` | failed  | failed  |     |
| `xxx.io/blog` | `_images/img.png`  | succeed | succeed |     |

Note: Only Obsidian can render images without the `/_images` prefix; both remote and local sites requires it.

Detailed outcomes:

1. baseurl = "https://old-y.github.io/", url = `/_images/figure%201.3%20compliation%20system.png`, 
	- remote failed, src = `https://old-y.github.io/_images/figure%201.3%20compliation%20system.png`
	- local succeed, src = `http://localhost:1313/_images/figure%201.3%20compliation%20system.png`
2. baseurl = "https://old-y.github.io/", url = `_images/figure%201.3%20compliation%20system.png`, 
	- remote succeed, src = `https://old-y.github.io/blog/_images/figure%201.3%20compliation%20system.png`
	- local succeed, src = `http://localhost:1313/_images/figure%201.3%20compliation%20system.png`
3. baseurl = "https://old-y.github.io/blog", url = `/_images/figure%201.3%20compliation%20system.png`, 
	- remote failed, src = `https://old-y.github.io/_images/figure%201.3%20compliation%20system.png`
	- local failed, src = `http://localhost:1313/_images/figure%201.3%20compliation%20system.png`
4. baseurl = "https://old-y.github.io/blog", url = `_images/figure%201.3%20compliation%20system.png`, 
	- remote succeed, src = `https://old-y.github.io/blog/_images/figure%201.3%20compliation%20system.png`; 
	- local succeed, src = `http://localhost:1313/blog/_images/figure%201.3%20compliation%20system.png`

The key finding is that baseurl only affects the local site behavior. With leading slash `/`, no matter how I change the `baseurl` in config file, the remote site will interpreted it into `xxx/_images` rather than `xxx/blog/_images`, but the local site will change accordingly.
