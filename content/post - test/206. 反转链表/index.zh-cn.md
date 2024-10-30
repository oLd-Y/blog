---
title: 206. 反转链表
categories: 计算机
tags:
  - 数据结构与算法
  - 链表
date: 2024-10-06
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-06T13:26:38+08:00
---
[题目链接](https://leetcode.cn/problems/reverse-linked-list/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：递归

### 思路

1. 递归获取子链表的反转之后的头节点，然后将当前层的两个节点反转即可。

### 代码

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
	    # 使 head.next 以及 head.next.next 有效
        if not head or not head.next:
            return head
        p = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return head
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(n)$。递归过程中的栈空间的使用。

## 方法 2：迭代

### 思路

1. 用双指针 `cur` 和 `pre` 一边走一边转换即可，cur 走到 None 的时候，pre 就走到最后一个节点了，返回即可。

### 代码

```python
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        cur, pre = head, None
        while cur:
            tmp = cur.next
            cur.next = pre
            pre = cur
            cur = tmp
        return pre
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。





