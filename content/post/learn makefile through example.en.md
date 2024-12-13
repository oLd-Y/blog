---
title: learn makefile through example
categories: cs
tags:
  - learn-X-through-examples
date: 2024-12-13
description: 
image: 
weight: 1
draft: false
lastmod: 2024-12-13T14:50:59+08:00
---
```makefile
# Variables
CC = gcc
CFLAGS = -Wall -g
SRC_FILES = $(wildcard *.c)
EXE_FILES = $(SRC_FILES:.c=)

# Default target
all: $(EXE_FILES)

# Rule to build each executable
%: %.c
	$(CC) $(CFLAGS) -o $@ $<

# Clean target to remove generated files
clean:
	rm -f $(EXE_FILES)
```

- `$(wildcard ...)` means a function call `wildcard`.
- `$(SRC_FILES:.c=)`, `:` means substitution. The expression here is to replace all `.c` in `SRC_FILES` with empty.
- 