---
title: CSAPP 家庭作业 2.65 odd_ones 解释
categories: 计算机
tags:
  - 位运算
  - 掩码
  - CSAPP
date: 2024-12-20
description: 
image: 
weight: 1
draft: false
lastmod: 2024-12-20T09:09:25+08:00
---
CSAPP 的练习题 2.65 要求判断一个无符号数 x 的二进制数中包含的 1 的个数为奇数还是偶数。

相关的解法代码如下所示：
```c
int odd_ones(unsigned x) {
  x ^= x >> 16;
  x ^= x >> 8;
  x ^= x >> 4;
  x ^= x >> 2;
  x ^= x >> 1;
  return x & 1;
}
```

解法思路是利用分治法通过异或把不同位上的奇偶信息合并。假设把 x 的位从中间劈开，左边对齐，上下两两一组，则只有 01 和 10 对会对 x 奇偶性有影响。

