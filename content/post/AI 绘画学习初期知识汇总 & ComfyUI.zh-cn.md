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
lastmod: 2024-12-25T12:56:00+08:00
---
[diffusion model(十五) : IP-Adapter技术小结 | 莫叶何竹🍀](http://www.myhz0606.com/article/ip_adapter)

## ComfyUI 快捷键

C-左键：框选
S-左键：组合移动

## 潜空间 latent

[参考链接](https://zhuanlan.zhihu.com/p/666649803)

1. 剔除杂质，降低维度，方便观察特征。
2. 不可过拟合，不然非常死板；也不能拟合不到位，学习能力会很差。

## Stable Diffusion 原理

[Site Unreachable](https://stable-diffusion-art.com/how-stable-diffusion-work/)


## Sampler 采样器

[采样器](https://zhuanlan.zhihu.com/p/673899723)


## IP-adapter

[将图片作为提示词！！！IP-Adapter详解！！！\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1op421U7Ut/?spm_id_from=333.788.top_right_bar_window_custom_collection.content.click&vd_source=75f81845b7419e2244a942c2be195d61)

[【聊点硬核的: IPAdapter算法理论及在Stable Diffusion中的使用方法(一)】你真的了解IPAdapter吗?\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1aH4y127Mw/?spm_id_from=333.337.search-card.all.click&vd_source=75f81845b7419e2244a942c2be195d61)


![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20241225103235.png)

问题：ip-adapter 加载器和 ip-adapter 模型加载器的区别。

## Tile 平铺预处理器

[让图片更加完美，Tile预处理器详解！！！\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Au4y1P79U/?spm_id_from=333.337.search-card.all.click&vd_source=75f81845b7419e2244a942c2be195d61)