---
title: 53. 最大子数组和
categories: 计算机
tags:
  - 数据结构与算法
  - 动态规划
  - 分治法
date: 2024-09-24
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-24T08:44:52+08:00
---
[题目链接](https://leetcode.cn/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：动态规划

### 思路

1. `dp[i]` 定义为以 `nums[i]` 为最后一个元素的区间的最大和。若 `dp[i-1]` < 0，那么 `dp[i]` 的最大值肯定不能加上 `dp[i-1]`。可以得出 $dp[i] = max(dp[i-1] + nu ms, dp[i])$
2. 由于只需要查看 `dp[i-1]`，不需要查看 `dp[i-1]` 之前的最大和，因此只需用一个滚动变量即可。

### 代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans = nums[0]
        pre = 0

        for x in nums:
            pre = max(x, pre + x)
            ans = max(ans, pre)
        
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。

## 方法 1：分治法

### 思路

1. 

### 代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans = nums[0]
        pre = 0

        for x in nums:
            pre = max(x, pre + x)
            ans = max(ans, pre)
        
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。


