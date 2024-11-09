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
lastmod: 2024-09-17T15:07:22+08:00
---
[题目链接](https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：数组滑动窗口

### 思路

1. 用两个数组 `cnt_p`、`cnt_s` 分别存储 `p` 每个字符出现的次数以及 `s中要判断的字符串` 的每个字符出现的次数。
2. `cnt_p` 若和 `cnt_s` 相等，则说明当前判断的两个字符串每个字符出现的次数都相等，为字母异位词。

### 代码

```python
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        n, m = len(s), len(p)
        if n < m: return []
        cnt_s = [0] * 26
        cnt_p = [0] * 26
        ans = []

        # 收集一下 p 中的字符个数
        for c in p:
            cnt_p[ord(c) - ord('a')] += 1

        for i in range(n):
            cnt_s[ord(s[i]) - ord('a')] += 1
            # 若 s 中判断的字符串长度比 p 长，则需要缩减以保持一致
            if i >= m:
                cnt_s[ord(s[i - m]) - ord('a')] -= 1
            if cnt_s == cnt_p:
                ans.append(i - m + 1)

        return ans
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

## 方法 1：双指针滑动窗口

### 思路

1. 原理同上，只是把用数组下标保存滑动窗口的边界改为了用双指针保存，更加直观。

### 代码

```python
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        n, m = len(s), len(p)
        if n < m: return []
        cnt_s = [0] * 26
        cnt_p = [0] * 26
        ans = []

        # 收集一下 p 中的字符个数
        for c in p:
            cnt_p[ord(c) - ord('a')] += 1

        left = 0
        for right, c in enumerate(s):
            cnt_s[ord(c) - ord('a')] += 1
            # 若 s 中判断的字符串长度比 p 长，则需要缩减以保持一致
            if right >= m:
                cnt_s[ord(s[left]) - ord('a')] -= 1
                left += 1
            if cnt_s == cnt_p:
                ans.append(left)
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$


