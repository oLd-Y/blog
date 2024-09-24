---
title: 53. 最大子数组和
categories: 计算机
tags:
  - 数据结构与算法
  - 动态规划
  - 分治法
  - 贪心
date: 2024-09-24
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-25T05:35:04+08:00
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

## 方法 2：前缀和

### 思路

1. 由于前缀和可以计算出任意一个连续区间的和，因此我们可以在遍历过程中维护一个最小的前缀和，这样 `当前前缀和 - 最小前缀和` 就是当前的最大连续区间，不断更新答案的最大值即可。

### 代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans = -inf
        min_pre = pre = 0

        for x in nums:
            pre += x
            ans = max(ans, pre - min_pre)

            min_pre = min(pre, min_pre)
        
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。

## 方法 3：贪心

### 思路

1. 如果一个和变为了负数，那么后续的求和一定不是最大值，直接舍弃，从下一个数开始求和。
2. 保存求和过程中的最大值即可。

### 代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sum = 0
        max_sum = -inf

        for x in nums:
            sum += x
            max_sum = max(max_sum, sum)
            if sum < 0: 
                sum = 0
        return max_sum
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。
