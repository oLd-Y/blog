---
title: 704. 二分查找
categories: 计算机
tags:
  - 数组
  - 二分
date: 2024-07-02
description: 
image: 
weight: 1
draft: false
lastmod: 2024-09-19T19:24:39+08:00
---
[题目链接](https://leetcode.cn/problems/binary-search/)

### 方法 ：二分

#### 思路

1. 双闭区间时，`left` 和 `right` 修改过后，说明之前的区间之外没有答案；同样地，说明当前区间内可能存在答案。因此，即使 `left` 和 `right` 指向同一个位置，这个位置也是没有验证过的，需要进行验证。

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240702174340.png)

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240702174352.png)


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
- 时间复杂度：$O(\log n)$
- 空间复杂度：$O(1)$



