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
lastmod: 2024-09-19T14:35:17+08:00
---
[题目链接](https://leetcode.cn/problems/subarray-sum-equals-k/solutions/2781031/qian-zhui-he-ha-xi-biao-cong-liang-ci-bi-4mwr/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：前缀和 + 哈希表

### 思路

1. `s[j] - s[i] = k` => `s[i] = s[j] - k`，则遍历 j，在过程中，理论上有多少个 `s[i]` 就有多少个 k；但由于 `s[i]` 会重复。

### 代码

```python

```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


