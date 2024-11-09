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
lastmod: 2024-09-20T21:06:46+08:00
---
[题目链接](https://leetcode.cn/problems/subarray-sum-equals-k/solutions/2781031/qian-zhui-he-ha-xi-biao-cong-liang-ci-bi-4mwr/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：前缀和 + 哈希表

### 思路

1. 设数组 `nums`，其前缀和数组 `s` 中某个元素的值为 `pre`，则理解这个题目的关键公式为 `pre - (pre - k) = k`。
2. 如何理解？
	- 设数组 `nums` 的前缀和数组为 `s`，则 `nums` 任意区间 `[i, j]` 的和可以通过 `s[j + 1] - s[i]` 来计算。
	- 若 `s` 中某个特定元素的值为 `pre`，那么要想 `nums` 存在某个区间的和为 `k`，只需要在 `pre` 之前存在一个元素的值为 `pre - k` 即可，这样 `pre - (pre - k)` 就会等于 `k`。若 `pre` 之前存在多个 `pre - k`，那么答案的数量也会一并增加。
	- 因此我们可以在遍历数组查看 `pre` 的过程中，把用一个哈希表将每个值和它出现的次数存起来。每遍历一个元素 `pre`，就查看一下之前是否存在 `pre - k`，如此往复，最终即可求出答案。
3. 由于我们的所有前缀和只需要在哈希表中获取，因此可以使用单一变量，一边遍历数组，一边获取前缀和。
4. 注意，只能先更新答案，再更新哈希表。因为若先更新哈希表，在 `k = 0` 的情况下，`cnt[pre - k]` 会和 `cnt[pre]` 相等，从而得到错误的答案。例子：`nums = [2], k = 0`。


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
- 空间复杂度：$O(m)$，哈希表的空间占用，即正常计算的前缀和数组中不同前缀和的数量。


