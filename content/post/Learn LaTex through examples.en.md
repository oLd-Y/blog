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
lastmod: 2024-11-13T07:44:00+08:00
---
# Came from CSAPP "1.9.1 Amdahl’s Law"

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


## Came from Practice Problem 2.1 (solution page 179)

