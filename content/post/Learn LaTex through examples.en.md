---
title: Learn LaTex through examples
categories: CS
tags:
  - Latex
  - Math
date: 2024-11-11
description: 
image: 
weight: 1
draft: false
lastmod: 2024-11-15T07:59:37+08:00
---
## Fraction, subscript and Greek characters

Came from CSAPP "1.9.1 Amdahl’s Law"

$$
T_{\text{new}} = (1-\alpha)T_{\text{old}} + (\alpha T_{\text{old}})/k = T_{\text{old}}[(1-\alpha) + \alpha/k]
$$

```latex
T_{\text{new}} = (1-\alpha)T_{\text{old}} + (\alpha T_{\text{old}})/k = T_{\text{old}}[(1-\alpha) + \alpha/k]
```

- `_` is used for subscripts.
- `\alpha` produce the Greek letter α. Other Greek letters follow similar pattern(e.g., `\beta`, `\gamma`, `\delta`).
- `\text{}` makes the text inside appear normal text font rather than math italic.
- By default in LaTex math mode, every character is assumed to be its own variables, appearing in italics. `\text` makes characters to be read together as a word, apearing in normal text style.


$$
S = \frac{T_{\text{old}}}{T_{\text{new}}} = \frac{1}{(1-\alpha) + \alpha/k}
$$

```latex
S = \frac{T_{\text{old}}}{T_{\text{new}}} = \frac{1}{(1-\alpha) + \alpha/k}
```

- `\frac{numerator}{denominator}` creates a fraction. 


## Multiple dot

Came from Practice Problem 2.1 (solution page 179)

```latex
n = 11 = 3 + 4 \cdot 2
```
$$
n = 11 = 3 + 4 \cdot 2
$$
- `\cdot` means the multiplication dot.


```latex
x^n
```
$$
x^n
$$
- x to the nth power.

## Logical symbols

```latex
A \land B \lor C \not D \wedge C \vee E \neg F \oplus G \barwedge H \; \hat{} \; I  \veebar J
```

$$
A \land B \lor C \not D \wedge C \vee E \neg F \oplus G \barwedge H \; \hat{} \; I  \veebar J
$$