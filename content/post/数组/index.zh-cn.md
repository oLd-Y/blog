---
title: 数组
catogories: 数据结构与算法
tags:
  - 数组
date: 2024-07-02
description: 数据结构与算法-数组类型做过的题目汇总
image: cover.jpg
weight: 1
draft: false
lastmod: 2024-07-02T13:01:00+08:00
---
## 704. 二分查找

题目链接：[704. 二分查找](https://leetcode.cn/problems/binary-search/)

### 方法 ：二分

#### 思路

1. 闭区间时，如果循环条件中的 `while left <= right` 改为 `while left < right`，
2. 

#### 代码

```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        return -1
```

#### 复杂度
- 时间复杂度：
- 空间复杂度：


