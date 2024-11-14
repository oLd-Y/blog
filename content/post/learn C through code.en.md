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
lastmod: 2024-11-14T11:11:59+08:00
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

- After `typedef unsigned char *byte_pointer;`, the type `byte_pointer` has the same functionality of `unsigned char *`
- `%` starts the format, `.2` means minimum 2 digits, pad with zeros if needed.
- `start[i]` = `*(start + i)` = $*(start + i \cdot sizeof(byte\_pointer)$.

Although the floating-pint and the integer data both encode the numeric value 12,345, they have very different byte patterns: 0x00003039 for the integer and 0x4640E400 for floating point. In general, these two formats use dif