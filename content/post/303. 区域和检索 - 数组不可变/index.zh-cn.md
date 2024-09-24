---
title: 303. 区域和检索 - 数组不可变
categories: 计算机
tags:
  - 数据结构与算法
  - 前缀和
  - 基础例题
date: 2024-09-19
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-25T05:01:37+08:00
---
[题目链接](https://leetcode.cn/problems/range-sum-query-immutable/description/)

## 方法 1：前缀和

### 思路

1. 本题为前缀和数组的基础例题。通过构建一个前缀和数组，可以快速地求出任意两个区间的和。前缀和适合用在对于求区间和有需求的题目。
2. 设初始数组为 `a`，前缀和数组为 `s`。
	- `len(s) = len(a) + 1`
	- 我们令前缀和数组的元素 `s[i]` 的值为初始数组 `[0, i - 1]` 区间的元素之和，即 $$s[i] = \sum_{j = 0}^{i - 1}a[j]$$
	- 如此之后，求区间 `[left, right]` 之和，就是求 `[0, right] 之和` - `[0, left - 1] 之和`，可以转化为求 `s[right + 1] - s[left]`。

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240919114353.png)


![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240919114025.png)


### 代码

```python
class NumArray:

    def __init__(self, nums: List[int]):
        s = [0] * (len(nums) + 1)
        for i, x in enumerate(nums):
            s[i + 1] = s[i] + x
        self.s = s

    def sumRange(self, left: int, right: int) -> int:
        return self.s[right + 1] - self.s[left]
```

### 复杂度
- 时间复杂度：初始化 s 为 $O(n)$，`sumRange` 为 $O(1)$。
- 空间复杂度：$O(n)$。


