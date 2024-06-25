---
title: ox-hugo 结合 org-download 粘贴图片
lastmod: 2024-06-25T16:38:53+08:00
tags:
  - org-mode
draft: true
toc: true
hideInList: false
---

ox-hugo 提供了一个单文件组织博客的功能, 一直以为无法和 org-roam 联动, 就一直没用过. 后来发现原来只要 org 文件的某个 level 下有个 ID 就会被认为是 org-roam 的节点, 于是就放心使用了.
hugo 提供了一个 [Page Bundles](https://gohugo.io/content-management/page-bundles/) 的功能, 稍微研究了一点, 发现比正常方式更好管理静态资源, 就决定使用这个方式了.
简单理解, page bundles 就是把博客从单个 markdown 文件变为一个文件夹里放着 index.md 和其他资源文件.
原先的 org-download 的配置如下所示:

```emacs-lisp

(use-package! org-download
  :after org
  :custom
  (org-download-method 'directory)
  )
```

我的单文件放在 `~/org/all-posts.org` 下, 所有博客都放在这里. 大致的结构如下所示:

```emacs-lisp
#+title: All Posts

#+begin_no_export
#+options: author:nil ^:{}
#+hugo_front_matter_format: yaml
#+hugo_base_dir: ~/blog/
#+hugo_section: posts/
#+date: [24-04-07 Sun Apr:04]
#+hugo_custom_front_matter: :toc true
#+hugo_auto_set_lastmod: t
#+hugo_tags:
#+hugo_categories:
#+hugo_draft: false
#+end_no_export

* BLog Ideas
** DONE test-page-bundle2 :ATTACH:
:PROPERTIES:
:EXPORT_HUGO_BUNDLE: test-page-bundle2
:EXPORT_FILE_NAME: index
:ID:       5fd9659c-085a-443b-940a-be3c522be6ab
:END:


[[download:test-page-bundle2/_20240407_180600screenshot.png]]
```

上述 `[[download:test-page-bundle2/_20240407_180600screenshot.png]]` 就是我使用 org-download-clipboard 函数自动从剪贴板粘贴的图片链接, 它会自动存放到 `org-download-image-dir` 设置的目录位置, 然后在保存导出的 markdown 文件中展示下列格式的链接:

```markdown
<test-page-bundle2/_20240407_180600screenshot.png>
```

这个格式的链接根本没法被 hugo 的 markdown 识别, 查了很久资料一直不知道怎么解决, 差点就放弃了. 幸好在某次调整 org-download 配置之后发现, 问题在 `(org-download-method 'directory)` 这个配置项, 如果把它改为 `(org-download-method 'attach)`, 就可以正常显示.

修改完成之后, 在 org 文件使用 org-download-clipboard 命令粘贴图片, 其格式如下所示:

```org
[[attachment:_20240407_194754screenshot.png]]
```

其自动导出的 markdown 文件中的格式则如下所示:

```markdown
![](/home/gly/org/.attach/5f/d9659c-085a-443b-940a-be3c522be6ab/_20240407_194754screenshot.png)
```

这就是 markdown 能直接渲染的格式了.
至于为什么, 简单查阅了一下, 应该是因为 org-download-method 设置为 `'attach` 之后, 相关的图片就会作为交给 org 相关的东西管理, 就会直接在 `ox-hugo` 相关的目录防止图片, 以附件的形式添加进来. 具体我也不是很清楚, 以后有机会了再慢慢了解吧.

参考链接:

-   [Page bundles | Hugo](https://gohugo.io/content-management/page-bundles/)
-   [Images in Content — ox-hugo - Org to Hugo exporter](https://ox-hugo.scripter.co/doc/images-in-content/)
-   [Image Links — ox-hugo - Org to Hugo exporter](https://ox-hugo.scripter.co/doc/image-links/#references-to-files-in-the-static-directory)
