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
lastmod: 2024-09-23T11:21:25+08:00
---
[题目链接](https://leetcode.cn/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：滑动窗口 + 哈希表

### 思路

1. 思路是通过滑动窗口限定 `s` 中的子串，然后比较该子串是否满足题意，不断更新该子串即可。

2. 类似题目：
[438. 找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/) 

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
- 时间复杂度：$O(|\Sigma| m + n)$。判断一次 `cnt_s` 是否覆盖 `cnt_t` 需要 $O(|\Sigma|)$ 时间，找到答案前最多判断 `m` 次，`m` 为 `s` 的长度。生成 `t` 的计数需要 $O(n)$，`n` 为 `t` 的长度。$|\Sigma|$ 为字符集的长度 26 + 26 = 52。
- 空间复杂度：$O(|\Sigma|)$。


## 方法 2：优化

### 思路

1. 方法 1 中，每次判断 cnt_s 是否覆盖 cnt_t 都要花费 $O(|\Sigma|)$ 的时间。但其实只要 t  中每个字符的出现次数都小于等于 s 子串中相应字符的出现次数，就可以说明 s 覆盖了 t。
2. 因此我们可以使用一个变量 less 表示 s 子串中次数不够的字符个数，在每次 s 中的某个字符变得可以/无法满足 t 中相应字符时，对 less 进行修改，这样，我们只需要通过判断 less 是否等于 0 即可判断 s 是否覆盖 t（less 等于 0 说明 s 中没有相对于 t 对应位置次数不够的字符）

### 代码

```python
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        cnt_s = Counter()
        cnt_t = Counter(t)
        ans_left, ans_right = -1, len(s)
        less = len(cnt_t)

        left = 0
        for right, c in enumerate(s):
            cnt_s[c] += 1
            if cnt_s[c] == cnt_t[c]:
                less -= 1

            while less == 0:
                if ans_right - ans_left > right - left:
                    ans_left, ans_right = left, right
                x = s[left]
                if cnt_s[x] == cnt_t[x]:
                    less += 1
                cnt_s[x] -= 1
                left += 1
        return "" if ans_left == -1 else s[ans_left: ans_right + 1]

```

### 复杂度
- 时间复杂度：$O(m + n)$。
- 空间复杂度：$O(|\Sigma|)$。


