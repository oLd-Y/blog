---
title: 53. 最大子数组和
categories: 计算机
tags:
  - 数据结构与算法
  - 动态规划
  - 分治法
  - 贪心
date: 2024-09-24
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-26T09:05:26+08:00
---
[题目链接](https://leetcode.cn/problems/maximum-subarray/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：动态规划

### 思路

1. `dp[i]` 定义为以 `nums[i]` 为最后一个元素的区间的最大和。若 `dp[i-1]` < 0，那么 `dp[i]` 的最大值肯定不能加上 `dp[i-1]`。可以得出 $dp[i] = max(dp[i-1] + nu ms, dp[i])$
2. 由于只需要查看 `dp[i-1]`，不需要查看 `dp[i-1]` 之前的最大和，因此只需用一个滚动变量即可。

### 代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans = nums[0]
        pre = 0

        for x in nums:
            pre = max(x, pre + x)
            ans = max(ans, pre)
        
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。

## 方法 2：前缀和

### 思路

1. 由于前缀和可以计算出任意一个连续区间的和，因此我们可以在遍历过程中维护一个最小的前缀和，这样 `当前前缀和 - 最小前缀和` 就是当前的最大连续区间，不断更新答案的最大值即可。

### 代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans = -inf
        min_pre = pre = 0

        for x in nums:
            pre += x
            ans = max(ans, pre - min_pre)

            min_pre = min(pre, min_pre)
        
        return ans
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。

## 方法 3：贪心

### 思路

1. 如果一个和变为了负数，那么后续的求和一定不是最大值，直接舍弃，从下一个数开始求和。
2. 保存求和过程中的最大值即可。

### 代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sum = 0
        max_sum = -inf

        for x in nums:
            sum += x
            max_sum = max(max_sum, sum)
            if sum < 0: 
                sum = 0
        return max_sum
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。

## 方法 4：分治法

### 思路

1. 对于一个区间 `[left, ritht]`，从中间（ mid ）分成两个区间 l、r。我们只需要知道 l 和 r 的 3 个子区间相关的和以及 1 个区间和，就可以**通过 l 和 r 求出当前区间的相应的值**。这三个 l、r 的子区相关的和分别为：最大前缀和, 最大后缀和, 最大子区间和。
2. 对于**当前**区间：
	- 其最大前缀和，要么是左子区间 l 的最大前缀和，要么是从左子区间 l 一直连续到右子区间 r 的最大前缀这个区间的和（其值即为 l 的区间和 + r 的最大前缀和）
	- 其最大后缀和，要么是右子区间 r 的最大后缀和，要么是从左子区间 l 的最大后缀一直连续到右子区间 r 的这个区间的和（其值即为 l 的最大后缀和 + r 的区间和）
	- 其最大子区间和，要么就是左子区间 l 的最大子区间和，要么就是右子区间 l 的最大子区间和，要么左子区间 l 的最大后缀和 + 右子区间 l 的最大前缀和。
	- 至与当前区间的区间和，只要把左右两个子区间 l，r 的和加起来就行。
3. 有了这四个和，我们通过递归到达底层，然后一步步向上求得所需的区间信息，最后就可以求得整个区间的最大子区间和了。

### 代码

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        def dfs(left, right):
            if left == right:
	            # (前缀和, 后缀和, 最大子区间和, 区间和)
                return (nums[left], nums[left], nums[left], nums[left])
            
            mid = left + (right - left) // 2
            l = dfs(left, mid)
            r = dfs(mid + 1, right)
            
            # 区间 [left, right] 的最大前缀和, 最大后缀和, 最大子区间和, 区间和
            max_prefix_sum = max(l[0], l[3] + r[0])
            max_suffix_sum = max(r[1], r[3] + l[1])
            max_subarray_sum = max(l[2], r[2], l[1] + r[0])
            total_sum = l[3] + r[3]
            
            return (max_prefix_sum, max_suffix_sum, max_subarray_sum, total_sum)
        
        return dfs(0, len(nums) - 1)[2]

```

### 复杂度
- 时间复杂度：$O(n)$。需要把
- 空间复杂度：$O(\log n)$。每次递归都会将当前的规模减半，在最后一层返回释放之前会一直占用栈空间，因此总体的复杂度为 $O(\log n)$。
