---
title: "elisp 简单总结"
date: 2023-11-15T22:29:00+08:00
lastmod: 2023-11-15T22:36:56+08:00
draft: false
toc: true
---

## let 和 let\* 的区别 {#let-和-let-的区别}


### let：先定义变量，在同一个 let 定义下一个变量的时候不能使用事先定义的变量 {#let-先定义变量-在同一个-let-定义下一个变量的时候不能使用事先定义的变量}

```elisp
(defun circle-area (radix)
  (let ((pi 3.1415926)
        area)
    (setq area (* pi radix radix))
    (message "直径为 %.2f 的圆面积是 %.2f" radix area)))
(circle-area 3)
```


### let\*：定义变量之后可以直接使用 {#let-定义变量之后可以直接使用}

```elisp
(defun circle-area (radix)
  (let* ((pi 3.1415926)
         (area (* pi radix radix)))
    (message "直径为 %.2f 的圆面积是 %.2f" radix area)))
```
