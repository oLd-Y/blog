---
title: 42. 接雨水
categories: 计算机
tags:
  - 数据结构与算法
  - 前后缀分解
  - 双指针
  - 单调栈
date: 2024-09-13
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-13T13:05:35+08:00
---
[题目链接](https://leetcode.cn/problems/trapping-rain-water/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：前后缀分解

### 思路

1. 计算 x 轴上每个单位可以接的雨水的大小，然后将他们累加起来。

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240913130258.png)

### 代码

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        pre_max = [0] * n
        suf_max = [0] * n
        
        pre_max[0] = height[0]
        for i in range(1, n):
            pre_max[i] = max(height[i], pre_max[i - 1])
        
        suf_max[-1] = height[-1]
        for i in range(n - 2, -1, -1):
            suf_max[i] = max(height[i], suf_max[i + 1])

        ans = 0
        for h, pre, suf in zip(height, pre_max, suf_max):
            ans += min(pre, suf) - h
        
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

## 方法 2：双指针（方法 1 优化）

### 思路

1. 我们可以在找当前单位的左右最大值的时候就计算答案，等找完了，答案也就出来了。


### 代码

```python

```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


