---
title: 283. 移动零
categories: 计算机
tags:
  - 数据结构与算法
  - 双指针
date: 2024-09-06
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-06T10:35:11+08:00
---
[题目链接](https://leetcode.cn/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：双指针

### 思路

1. 只寻找非零的数，把它放到前面即可。
2. 具体的作法是，`left` 指向己处理好的序列的尾部，`right` 则寻找非零的数。

### 代码

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        left = right = 0
        
        while right < n:
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
            right += 1
            
        return nums
```

### 复杂度
- 时间复杂度：
- 空间复杂度：


