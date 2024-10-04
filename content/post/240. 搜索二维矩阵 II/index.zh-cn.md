---
title: 240. 搜索二维矩阵 II
categories: 计算机
tags:
  - 数据结构与算法
  - 矩阵
date: 2024-10-04
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-04T07:58:27+08:00
---
[题目链接](https://leetcode.cn/problems/search-a-2d-matrix-ii/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：类二分法

### 思路

1. 根据“有序 + 找目标数”这个特性，我们可以联想到二分法。我们只要在矩阵中找到一根尽可能长的链条，就能尽可能多地进行排除。
2. 通过观察，我们很容易找到最长的有序链条为从左上角到右下角的那个直角数列，不过与一般二分法不同的是，这个数列的“中间数” mid 已经是固定的了。每次去掉“一半”的数之后，就会形成一个新的矩阵，用同样的方法进行排除即可。

### 代码

```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        i, j = 0, n - 1
        while i < m and j > -1:
            if matrix[i][j] > target:
                j -= 1
            elif matrix[i][j] < target:
                i += 1
            else: 
                return True
        return False
```

### 复杂度
- 时间复杂度：$O(m + n)$。
- 空间复杂度：$O(1)$。


