---
title: 通过基本的 ComfyUI 文生图工作流学习 AI 绘图
categories: 计算机
tags:
  - AI绘画
  - ComfyUI
date: 2024-12-27
description: 
image: 
weight: 1
draft: true
lastmod: 2025-01-09T20:24:01+08:00
---
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20241227152620.png)

以上为一个 ComfyUI（2024-12-27）中文生图的模板。其中涉及的组件有：
- Checkpoint 加载器
- CLIP 文本编码器
- K 采样器
- 空 Latent
- VAE 解码
- 保存图像

## Checkpoint 加载器

作用是将大模型加载进来。

## CLIP 文本编码器

作用是将文本 prompt 编码传递给大模型进行处理。

## K 采样器

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20250109110849.png)


![](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20241227210936.png)

- cfg scale: classifier-free guidance scale

你拿什么来跟我比？

## 模型架构 

版本：sd1.x(512\*512), sdxl(1024\*1024), sd3(1024\*1024)
方法：lighting, hyper, turbo, LCM