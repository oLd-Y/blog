---
title: 矩阵旋转坐标公式
categories: 计算机
tags:
  - 数据结构与算法
  - 公式
  - 矩阵
date: 2024-10-03
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-03T10:15:59+08:00
---
## n * n 矩阵

关于旋转，一共有 3 种情况：

### 顺时针旋转 90 °

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20241003095937.png)

### 逆时针旋转 90 °
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20241003100032.png)
### 顺时针旋转 180 °
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20241003100205.png)

### 总结

1. 对于 `(i' + 1) + (j + 1) = n + 1` 的解释：我们把下标为 0 的 `i'`，`j` 换算成从 1 开始的个数（第几个），然后它们相加之后会比实际一行/列的个数多 1 个。
2. 对于一个 n * n 的矩阵中一个坐标为 (i, j) 的点，其旋转后的坐标分别为：
	1. 顺时针旋转 90 °：`(j, n - i - 1)`
	2. 逆时针旋转 90 °：`(n - j - 1, i)`
	3. 顺时针旋转 180 °：`(n - j - 1, n - i - 1)`