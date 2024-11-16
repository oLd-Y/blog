---
title: CSAPP reading notes - Chapter 2 (Part I)
categories: CS
tags:
  - foundation
  - CSAPP
date: 2024-11-04
lastmod: 2024-11-16T13:32:14+08:00
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

None
### 2.1.5 Representing Code

None
### 2.1.6 Introduction to Boolean Algebra

![Operations of Boolean algebra](CSAPP/2.7.png)

When we consider operations ^, & and ~ operating on bit vectors of length w, we get a different mathematical form, known as a Boolean ring.

`a ^ a = 0` for any value a, so `(a ^ b) ^ a = b`.

According to the position of 1 from right to left, bit vector a = [01101001] encodes the set A = {0, 3, 5, 6}, while bit vector b = [01010101] encodes the set B = {0, 2, 4, 6}. Then the operation a & b yields bit vector [01000001], while $A \cap B$ = {0, 6}.

### 2.1.7 Bit-Level Operations in C

The best way to determin the effect of a bit-level expression is to extend the hexadecimal arguments to their binary representations, perform the operations in binary, and then convert back to the hexadecimal.

A mask is a bit pattern that indicates a selected set of bits within a word. The expression `~0` will yield a mask of all ones.

### 2.1.8 Logical Operations in C

A bitwise operation will have behavior matching that of its logical counterpart only in the special case in which the arguments are restricted to 0 or 1.

The logical operators do not evaluate their second argument if the result of the expression can be determined by evaluating the first argument.

### 2.1.9 Shift Operations in C

`x << k`: $x$ is shifted $k$ bits to the left, dropping off the $k$ most significant bits and filling the right end with $k$ zeros.

`x >> k`:
- Logical. A logical right shift fills the left end with $k$ zeros.
- Arithmetic. An arithemetic right shift fills the left end with $k$ repetitions of the most significant bit. 
- Arithmetic is the most-used right shift for signed data. But for unsigned data it must be logical right shift.

On many machines, the shift instruction consider only the lower $log_2 w$ bits of the shift amount when shifting a w-bit value, and so the shift amount is computed as `k mod w`. `w` is the bit length of the data type. For instance:

```c
int x = 1;
int w = 32;  // 32-bit integer

// These will give identical results:
x << 3       // shift by 3
x << 35      // shift by 35 (35 mod 32 = 3)
x << 67      // shift by 67 (67 mod 32 = 3)

// Because:
3  in binary = 00011  (lowest 5 bits)
35 in binary = 100011 (lowest 5 bits = 00011)
67 in binary = 1000011 (lowest 5 bits = 00011)
```

## 2.2 Integer Representations

![Terminology for integer data and arithmetic operations](CSAPP/2.8.png)

### 2.2.1 Integral Data Types

![Typical ranges for C integral data types for 32-bit programs](CSAPP/2.9.png)

![Typical ranges for C integral data types for 64-bit programs](CSAPP/2.10.png)

![Guaranteed ranges for C integral data types](CSAPP/2.11.png)

### 2.2.2 Unsigned Encodings

![Unsigned number examples for w = 4.](CSAPP/2.12.png)

For vector $\vec{x} = [x_{w-1}, x_{w-2}, \ldots, x_{0}$:
$$
B2U_{w}(\vec{x}) = \sum_{i=0}^{w-1}x_{i}2^i \qquad (2.1)
$$
