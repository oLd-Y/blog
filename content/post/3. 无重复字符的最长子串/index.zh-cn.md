---
title: 3. 无重复字符的最长子串
categories: 计算机
tags:
  - 数据结构与算法
  - 滑动窗口
  - 双指针
date: 2024-09-16
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-16T20:45:09+08:00
---
题目链接

## 方法 1：滑动窗口

### 思路

1. 用 `left` 和 `right` 来保存滑动窗口。滑动窗口内的就是答案要求的不包含重复字符的字符串。
2. `right` 用于遍历数组，每遍历一个字符，就移动 `left`，直到滑动窗口中没有重复字符为止。

### 代码

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = 0
        left = 0
        # 统计窗口内的字符数，根据这个来移动 left 指针
        cnt = Counter()

        for right, c in enumerate(s):
            cnt[c] += 1
            while cnt[c] > 1:
                cnt[s[left]] -= 1
                left += 1
            ans = max(ans, right - left + 1)
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$
- 空间复杂度：$O(\Sigma)$，$\Sigma$ 为字符集的长度， <= 128。


