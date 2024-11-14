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
lastmod: 2024-11-14T11:47:53+08:00
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
- The expression `&x` creates a pointer to the location holding the object indicated by variable x.
- The cast `(byte_pointer) &x` indicates that whatever type the pointer `&x` had before, the program will now reference a pointer to data of type `unsigned char`. The casts do not change the actual pointer; they simply direct the comiler to refer to tha data being pointed to according to the new data type.


