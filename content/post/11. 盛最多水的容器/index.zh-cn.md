---
title: 11. 盛最多水的容器
categories: 计算机
tags:
  - 数据结构与算法
  - leetcode
  - 双指针
date: 2024-09-09
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-09T11:11:33+08:00
---
[题目链接](https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：双指针

### 思路

1. `l` 和 `r` 形成了一个接雨水的区域，那么要想找到更大的区域，需要在 l 和 r 中间再找一条边构成新的区域，并且需要移动 l 和 r 中较小的那个。反证法证明如下：假设 l 较大，若移动 l：
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240909110839.png)

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240909110940.png)


### 代码

```python

```

### 复杂度
- 时间复杂度：
- 空间复杂度：


