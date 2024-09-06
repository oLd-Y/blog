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
lastmod: 2024-09-06T10:50:59+08:00
---
[题目链接](https://leetcode.cn/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：双指针

### 思路

1. 如果没有 0，则 left 和 right 同步向后搜索；如果出现 0，则 right 需要继续走到没有 0 的位置，而 left 则留下保存 0 的位置，然后二者的值交换一下，继续往后搜索。


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
- 时间复杂度：$O(n)$，每个元素最多被 left 和 right 访问两次。
- 空间复杂度：$O(1)$。


