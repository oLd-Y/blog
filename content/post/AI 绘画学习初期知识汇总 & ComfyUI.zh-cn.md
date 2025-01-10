---
title: AI 绘画学习初期知识汇总 & ComfyUI
categories: 计算机
tags:
  - AI绘画
  - ComfyUI
date: 2024-12-24
description: 
image: 
weight: 1
draft: true
lastmod: 2025-01-10T11:23:09+08:00
---
[diffusion model(十五) : IP-Adapter技术小结 | 莫叶何竹🍀](http://www.myhz0606.com/article/ip_adapter)

## ComfyUI 快捷键

C-左键：框选
S-左键：组合移动
C-m：静音（使失效）

## 潜空间 latent

[参考链接](https://zhuanlan.zhihu.com/p/666649803)

1. 剔除杂质，降低维度，方便观察特征。
2. 不可过拟合，不然非常死板；也不能拟合不到位，学习能力会很差。

## Stable Diffusion 原理

[Site Unreachable](https://stable-diffusion-art.com/how-stable-diffusion-work/)


## Sampler 采样器

[采样器](https://zhuanlan.zhihu.com/p/673899723)

[一文讲明ComfyUI Ksampler-CSDN博客](https://blog.csdn.net/sleepless8/article/details/142305153)

## IP-adapter

[将图片作为提示词！！！IP-Adapter详解！！！\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1op421U7Ut/?spm_id_from=333.788.top_right_bar_window_custom_collection.content.click&vd_source=75f81845b7419e2244a942c2be195d61)

[【聊点硬核的: IPAdapter算法理论及在Stable Diffusion中的使用方法(一)】你真的了解IPAdapter吗?\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1aH4y127Mw/?spm_id_from=333.337.search-card.all.click&vd_source=75f81845b7419e2244a942c2be195d61)

[Site Unreachable](https://zhuanlan.zhihu.com/p/671457347)

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20241225103235.png)

问题：ip-adapter 加载器和 ip-adapter 模型加载器的区别。

## Tile 平铺预处理器

[让图片更加完美，Tile预处理器详解！！！\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Au4y1P79U/?spm_id_from=333.337.search-card.all.click&vd_source=75f81845b7419e2244a942c2be195d61)


## ComfyUI 可做到的事以及部分需知关键字

[参考](https://www.bilibili.com/video/BV1BMkgYiEAv?spm_id_from=333.788.videopod.episodes&vd_source=75f81845b7419e2244a942c2be195d61&p=10)

生成视频：ComfyUI examples 网站中的 Stable Video Diffusion, svd

实时绘图，即在 PS 中画图，ComfyUI 实时将图片生成：屏幕分享（通过在 PS 中新建一张相同的画布，把它放到新的窗口，然后监视这个窗口，可以防止只监视部分区域导致的生成问题），

实时追色，即将一张图片的颜色赋予另一张图片：Imitation Hue，图像对比

## 小模型

- embeddings
- lora
- hypernetwork
[Site Unreachable](https://zhuanlan.zhihu.com/p/669895990)

[玩一玩ComfyUI - 文档共建 - LINUX DO](https://linux.do/t/topic/168312)

## LoRA: Low-Rank Adaption

## In-Context LoRA

[In-Context LoRA for Diffusion Transformers](https://ali-vilab.github.io/In-Context-LoRA-Page/)

制作情侣头像之类的

## Deep Anything 深度图

深度预估器

## Controlnet 

- Openpose：姿势。DW Openpose 是升级版。
- Depth：深度图 [comfyui Depth map 最强深度图全解析 细节拉满 带你真正了解深度图的奥秘\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Cr421G73g/?spm_id_from=333.1391.0.0&vd_source=75f81845b7419e2244a942c2be195d61)
- Canny：线稿
- Lineart：线稿
- Holistically-nested Edge Detectio (Soft Edge)
- Scribble
- Inpaint
- Tile
- Reference Only
- Normal Map：法线贴图
### sdxl MistoLine 

线稿上色

[StableDiffusion ControlNet是什么，怎么安装和使用\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV12N4y1o7vC?spm_id_from=333.788.videopod.sections&vd_source=75f81845b7419e2244a942c2be195d61)

[掌握ComfyUI ControlNet：完整指南](https://www.runcomfy.com/zh-CN/tutorials/mastering-controlnet-in-comfyui)

## Animatediff

## 常用提示词


## 环境

requirement.txt 中的 `torch` 和 `xformer` 库直接删掉，不要装，因为要和你的 `cuda` 版本对应。


## SDXL 原理讲解

[Site Unreachable](https://zhuanlan.zhihu.com/p/643420260)



sdxl controlnet: [NoobAI-SDXL-controlnet - a Laxhar Collection](https://huggingface.co/collections/Laxhar/noobai-sdxl-controlnet-67342fca03831b10647d7910)

## flowedit

光影、风格、构图一致构图

## 不同放大图片方法探究

[\[ComfyUI教程\]多种放大方法横向对比，从原理掌握参数调整以及适用场景\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1kqCNYNE3y?spm_id_from=333.788.videopod.sections&vd_source=75f81845b7419e2244a942c2be195d61)

## illustrious 类的模型和 noobai 用的是同一个 controlnet

## noob, obsession，光辉系（illustrious） 是什么 todo


## Flux 1.

Black Forest: 

Comfy org: 

kijai:

安装

### 采样器分类

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20250110081511.png)

### 挂 lora

[Flux超千图测试，15分钟全面系统梳理，零基础小白新手快速上手指南！\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1k2qBY1EzY/?spm_id_from=333.337.search-card.all.click&vd_source=75f81845b7419e2244a942c2be195d61) 9 分钟左右

