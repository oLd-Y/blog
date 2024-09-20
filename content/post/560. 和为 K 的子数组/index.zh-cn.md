---
title: 560. 和为 K 的子数组
categories: 计算机
tags:
  - 数据结构与算法
  - 哈希表
  - 前缀和
date: 2024-09-17
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-20T17:45:08+08:00
---
[题目链接](https://leetcode.cn/problems/subarray-sum-equals-k/solutions/2781031/qian-zhui-he-ha-xi-biao-cong-liang-ci-bi-4mwr/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：前缀和 + 哈希表

### 思路

1. 设 `nums` 的前缀和数组某个元素的值为 `pre`，则理解这个题目的关键公式为 `pre - (pre - k) = k`。
2. 如何理解？
	- 设数组 `nums` 的前缀和数组为 `s`，则 `nums` 任意区间 `[i, j]` 的和可以通过 `s[j + 1] - s[i]` 来计算。
	- 若有一个前缀和数组元素的值为 `pre`，那么要想

4. `s[j] - s[i] = k` => `s[i] = s[j] - k`，则遍历 j，在过程中，理论上有多少个 `s[i]` 就有多少个 k；但由于 `s[i]` 会重复。

### 代码

```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        ans = 0
        pre = 0
        cnt = defaultdict(int)

        cnt[0] = 1
        for x in nums:
            pre += x
            ans += cnt[pre - k]
            cnt[pre] += 1
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


