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
lastmod: 2024-09-15T19:11:15+08:00
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

1. 方法 1 中找两边最大高度，是为了找出两个高度中的较小值，然后以较小值为接水的高度计算答案。
2. 既然如此，我们可以直接使用两个指针记录两边高度的最大值，哪边小了，就把哪边单位宽度可以接的雨水加上。
![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240914093520.png)

### 代码

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        n = len(height)
        pre_max = suf_max = 0
        ans = 0
        left, right = 0, n - 1
        
        while left < right:
            pre_max = max(pre_max, height[left])
            suf_max = max(suf_max, height[right])
            if pre_max < suf_max:
                ans += pre_max - height[left]
                left += 1
            else: 
                ans += suf_max - height[right]
                right -= 1
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

## 方法 3：单调栈

### 思路

1. 
### 代码

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        ans = 0
        st = []

        for i, h in enumerate(height):
            while st and h >= height[st[-1]]:
                bottom_h = height[st.pop()]
                if not st:
                    break
                left = st[-1]
                dh = min(height[left], h) - bottom_h
                ans += dh * (i - left - 1)
            st.append(i)
            
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


