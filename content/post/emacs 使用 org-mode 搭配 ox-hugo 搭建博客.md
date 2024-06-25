---
title: emacs 使用 org-mode 搭配 ox-hugo 搭建博客
lastmod: 2024-06-25T16:39:17+08:00
draft: true
toc: true
---

## windows 中安装 hugo {#windows-中安装-hugo}

-   到[releases](https://github.com/gohugoio/hugo/releases%E5%88%B0)页面获取 hugo 的最新安装包，在本地解压之后将 hugo.exe 所在的文件夹加入到环境变量中。
-   可在命令行使用 `hugo version` 查看 `hugo` 是否安装成功


## emacs 中安装 `ox-hugo` {#emacs-中安装-ox-hugo}


### 普通安装 {#普通安装}

在emacs配置文件中加入下列代码:

```elisp
  (with-eval-after-load 'ox
  (require 'ox-hugo))
```


### use-pacakge 安装 {#use-pacakge-安装}

或者可以使用use-package. 同样在emacs配置文件中加入下列代码:

```elisp
(use-package ox-hugo
  :ensure t
  :pin melpa
  :after ox)
```

安装完成之后就可以使用 `c-c c-e` 呼出 `ox-hugo` 的相关命令了


## 初始化 hugo {#初始化-hugo}

-   使用命令 `hugo new site blog` 在当前目录下创建一个 `blog` 作为博客的根目录. 其中, 你的博客为 `content` 目录下的 `.md` 文件.
-   切换到 `blog` 目录使用 `git init` 命令将 `blog` 文件夹初始化为 git 仓库


## 安装 hugo 主题 {#安装-hugo-主题}

-   为了美化博客页面, 我们还需要下载一个hugo相关的主题. 我这里选用的是 [doit](https://github.com/heige-pcloud/doit).
    在 `blog` 目录下使用 `git add submodule --depth 1 https://github.com/heige-pcloud/doit.git themes/doit` 命令将 doit 主题作为子模块进行安装.
-   将下列代码覆盖 `blog` 目录下的 `hugo.toml` 配置文件(原 `config.toml`), 其中 baseurl 填写的是在本地启动的端口

<!--listend-->

```toml

baseurl = "http://localhost:1313/"
# [en, zh-cn, fr, ...] determines default content language,  注意不要写成 zh-CN, 否则会报错.
defaultcontentlanguage = "zh-cn"
# language code
languagecode = "zh-cn"
# whether or not having chinese japanese or korea characters
hascjklanguage = true
title = "old-y's 博客"

# change the default theme to be use when building the site with hugo
theme = "doit"

[params]
# doit theme version
version = "0.3.x"

[author]
name = "old-y"

[menu]
[[menu.main]]
identifier = "posts"
# you can add extra information before the name (html format is supported), such as icons
pre = ""
# you can add extra information after the name (html format is supported), such as icons
post = ""
name = "posts"
url = "/posts/"
# title will be shown when you hover on this menu link
title = ""
weight = 1
[[menu.main]]
identifier = "tags"
pre = ""
post = ""
name = "tags"
url = "/tags/"
title = ""
weight = 2
[[menu.main]]
identifier = "categories"
pre = ""
post = ""
name = "categories"
url = "/categories/"
title = ""
weight = 3

# markup related configuration in hugo
[markup]
# syntax highlighting (https://gohugo.io/content-management/syntax-highlighting)
[markup.highlight]
# false is a necessary configuration (https://github.com/dillonzq/loveit/issues/158)
noclasses = false
lineNos = true
```

做完这一步, 你就可以用markdown写代码了. 把 `.md` 文件放在刚才说的 `content` 文件夹下的 `posts` 目录下即可. `posts` 文件夹下的所有 `.md` 文件都会被识别成博客, 并且之后直接部署到 `github pages` 上也是可以的, 但是我们使用的是 `org-mode`, 还需要进一步操作.


## 任意创建一个目录用于保存你的 org 文件, 在里面新建一个 `test.org` 文件, 并在文件中填入如下模板: {#任意创建一个目录用于保存你的-org-文件-在里面新建一个-test-dot-org-文件-并在文件中填入如下模板}

```org-mode
#+options: author:nil ^:{}
#+hugo_front_matter_format: yaml
#+hugo_base_dir: ~/blog/
#+hugo_section: posts/2022/04
#+date: [2022-04-24 sun 20:29]
#+hugo_custom_front_matter: :toc true
#+hugo_auto_set_lastmod: t
#+hugo_tags: 标签1 标签2
#+hugo_categories: 类别
#+hugo_draft: false
#+title: test blog

test blog
```

然后按 m-x 执行命令 `org-hugo-export-to-md` 命令将 org 文件导出为 markdown 文件, 导出的路径由上方的 `#+hugo_section:` 参数决定, 该参数会在根目录的 `content` 目录下创建出相应的文件夹存放markdown文件.
这里解释一下部分参数的含义:

-   `#+options: author:nil ^:{}`: 设置一些导出选项. `author:nil`, 是否导出作者(org-文件中的); `^:{}`, ^是否用大括号包起来(比如 x^2y 你不知道是 x 的 2y 次方还是 x 的2次方乘以 y).
-   `#+hugo_front_matter_format: yaml`: 设置 markdown 格式的前言使用的格式为 yaml, 比如元数据等. 可以自己查看导出的 markdown 文件最上方.
-   `#+hugo_base_dir: ~/blog/`: 设置要导到的 `hugo site` 的位置.
-   `#+hugo_section: posts/2022/04`: 设置该 org 文件导出到哪个相对文件夹. 相对于上面的 `#+hugo_base_dir` 中的 `content` 目录.
-   `#+hugo_custom_front_matter: :toc true`: 自定义一些前言设置. `:toc ture`, 设置是否开启目录.


## 安装 yasnippet 包 {#安装-yasnippet-包}

上述模板自然不能每次都手动输入, 那样也太麻烦了. 因此我们需要用到 [yasnippet](https://github.com/joaotavora/yasnippet) 插件.
在 emacs 配置文件中输入下列代码安装 yasnippet

```elisp
(use-package yasnippet
  :bind
  ("c-c y s" . yas-insert-snippet)
  ("c-c y v" . yas-visit-snippet-file)
  :config
  (add-to-list 'yas-snippet-dirs "~/.emacs.d/snippets")
  (yas-global-mode 1))
```

然后便可以 m-x 执行 `yas-new-snippet` 命令创建yasnippet模板, 模板的内容如下所示:

```snippet
# -*- mode: snippet -*-
# name: hugo_blog
# key: <hugo
# --
#+options: author:nil ^:{}
#+hugo_front_matter_format: yaml
#+hugo_base_dir: ~/blog
#+hugo_section: posts/`(format-time-string "%y/%m")`
#+date: `(format-time-string "[%y-%m-%d %a %h:%m]")`
#+hugo_custom_front_matter: :toc true
#+hugo_auto_set_lastmod: t
#+hugo_tags: $1
#+hugo_categories: $2
#+hugo_draft: false
#+title: $3

$0
```

然后按 c-x c-s 根据提示保存代码模板即可. 接着回到博客的 org 文件, 使用 `<hugo` 加 `tab` 即可呼出代码模板.

\#+end_src
然后记得使用 `M-x revert-buffer` 才能立马生效.


## 本地预览博客 {#本地预览博客}

在博客根目录使用命令 `hugo server` 就可以在本地启动一个博客网站, 网址由 `hugo.toml` 文件的 `baseurl` 属性指定.
注意被标记为草稿的文件(hugo_draft为true)需要指定额外的参数才能查看, 具体是啥忘记了, 可以自行google.


## 托管至github pages {#托管至github-pages}

把博客目录上传至github仓库, 在你的博客项目的 settings -&gt; pages 选择或搜索 hugo 相关的 toml 文件, 啥都不用改, 直接发布即可. 然后你的blog就会被托管到github pages 上了. 之后有新的提交就会自动更新.


## 更多配置 {#更多配置}

[Hugo 博客 DoIt 主题功能增强]({{< relref "#d41d8c" >}})


## 中英双语博客 {#中英双语博客}

[中英双语博客修改](https://cyrusyip.org/zh-cn/post/2022/05/30/hugo-multilingual/)


## 参考链接 {#参考链接}

-   [DoIt官方文档](https://hugodoit.pages.dev/theme-documentation-basics/)
-   [DoIt 官方仓库](https://github.com/HEIGE-PCloud/DoIt)
-   [mushi' blog](https://wowow005.github.io/posts/2022/04/%e5%a6%82%e4%bd%95%e7%94%a8hugo%e5%92%8corg-mode%e6%90%ad%e5%bb%ba%e4%b8%aa%e4%ba%ba%e5%8d%9a%e5%ae%a2/)
-   [Usage — ox-hugo - Org to Hugo exporter](https://ox-hugo.scripter.co/doc/usage/)
