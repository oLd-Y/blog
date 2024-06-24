---
title: "emacs bug 汇总"
lastmod: 2024-05-17T13:38:27+08:00
draft: true
toc: true
---

## File mode specification error: (error Lisp nesting exceeds ‘max-lisp-eval-depth’) {#file-mode-specification-error--error-lisp-nesting-exceeds-max-lisp-eval-depth}

出错代码：

```emacs-lisp
(use-package org
  :config
  (setq org-startup-indented t)
  :hook
  (org-mode . (org-indent-mode)))
```

原因：两段代码重复导致无限递归。
解决：去掉 hook 部分的代码即可。
