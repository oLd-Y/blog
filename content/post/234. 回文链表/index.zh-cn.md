---
title: 234. 回文链表
categories: 计算机
tags:
  - 数据结构与算法
  - 链表
  - 双指针
  - 快慢指针
  - 反转
date: 2024-10-07
description: 
image: 
weight: 1
draft: false
lastmod: 2024-10-07T07:48:20+08:00
---
[题目链接](https://leetcode.cn/problems/palindrome-linked-list/description/?envType=study-plan-v2&envId=top-100-liked)

## 方法 1：快慢指针 + 反转

### 思路

1. 将链表一半的节点（这里选后半）反转，然后用两个指针依次判断镜像节点是否相等，以此来判断是否为回文链表。
2. 用快慢指针判断链表的中点。若链表的个数为奇数，则 slow 会落在中间节点；若为偶数，则 slow 会落在后半的第一个节点上。

### 代码

```python
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow = fast = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        prev = None
        while slow:
            tmp = slow.next
            slow.next = prev
            prev = slow
            slow = tmp
        
        while prev:
            if prev.val != head.val:
                return False
            prev = prev.next
            head = head.next
        
        return True
```

### 复杂度
- 时间复杂度：$O(n)$。
- 空间复杂度：$O(1)$。


