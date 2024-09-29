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
lastmod: 2024-09-29T07:35:14+08:00
---
[题目链接](https://leetcode.cn/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：前后缀分解

### 思路

1. 我们将数组分为除自身外的前后数组，定义：
	- $pre[i]$ 为 $nums[0]$ 到 $nums[i - 1]$ 的乘积。
	- $suf[i]$ 为 $nums[i + 1]$ 到 $nums[n - 1]$ 的乘积。
	- 这样之后，每个 i 对应的答案即为这个位置前后缀的乘积，有 $$ans[i] = pre[i] * suf[i]$$
	返回每个位置的答案即可。
2. 对于 $pre[0]$ 以及 $suf[n-1]$，如果希望跳过自身又不影响后续的乘积计算，则令其为 1 。

### 代码

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        pre = [1] * n
        for i in range(1, n):
            pre[i] = pre[i - 1] * nums[i - 1]
        
        suf = [1] * n
        for i in range(n - 2, -1, -1):
            suf[i] = suf[i + 1] * nums[i + 1]

        return [p * s for p, s in zip(pre, suf)]
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(n)$。

## 方法 2：方法 1 优化

### 思路

1. 由于答案不计入空间，因此我们可以先计算后缀，然后在遍历数组的同时计算用一个变量保存前缀并计算答案，就不用使用额外空间了。

### 代码

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        # 先计算后缀
        ans = [1] * n
        for i in range(n - 2, -1, -1):
            ans[i] = ans[i + 1] * nums[i + 1]
        
        pre = 1
        for i, x in enumerate(nums):
            ans[i] *= pre
            pre *= x
        
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。
