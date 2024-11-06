---
title: Resolving image insert conflict of Hugo and Obsidian
categories: 
tags: 
date: 2024-11-06
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-06T10:01:33+08:00
---
I'm using `Hugo` to build my blog and `Obsidian` to locally read notes. However, there is a conflict at their rendering of images.

The hugo achieve all sources from its root, while obsidian vault gets images from its root too (which isn't the same root), and result in the mismatch of the url.

Luckily, hugo provide a functionality of mounting, which enable remapping a path inner it to another inside path. Here is an example of mine to illustrate the solution.

First of all, I have a hugo project called `blog`, 