---
title: "水木社区 emacs 教程"
lastmod: 2024-05-17T23:35:21+08:00
draft: true
toc: true
---

<https://smacs.github.io/elisp/>

```emacs-lisp
(message "hello world") ;; C-j
```


## 函数和变量 {#函数和变量}


### 设置函数 {#设置函数}

```elisp
(defun hello-world (name)
  "Say hello to user whose name is NAME."
  (message "Hello, %s" name))

(hello-world "Emacser")
```


### 设置变量 {#设置变量}

格式

```elisp
(defun function-name (arguments-list)
  "document string"
  body)
```

```elisp
(setq foo "I'm foo")
(message foo)

(defvar foo "Did I have a value?"
  "A demo variable")
foo

(defvar bar "I'm bar"
  "A demo variable named \"bar\"")
bar
```


### 局部变量 {#局部变量}

let

```elisp
(defun circle-area (radix)
  (let ((pi 3.1415926)
        area)
    (setq area (* pi radix radix))
    (message "直径 %.2f 的圆的面积是 %.2f" radix area)))
(circle-area 3)
```

let\*, 和 let 的区别在于后声明的变量可以直接使用先声明的变量

```elisp
(defun circle-area (radix)
  (let* ((pi 3.1415926)
         (area (* pi radix radix)))
  (message "直径 %.2f 的圆的面积是 %.2f" radix area)))
(circle-area 3)
```


### lambda 表达式 {#lambda-表达式}

格式

```elisp
(lambda (arguments-list)
  "documentation string"
  body)
```

调用

```elisp
(funcall (lambda (name)
           (message "Hello, %s!" name)) "Emacser")
```

赋给变量，就可以用 funcall 调用该 lambda

```elisp
(setq foo (lambda (name)
             (message "Hello, %s!" name)))

(funcall foo "Emacser")
```


## 控制结构 {#控制结构}


### 顺序执行 {#顺序执行}

progn, 执行一系列函数并返回最后一个函数是否执行成功
格式

```elisp
(progn A B C ...)
```

```elisp
(progn
  (setq foo 3)
  (message "Square of %d is %d" foo (* foo foo)))
```


### 条件判断 {#条件判断}

```elisp
(if condition
    then
  else)

(cond (case1 do-when-case1)
      (case2 do-when-case2)
      ...
      (t do-when-none-meet))
```

```elisp
(defun my-max (a b)
  (if (> a b)
      a b))
(my-max 4 3)
```
