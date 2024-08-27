---
title: 3264. K 次乘运算后的最终数组 I
categories: 计算机
tags:
  - 数据结构与算法
  - 数组
date: 2024-08-26
description: 
image: 
weight: 1
draft: false
lastmod: 2024-08-26T20:23:53+08:00
---
[题目链接](https://leetcode.cn/problems/final-array-state-after-k-multiplication-operations-i/)

## 方法 1：直接模拟

### 思路

1. 根据题意，直接执行 `k` 次，每次将当前数组中最小的元素 `x` 替换为 `x * multipler`。

### 代码

```python
class Solution:
    def getFinalState(self, nums: List[int], k: int, m: int) -> List[int]:
        for _ in range(k):
            nums[nums.index(min(nums))] *= m
        return nums
```

### 复杂度
- 时间复杂度：`O(k)`。
- 空间复杂度：`O(1)`，没有用到额外的空间。


