---
title: Learn LaTex through examples
categories: CS
tags:
  - Latex
  - Math
  - learn-X-through-examples
date: 2024-11-11
description: 
image: 
weight: 1
draft: false
lastmod: 2024-12-06T14:27:51+08:00
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

## Set operations

```latex
A \cap B \cup C \bigcap_{i=1}^n A_i
```

$$
A \cap B \cup C \bigcap_{i=1}^n A_i
$$
## Vector, Sum, Equation numbering, Dot equal

came from "CSAPP 2.2.2 Unsigned Encodings"

```latex
B2U_w(\vec{x}) \doteq \sum_{i=0}^{w-1}x_{i}2^i \qquad (2.1)
```

$$
B2U_w(\vec{x}) \doteq \sum_{i=0}^{w-1}x_{i}2^i \qquad (2.1)
$$
- `\qquad`: "quad" refers to a unit of horizontal spacing (specifically a quadratically sized space). So `\qquad` means "quadratic space" - it creates a wide horizontal space
- `\ldots`: "l" stands for "low" - these are dots that appear on the baseline, as opposed to `\cdots` where "c" stands for "centered" dots that appear in the middle. So `\ldots` means "low dots".
- $\doteq$ is commonly used in mathematics and computer science to denote a "definitional equality" - meaning it's used when you're defining something, rather than just stating that two things are equal.

## Cases (curly brace), Condition, Greater and equal to

```latex
T2U_{w}\left( x \right)  = \begin{cases}
x + 2^{w}, & x < 0  \\
x, & x \geq 0
\end{cases} \qquad (2.5)
```

$$
T2U_{w}\left( x \right)  = \begin{cases}
x + 2^{w}, & x < 0  \\
x, & x \geq 0
\end{cases} \qquad (2.5)
$$
- `\\` means newline.
- `&` before `x < 0` is an alignment operator
