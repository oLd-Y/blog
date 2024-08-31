---
title: 1. 两数之和
categories: 计算机
tags:
  - 数据结构与算法
  - 哈希表
date: 2024-08-31
description: 
image: 
weight: 1
draft: false
lastmod: 2024-08-31T16:17:00+08:00
---
[题目链接](https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：暴力枚举

### 思路

1. 遍历数组，访问某个元素时，查看其后是否存在某个元素与其组成 target。

### 代码

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []
```

### 复杂度
- 时间复杂度：`O(N^2)`
- 空间复杂度：`O(1)`

## 方法 2：哈希表

### 思路

1. 首先一次遍历即可访问到所有的元素。

1. 方法 1 中，第一次遍历的结果并没有产生效益。我们可以用一个哈希表将遍历的结果保存起来，每次访问下一个元素的时候去哈希表里查，而不是再次遍历数组。

### 代码

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []
```

### 复杂度
- 时间复杂度：
- 空间复杂度：
