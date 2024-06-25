---
title: ox-hugo org-template 理解
lastmod: 2024-06-25T16:38:57+08:00
draft: true
toc: true
hideInList: false
---

olp, org link path, org mode 中的标题层级路径.

```emacs-lisp
  (add-to-list 'org-capture-templates
               '("h"                ;`org-capture' binding + h
                 "Hugo post"
                 entry
                 ;; It is assumed that below file is present in `org-directory'
                 ;; and that it has a "Blog Ideas" heading. It can even be a
                 ;; symlink pointing to the actual location of all-posts.org!
                 (file+olp "roam/all-posts.org" "Blog Ideas")
                 (function org-hugo-new-subtree-post-capture-template))))
```

对于上述代码, 如果希望在 `* Blog Ideas, **Ideas` 层级下生成博客, 就应该写成 `(file+olp "roam/all-posts.org" "Blog Ideas" "Ideas")`
doom emacs 中如果想要修改 org-capture-templates 的内容, 只需要找到 `~/.doom.d/custom.el` 即可.
