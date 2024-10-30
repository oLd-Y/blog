---
title: ox-hugo 自动生成模板代码解析
lastmod: 2024-06-25T16:38:55+08:00
draft: true
toc: true
hideInList: false
---

ox-hugo 单文件组织博客的教程中有这样一段代码(手动改造增加了一个 `:ID:` 属性):

```emacs-lisp
  (defun org-hugo-new-subtree-post-capture-template ()
    "Returns `org-capture' template string for new Hugo post.
See `org-capture-templates' for more information."
    (let* ((title (read-from-minibuffer "Post Title: ")) ;Prompt to enter the post title
           (fname (org-hugo-slug title))
           (id (org-id-new))) ;Generate a new ID without a prefix
      (mapconcat #'identity
                 `(
                   ,(concat "* TODO " title)
                   ":PROPERTIES:"
                   ,(concat ":EXPORT_HUGO_BUNDLE: " fname)
                   ":EXPORT_FILE_NAME: index"
                   ,(concat ":ID: " id) ;Add the ID property
                   ":END:"
                   "%?\n")                ;Place the cursor here finally
                 "\n")))
```

-   `let*`: 先定义变量, 再执行方法.
-   `read-from-minibuffer`: 打开一个 minibuffer 并让你输入一个文本作为标题.
-   `mapconcat`: 为列表中的每个元素都执行同一个函数, 然后再把结果拼接起来.
-   `#'identity`: 返回和输入元素相同的结果. `'` 表示你不需要执行这个函数, 只需要返回这个字符串即可. 因为 elisp 是函数和参数混搭, 你没法知道你是要执行一个函数还是只是用这个引用这个函数当作参数, 所以需要进行区分. `#'` 特指一个函数引用.
-   `` `(...) ``, `,()`: 反引号语法, 用于生成一个列表, 几乎和普通列表 `list(...)` 一致, 不同在于其中的一些表达式可以被执行之后作为列表的元素. 需要执行的表达式则通过括号之前的 `,` 进行标记. 这个逗号只有在反引号列表中才有此含义.

该段 elisp 最终生成一个类似于如下的 org 代码:

```org
** TODO test
:PROPERTIES:
:EXPORT_HUGO_BUNDLE: test
:EXPORT_FILE_NAME: index
:ID: c53e9ab3-7bbf-415d-b91f-57f1209f9887
:END:
```
