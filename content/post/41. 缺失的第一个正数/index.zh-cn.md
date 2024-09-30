---
title: 41. 缺失的第一个正数
categories: 计算机
tags:
  - 数据结构与算法
  - 原地哈希
date: 2024-09-30
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-30T19:18:14+08:00
---
[题目链接](https://leetcode.cn/problems/first-missing-positive/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：原地哈希

### 思路

1. 一个长度为 n 的数组，就算所有的数都为正整数，正整数也最多只有 n 个，因此这个数组本身就可以容纳自己的所有正整数。
2. 如果我们按照一定的索引规则（比如 `索引= 数`，或者 `索引 = 数 - 1` 等）将索引和数进行关联，把数组中小的正整数往前放，大的正整数往后放，那么从左往右数，第一个不符合这个关联规则的索引就是我们要找的最小正整数。
3. 如何进行数和索引匹配的位移？我们可以遍历数组，使用交换，将当前的数换到它的正确位置，并将这个正确位置原来的数换过来，然后持续如此，最终即可得到我们所需的数组。
4. 注意，由于依赖原先的值作为索引，所以只能先将需要 `nums[i]` 作为索引的那个数换进来，即 ` nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]`，而不能先将 `nums[i]` 换走，即 ` nums[i], nums[nums[i] - 1] = nums[nums[i] - 1], nums[i]`。

### 代码

```python
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n):
            while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:
                nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]

        for i in range(n):
            if i + 1 != nums[i]:
                return i + 1
        return n + 1
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(n)$。


