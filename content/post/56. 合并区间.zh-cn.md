---
title: 56. 合并区间
categories: 计算机
tags:
  - 数据结构与算法
  - 排序
date: 2024-09-27
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-27T06:14:45+08:00
---
[题目链接](https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：排序

### 思路

1. 按照每个间隔的左端点排序。排序之后，根据当前间隔的左端点的位置（设为 x）与 ans 中最右侧间隔的右端点的位置（设为 y）判断这两个间隔是否进行合并。如果 y <= x，则说明 ans 中最右侧间隔的右端点在当前间隔的左端点的左侧，这两个区间可以进行合并，否则直接将当前端点加入 ans 即可。

### 代码

```python
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key = lambda p: p[0])
        ans = []
        for p in intervals:
            if ans and p[0] <= ans[-1][1]:
                ans[-1][1] = max(p[1], ans[-1][1])
            else:
                ans.append(p)
        return ans
```

### 复杂度
- 时间复杂度：$O(n \log n)$。排序花费时间。
- 空间复杂度：$O(1)$。排序的栈开销和返回值不计入。


