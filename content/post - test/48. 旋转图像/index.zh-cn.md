---
title: 48. 旋转图像
categories: 计算机
tags:
  - 数据结构与算法
  - 矩阵
  - 旋转
date: 2024-10-03
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-03T13:19:08+08:00
---
[题目链接](https://leetcode.cn/problems/rotate-image/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：原地旋转

### 思路

1. 将左上角 1/4 的元素进行顺时针旋转即可。用一个 tmp 保存一下首个元素的值防止被冲掉就行。

### 代码

```python
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)

        for i in range(n // 2):
            for j in range((n + 1) // 2):
                tmp = matrix[i][j]
                matrix[i][j] = matrix[n - j - 1][i]
                matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
                matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
                matrix[j][n - i - 1] = tmp
        return matrix
```

### 复杂度
- 时间复杂度：$O(n^2)$。
- 空间复杂度：$O(1)$。


