---
title: 76. 最小覆盖子串
categories: 计算机
tags:
  - 数据结构与算法
  - 滑动窗口
  - 哈希表
  - 双指针
date: 2024-09-22
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-22T08:01:31+08:00
---
[题目链接](https://leetcode.cn/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：滑动窗口 + 哈希表

### 思路

1. 本道题和 [438. 找到字符串中所有字母异位词(https://leetcode.cn/problems/find-all-anagrams-in-a-string/)](https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/) 类似。
2. 

### 代码

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        cnt_s = Counter()
        cnt_t = Counter(t)
        ans_left, ans_right = -1, len(s)

        left = 0
        for right, c in enumerate(s):
            cnt_s[c] += 1
            while cnt_s >= cnt_t:
                if ans_right - ans_left > right - left:
                    ans_left, ans_right = left, right
                cnt_s[s[left]] -= 1
                left += 1
        return "" if ans_left < 0 else s[ans_left: ans_right + 1] 
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(n)$。


