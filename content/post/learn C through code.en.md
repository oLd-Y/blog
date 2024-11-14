---
title: learn C through code
categories: CS
tags:
  - C
  - learn-X-through-code
date: 2024-11-14
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-14T10:11:50+08:00
---
## Came from CSAPP "Figure 2.4"

```C
#include <stdio.h>
typedef unsigned char *byte_pointer;
void show_bytes(byte_pointer start, size_t len) {
int i;
for (i = 0; i < len; i++)
printf(" %.2x", start[i]);
printf("\n");
}
void show_int(int x) {
show_bytes((byte_pointer) &x, sizeof(int));
}
void show_float(float x) {
show_bytes((byte_pointer) &x, sizeof(float));
}
void show_pointer(void *x) {
show_bytes((byte_pointer) &x, sizeof(void *));
}
```

