---
id: CSAPP reading notes - chapter 1
aliases: 
tags:
  - foundation
categories: CS
date: 2024-11-04
draft: false
lastmod: 2024-11-12T08:34:54+08:00
title: CSAPP reading notes - chapter 1
weight: 1
---
![The hello program](img/1.1.png)

![The ASCII text representation of hello.c](img/1.2.png)

## 1.1 Information Is Bits + Context

All information in a system is represented as a bunch of bits.
## 1.2 Programs Are Translated by Other Programs into Different Forms

The gcc compiler driver reads the source file hello.c and translated into an execuable object file hello. The translation is performed in the sequence of four phases:
- Preprocessing phase.
- Compliation phase.
- Assembly phase.
- Linking phase.

The programs that perform these phases (preprocessor, compilor, assembler, and linker) is known collectively as the *compliation system*. 

Here is the phase figure:
![The compliation system](img/1.3.png)

## 1.3 It Pays to Understand How Compilation Systems Work

None.

## 1.4 Processors Read and Interpret Instructions Stored in Memory

![Hardware orgnization of a typical system](img/1.4.png)

PC: program counter
ALU: arithmetic/logic unit

### 1.4.1 Hardware Organization of a System:
#### Buses
#### I/O Devices

I/O: Input/Output
#### Main Memory

Physically, main memory consists of a collection of dynamic random access memory (DRAM).
#### Processor

### 1.4.2 Running the hello Program

![Reading the hello program from the keyboard](img/1.5.png)

DMA: direct memory access

![loading executable from disk into main memory](img/1.6.png)

![Writing the output string from the memory to the display](1.7.png)

## 1.5 Caches Matter

![Cache memories](img/1.8.png)

The L1 and L2 caches are implemented with a hardware technology known as static random access memory (SRAM)

## 1.6 Storage Devices Form a Hierarchy

![example of memory hierarchy](img/1.9.png)

## 1.7 The Operating System Manages the Hardware

![Layered view of a computer system](img/1.10.png)

The operating system has two primary purposes:
1. to protect the hardware from misuse by runaway applications
2. to provide applications with simple and uniform mechanisms for manipulating complicated and often wildly different low-level hardware devices.

It achieves both goal via the foundamental abstractions: processes, virtual memory, and files.

![Abstractions provided by an operating system](img/1.11.png)

#### 1.7.1 Processes

When the operating system decides to transfer control from the current process to some new process, it performs a *context switch* by saving the context of the current process, restoring the context of the new process, and then passing control to the new process.

![Process context switching](img/1.12.png)

#### 1.7.2 Threads

Each thread runs in the context of the process and sharing the same code and global data.

#### 1.7.3 Virtual Memory

Each process has the same uniform view of memory, which is known as its *virtual address space*.

![Process virtual address](img/1.13.png)

The virtual address space seen by each process consists of a number of well defined areas, starting from low to high:
- Program code and data.
- Heap.
- Shared libraries.
- Stack.
- kernel virtual memory.

#### 1.7.4 Files

A *file* is a sequence of bytes. Every I/O devices is modeled as a file. All input and output in the system is performed by reading and writing files, using a small set of system calls known as *Unix I/O*.

## 1.8 Systems Communicate with Other Systems Using Networks

The network can be viewed as just another I/O devices.

![A network is another I/O device](img/1.14.png)

The system copies a sequence of bytes from main memory to the network adapter rather than disk controller, which helps the data flow across the network to another mechine instead of a local disk drive.

![Using telnet to run hello program remotely over a network](img/1.15.png)


#### 1.9.1 Amdahl's law

The main idea of *Amdahl's law* is that when we speed up one part of a system effect on the overall all system performance depends on both how sigficant this part was and how much it sped up.

$$
T_{new} = (1-\alpha)T_{\text{old}} + (\alpha T_{\text{old}})/k = T_{\text{old}}[(1-\alpha) + \alpha/k]
$$

$$
S = \frac{T_{\text{old}}}{T_{\text{new}}} = \frac{1}{(1-\alpha) + \alpha/k}
$$


#### 1.9.2 Concurrency and Parallelism

### Thread-Level Concurrency

Traditionally, this concurrent execution was only *simulated*, much as a juggler keeps multiple balls flying through the air.