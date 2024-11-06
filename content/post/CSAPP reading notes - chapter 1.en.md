---
id: CSAPP reading notes - chapter 1
aliases: 
tags:
  - foundation
categories: CS
date: 2024-11-04
draft: false
lastmod: 2024-11-06T11:50:18+08:00
title: CSAPP reading notes - chapter 1
weight: 1
---
## 1.1 Information Is Bits + Context

All information in a system is represented as a bunch of bits.
## 1.2 Programs Are Translated by Other Programs into Different Forms

The gcc compiler driver reads the source file hello.c and translated into an execuable object file hello. The translation is performed in the sequence of four phases, 
- Preprocessing phase.
- Compliation phase.
- Assembly phase.
- Linking phase.

The programs that perform these phases (preprocessor, compilor, assembler, and linker) is known collectively as the *compliation system*. 

Here is the phase figure:
![compliation system](figure%201.3%20compliation%20system.png)

The outcome of image rendering on remote **site** and local **site** after mount `content/post/_images` onto `static/_images`.

| baseurl       | img url            | remote  | local   |
| ------------- | ------------------ | ------- | ------- |
| `xxx.io/`     | `/_images/img.png` | failed  | succeed |
| `xxx.io/`     | `_images/img.png`  | succeed | succeed |
| `xxx.io/blog` | `/_images/img.png` | failed  | failed  |
| `xxx.io/blog` | `_images/img.png`  | succeed | succeed |

If only file name without directory, only obsidian side can render correctly and both site rendered failed.

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


