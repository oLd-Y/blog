---
title: 41. 缺失的第一个正数
categories: 计算机
tags:
  - 数据结构与算法
  - 原地哈希
date: 2024-09-30
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-30T15:44:22+08:00
---
[题目链接](https://leetcode.cn/problems/first-missing-positive/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：原地哈希

### 思路

1. 

### 代码

```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        for i, x in enumerate(nums):
            while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:
                nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]

        for i in range(n):
            if i + 1 != nums[i]:
                return i + 1
        return n + 1
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(n)$。


