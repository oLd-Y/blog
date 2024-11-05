---
title: 49. 字母异位词分组
categories: 计算机
tags:
  - 数据结构与算法
date: 2024-09-03
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-04T10:01:00+08:00
---
[题目链接](https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：排序

### 思路

1. 遍历字符串数组中的每一个字符串，将排序过后的字符串作为字典的 key，将相同 key 的字符串放到一个组中返回即可。

### 代码

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        mp = collections.defaultdict(list)

        for str in strs:
            key = "".join(sorted(str))
            mp[key].append(str)
        
        return list(mp.values())
```

### 复杂度
- 时间复杂度：$O(n k \log k)$，$O(n)$ 的字符串数组遍历，$O(k \log k)$ 的排序，$O(1)$ 的哈希更改。k 是 strs 中最大 str 的长度。
- 空间复杂度：$O(nk)$，哈希表占用空间，n 个 str，k 为最大 str 长度。

## 方法 1：统计

### 思路

1. 字母同分异构词的所有字母个数都是相等的，将这个“个数”作为 key，相同的都放到同一个 values 中。

### 代码

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        mp = collections.defaultdict(list)

        for str in strs:
            counts = [0] * 26
            for c in str:
                counts[ord(c) - ord('a')] += 1
            mp[tuple(counts)].append(str)
        
        return list(mp.values())
```

### 复杂度
- 时间复杂度：$O(n k)$，$O(1)$ 的时间转化元组。
- 空间复杂度：$O(n k)$，字符串数组所有字符个数为 `nk`，


