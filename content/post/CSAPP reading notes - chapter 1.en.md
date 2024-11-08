---
id: CSAPP reading notes - chapter 1
aliases: 
tags:
  - foundation
categories: CS
date: 2024-11-04
draft: false
lastmod: 2024-11-08T11:33:24+08:00
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
![compliation system](_images/figure%201.3%20compliation%20system.png)

## 1.3 It Pays to Understand How Compilation Systems Work

None.

## 1.4 Processors Read and Interpret Instructions Stored in Memory

![Hardware orgnization of a typical system](_images/figure%201.4.png)

