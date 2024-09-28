---
title: 238. 除自身以外数组的乘积
categories: 计算机
tags:
  - 数据结构与算法
  - 前后缀分解
date: 2024-09-29
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-29T06:54:17+08:00
---
[题目链接](https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：前后缀分解

### 思路

1. 我们将数组分为除自身外的前后数组，定义：
	- $pre[i]$ 为 $nums[0]$ 到 $nums[i - 1]$ 的乘积。
	- $suf[i]$ 为 $nums[i + 1]$ 到 $nums[n - 1]$ 的乘积。
	- 这样之后，每个 i 对应的答案即为这个位置前后缀的乘积，有 $$ans[i] = pre[i] * suf[i]$$
	返回每个位置的答案即可。
2. 题目保证每个数组至少有两个元素，则除开自身的

### 代码

```python

```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(n)$。


