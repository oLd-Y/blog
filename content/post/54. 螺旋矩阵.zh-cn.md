---
title: 54. 螺旋矩阵
categories: 计算机
tags:
  - 数据结构与算法
  - 矩阵
date: 2024-10-02
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-02T07:14:34+08:00
---
[题目链接](https://leetcode.cn/problems/spiral-matrix/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：模拟

### 思路

1. 把当前行/列涂满之后换下一列/行涂即可。

### 代码

```python
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix: return []
        m, n = len(matrix), len(matrix[0])
        l, r, t, b, res = 0, n - 1, 0, m - 1, []

        while True:
            for j in range(l, r + 1):
                res.append(matrix[t][j])
            t += 1
            if t > b:
                break
            for i in range(t, b + 1):
                res.append(matrix[i][r])
            r -= 1
            if r < l:
                break
            for j in range(r, l - 1, -1):
                res.append(matrix[b][j])
            b -= 1
            if b < t:
                break
            for i in range(b, t - 1, -1):
                res.append(matrix[i][l])
            l += 1
            if l > r:
                break

        return res
```

### 复杂度
- 时间复杂度：$O(m n)$。
- 空间复杂度：$O(1)$。


