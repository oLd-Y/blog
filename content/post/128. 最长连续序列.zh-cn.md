---
title: 128. 最长连续序列
categories: 计算机
tags:
  - 数据结构与算法
  - 哈希表
date: 2024-09-05
description: 
image: 
weight: 1
draft: true
lastmod: 2024-09-05T09:34:12+08:00
---
[题目链接](https://leetcode.cn/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：

### 思路

1. 先将列表转为哈希表，可以直接判断某个数是否存在。
2. 直接的思路是遍历每个数 x，依次判断 x + 1, x + 2, x + 3 ... 是否存在，并更新最长长度。
3. 但对于序列 `x + 1, x + 2, x + 3`，其长度肯定比 `x, x + 1, x + 2, x + 3` 短。因此每次判断连续序列的时候，`x + 1` 及后面的遇到序列都无需再判断。
4. 做法是每次遍历 x 是时候都判断 x - 1 是否存在，存在则跳过此次判断。

### 代码

```python
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest_streak = 0
        nums_set = set(nums)

        for num in nums_set:
            if num - 1 not in nums_set:
                current_num = num
                current_streak = 1

                while current_num + 1 in nums_set:
                    current_num += 1
                    current_streak += 1
                
                longest_streak = max(current_streak, longest_streak)
        return longest_streak
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


