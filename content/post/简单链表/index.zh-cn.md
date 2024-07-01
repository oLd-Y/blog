---
title: 简单链表
categories: 数据结构与算法
tags:
  - 链表
  - 双指针
date: 2024-06-30
description: 数据结构与算法-简单链表类型做过的题目汇总
image: cover.jpg
weight: 1
draft: false
lastmod: 2024-07-01T13:20:19+08:00
---

## 21. 合并两个有序链表

题目链接：[LeetCode 21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/description/)

### 方法1：链表 + 双指针

#### 思路

1. 创建一个 cur 作为新链表，list1 和 list2 不断比较，cur根据比较的大小随之更新。
2. 最后还需要把剩余的链表接上。

#### 代码

```python
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        cur = dum = ListNode(-1)
        while list1 and list2:
            if list1.val < list2.val:
                cur.next, list1 = list1, list1.next
            else:
                cur.next, list2 = list2, list2.next
            cur = cur.next
        cur.next = list1 if list1 else list2
        return dum.next
```

#### 复杂度
- 时间复杂度：$O(m + n)$，遍历 2 个链表花费的时间。
- 空间复杂度：$O(1)$，只使用了 cur 和 dum 常数空间。