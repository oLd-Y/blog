---
title: Resolving image insert conflict of Hugo and Obsidian
categories: 
tags: 
date: 2024-11-06
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-06T10:17:34+08:00
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

I make the `content/post` as my obsidian vault, as said above, if I want to insert an image called `test.png` placed in `images` subdirectory of the obsidian vault into the `file.md`, write the url with such format:
```markdown
![alt image]()
```