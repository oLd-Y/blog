---
title: cargo installation
categories: 
tags: 
date: 2024-10-31
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-01T15:52:45+08:00
---
## Linux

First run the command in the terminal: 
`curl https://sh.rustup.rs -sSf | sh`

This command get and execute a shell script from the certain website, which downloads the necessary tools and environments.

Here is the explanation of the flag of `curl`:
- `-s`, shows no output.
- `-S`, BUT error message.
- `-f`, silent failure on HTTP errors, which means only return an error code instead of the whole messages.


then use the command below to source the environment:
`. ~/.cargo/env`

