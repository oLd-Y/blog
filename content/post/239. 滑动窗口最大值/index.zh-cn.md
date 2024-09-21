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
lastmod: 2024-09-21T10:11:55+08:00
---
[题目链接](https://leetcode.cn/problems/sliding-window-maximum/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：单调队列

### 思路

1.  我们需要一个什么样的容器来保存遍历过程中的元素以最快地返回滑动窗口中最大的元素？
	- 在遍历过程中，如果滑动窗口的后方出现了更大的元素，则可以把前方比它小的元素都弹出，因为我们只看最大的，这些较小的元素用不到了。
	- 这样，由于最大的元素在首位，我们也可以很轻松地返回答案，也不用对容器做过多地调整。
	- 因此选择双端队列，自行维护单调性即可满足题意。
	

### 代码

```python

```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(n)$。


