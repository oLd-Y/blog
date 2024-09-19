---
title: 303. 区域和检索 - 数组不可变
categories: 计算机
tags:
  - 数据结构与算法
  - 前缀和数组
date: 2024-09-19
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-19T10:50:12+08:00
---
[题目链接](https://leetcode.cn/problems/range-sum-query-immutable/description/)

## 方法 1：前缀和数组

### 思路

1. 本题为前缀和数组的基础例题。通过构建一个前缀和数组，可以快速地求出任意两个区间的和。前缀和适合用在需要频繁计算区间和的题目。
2. 设初始数组为 `a`，前缀和数组为 `s`。
	- `len(s) = len(a) + 1`
	- 我们令前缀和数组的元素 `s[i]` 的值为初始数组 `[0, i - 1]` 区间的元素之和，即 $$s[i] = \sum_{j = 0}^{i - 1}a[j]$$
	- 如此之后，要想求区间 `[left, right]` 之和，就是求 `[0, right] 之和 - [0, left-1] 之和`，可以转化为求 `s[right + 1] - s[left]`。

### 代码

```python

```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


