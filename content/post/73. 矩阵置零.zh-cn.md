---
title: 73. 矩阵置零
categories: 计算机
tags:
  - 数据结构与算法
  - 矩阵
date: 2024-10-01
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-01T09:32:17+08:00
---
[题目链接](https://leetcode.cn/problems/set-matrix-zeroes/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：使用标记数组

### 思路

1. 遍历矩阵，通过行数组 row 以及列数组 col 将含有 0 的行/列记录下来。
2. 再次遍历矩阵，根据 row/col 判断，如果当前行/列有 0，则将当前元素置为 0 。
3. False 和 True 可以改为 0 和 1，但为了可读性最好不要改。

### 代码

```python
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        m, n = len(matrix), len(matrix[0])
        row, col = [False] * m, [False] * n

        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    row[i] = col[j] = True
        
        for i in range(m):
            for j in range(n):
                if row[i] or col[j]:
                    matrix[i][j] = 0
```

### 复杂度
- 时间复杂度：$O(m n)$。
- 空间复杂度：$O(m + n)$。

## 方法 2：方法 1 空间优化 TODO


