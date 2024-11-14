---
title: CSAPP reading notes - Chapter 2 (Part I)
categories: CS
tags:
  - foundation
  - CSAPP
date: 2024-11-04
lastmod: 2024-11-14T15:58:34+08:00
draft: false
weight: 1
description: "Part I, Program Structure\r and Execution; Chapter 2 \rRepresenting and Manipulating \rInformation"
---
## 2.1 Information Storage

Most computers use block of 8 bits, or *bytes*, as the smallest unit of memory.

A mechine-level program views memory as a very large array of bytes, referred to as *virtual memory*. Every byte of memory is identified by a unique nubmer, known as *address*, and the set of all possible addresses is known as the *virtual address space*.

Virtual address space is just a conceptual image presented to mechine-level program. The actual implementation uses a combination of DRAM, flash memory, disk storage,special hardware, and operating system software to provide the program with what apears to be a monolithic byte array.

The GNU Compiler Collection (GCC) can compile programs according to the conventions of several different version of the C language, based on different command-line options.

![Specifying different versions of C to gcc](CSAPP/2.1.png)

### 2.1.1 Hexadecimal Notation

Decimal and binary values associated with the hexadecimal digits:

![Hexadecimal notation](CSAPP/2.2.png)

practice problem 2.1:
A. 0x25B9D2 to binary
B. binary 1010111001001001 to hexadecimal
C. 0xA8B3D to binary
D. binary 1100100010110110010110 to hexadecimal

For $x = 2,048 = 2^{11}$, we have $n = 11 = 3 + 4 \cdot 2$, giving hexdecimal representation `0x800`.

### 2.1.2 Data Sizes

A 32-bit word size limits the virtual address space to 4 gigabytes(written 4 GB), that is, just over 4 x 10^9 bytes. Scaling up to a 64-bit word size leads to a virtual address space of 16 exabytes, or around 1.84 x 10^19 bytes.

The distinction referring to programs as being either "32-bit programs" or "64-bit programs" lies in how a program is compiled, rather than the type of machine on which it runs.

The C language supports multiple data formats for both integer and floating-piont data.


![Typical sizes (in bytes) of basic C data types](CSAPP/2.3.png)

`int32_t` and `int64_t` have exactly 4 and 8 bytes, respectively, to avoid the vagaries of relying on "typical" sizes and different compiler settings.

### 2.1.3 Addressing and Byte Ordering

The convention where the least significant bytes comes first is referred to as *little endian*. The convention where the most sifnificant byte comes first is referred to as *big endian*.

![](CSAPP/big-little-endian.png)

![Byte representations of different data values among different machines](CSAPP/2.5-2.6.png)

Although the floating-pint and the integer data both encode the numeric value 12,345, they have very different byte patterns: 0x00003039 for the integer and 0x4640E400 for floating point. In general, these two formats use different encoding shemes. If we expand these hexadecimal patterns into binary form and shift them appropriately, we find a sequence of 13 matching bits, indicated by a sequence of asterisks, as follows:

![](CSAPP/mathcing-bits-of-floating-point-and-integer.png)

### 2.1.4 Representing Strings



