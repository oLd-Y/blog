---
title: 438. 找到字符串中所有字母异位词
categories: 计算机
tags:
  - 数据结构与算法
  - 滑动窗口
  - 双指针
  - 哈希表
date: 2024-09-17
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-17T13:59:56+08:00
---
[题目链接](https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：数组滑动窗口

### 思路

1. 用两个数组 `cnt_p`、`cnt_s` 分别存储 `p` 每个字符出现的次数以及 `s中要判断的字符串` 的每个字符出现的次数。
2. `cnt_p` 若和 `cnt_s` 相等，则说明当前判断的两个字符串每个字符出现的次数都相等，为字母异位词。
3. 

### 代码

```python

```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$


