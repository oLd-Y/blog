---
title: 160. 相交链表
categories: 计算机
tags:
  - 数据结构与算法
  - 链表
  - 双指针
date: 2024-10-05
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-05T08:54:13+08:00
---
[题目链接](https://leetcode.cn/problems/intersection-of-two-linked-lists/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：双指针

### 思路

1. 让一个指针 A 走完 headA 之后走 headB，len(headA) + len(headB) = len(headB) + len(headA)，只要他们能够相遇，A 和 B 走的路程也一定是一样的。所以只要他们能够相遇，相遇的第一个节点就是相交的结点。

### 代码

```python
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        A = headA
        B = headB
        while A != B:
            A = A.next if A else headB
            B = B.next if B else headA
        return A
```

### 复杂度
- 时间复杂度：$O(m + n)$。
- 空间复杂度：$O(1)$。


