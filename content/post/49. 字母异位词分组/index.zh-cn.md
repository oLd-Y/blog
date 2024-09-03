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
lastmod: 2024-09-03T08:59:59+08:00
---
[题目链接](https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：排序

### 思路

1. 遍历字符串数组中的每一个字符串，将排序过后的字符串作为字典的 key，将相同 key 的字符串放到一个组中返回即可。

### 代码

```python
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = collections.defaultdict(list)

        for str in strs:
            key = "".join(sorted(str))
            map[key].append(str)
        
        return list(map.values())
```

### 复杂度
- 时间复杂度：$O(n k \log k)$，$O(n)$ 的字符串数组遍历，$O(k \log k)$ 的排序，$O(1)$ 的哈希更改。k 是 strs 中最大 str 的长度。
- 空间复杂度：$O(nk)$，哈希表占用空间，n 个 str，k 为最大 str 长度。

## 方法 1：统计

### 思路

1. 

### 代码

```python

```

### 复杂度
- 时间复杂度：
- 空间复杂度：


