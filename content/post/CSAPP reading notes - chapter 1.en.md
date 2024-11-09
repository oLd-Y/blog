---
id: CSAPP reading notes - chapter 1
aliases: 
tags:
  - foundation
categories: CS
date: 2024-11-04
draft: false
lastmod: 2024-11-09T11:49:14+08:00
title: CSAPP reading notes - chapter 1
weight: 1
---
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
![compliation system](img/figure%201.3%20compliation%20system.png)

## 1.3 It Pays to Understand How Compilation Systems Work

None.

## 1.4 Processors Read and Interpret Instructions Stored in Memory

![Hardware orgnization of a typical system](img/figure%201.4.png)

PC: program counter
ALU: arithmetic/logic unit

Hardware Organization of a System:
- Buses
- I/O Devices
- Main Memory. Physically, main memory consists of a collection of dynamic random access memory (DRAM).
- Processor

I/O: Input/Output


DMA: direct memory access

## 1.5 Caches Matter

The L1 and L2 caches are implemented with a hardware technology known as static random access memory (SRAM)

## 1.6 Storage Devices Form a Hierarchy

![example of memory hierarchy](img/figure%201.9.png)

## 1.7 The Operating System Manages the Hardware

