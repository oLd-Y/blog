---
title: learn x86-64 assembly through code
categories: CS
tags:
  - learn-x-through-code
date: 2024-11-14
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-14T09:19:32+08:00
---
## Came from "2.1.3 Addressing and Byte Ordering"

`4004d3: 01 05 43 0b 20 00 add %eax,0x200b43(%rip)`
- `4004d3` is the memory address where this instruction is located (in hexadecimal).
- `01 05 43 0b 20 00`, is the mechine code (raw bytes) of the instruction.
- `0x200b43(%rip)` means relative address. `add %eax,0x200b43(%rip)` adds the value in the EAX to the 32-bit value stored at the memory location that's `0x200b43` bytes after RIP (program counter).

