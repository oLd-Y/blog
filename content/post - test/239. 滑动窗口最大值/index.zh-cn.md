---
title: 239. 滑动窗口最大值
categories: 计算机
tags:
  - 数据结构与算法
  - 单调队列
date: 2024-09-21
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-21T10:22:30+08:00
---
[题目链接](https://leetcode.cn/problems/sliding-window-maximum/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：单调队列

### 思路

1.  我们需要一个什么样的容器来保存遍历过程中的元素以最快地返回滑动窗口中最大的元素？
	- 在遍历过程中，如果滑动窗口的后方出现了更大的元素，则可以把前方比它小的元素都弹出，因为我们只看最大的，这些较小的元素用不到了。
	- 这样，由于最大的元素在首位，我们也可以很轻松地返回答案，也不用对容器做过多地调整。
	- 因此选择双端队列，自行维护单调性即可满足题意。

2. 总结经验：对于那些需要求一定范围内的最值的题目，适合使用单调队列。

### 代码

```python
class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        ans = []
        q = deque()

        for i, x in enumerate(nums):
            while q and nums[q[-1]] <= x:
                q.pop()
            q.append(i)

            if i - q[0] + 1 > k:
                q.popleft()

            if i >= k - 1:
                ans.append(nums[q[0]])

        return ans
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(min(k, U))$，其中 U 是 nums 中的不同元素个数（本题至多为 20001）。双端队列至多有 k 个元素，同时又没有重复元素，所以也至多有 U 个元素，所以空间复杂度为 O(min(k,U))。返回值的空间不计入。


