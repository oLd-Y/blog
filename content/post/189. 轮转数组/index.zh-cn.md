---
title: 189. 轮转数组
categories: 计算机
tags:
  - 数据结构与算法
  - 数学
  - 智力
date: 2024-09-28
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-29T06:33:45+08:00
---
[题目链接](https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：多次反转

### 思路

1. 先反转整体数组，再反转前 k 个(`[0, k - 1]`)，再反转后面剩余的(`[k, n - 1]`)，即为答案。

### 代码

```python
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def reverse(i: int, j: int) -> None:
            while i < j:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
                j -= 1
        n = len(nums)
        k %= n
        reverse(0, n - 1)
        reverse(0, k - 1)
        reverse(k, n - 1)
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。


[题目链接](https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 2：数学 TODO

### 思路

1. 

### 代码

```python

```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。


