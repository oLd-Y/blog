---
title: 通过 hugo 主题 stack 中的 menu.scss 文件学习 css 知识
categories: 前端
tags:
  - scss
date: 2024-06-25T11:11:07.861Z
description: ""
slug: ""
image: 
weight: 1
draft: true
lastmod: 2024-11-11T14:37:39+08:00
---
在使用 hugo 的主题 [stack](https://github.com/CaiJimmy/hugo-theme-stack) 的时候，需要修改侧边栏的图标，其中涉及到修改 scss 文件，趁此机会稍微学习一下 scss 的语法。在我[参考的博客](https://jinli.io/p/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E7%9A%84%E5%BB%BA%E7%AB%8B%E8%BF%87%E7%A8%8B%E4%B8%89hugo%E4%B8%BB%E9%A2%98stack%E7%9A%84%E4%BD%BF%E7%94%A8%E4%B8%8E%E4%BC%98%E5%8C%96/)中的代码是这样的：
```scss
.social-menu {
    list-style: none;
    padding: 0%;
    display: flex;
    flex-direction: row;
    gap: 0px;
    a {
        border-radius:50%;
        display:-moz-inline-stack;
        display:inline-block;
        vertical-align:middle;
        *vertical-align:auto;
        zoom:1;
        *display:inline;
        margin:0 8px 15px 8px;
        transition:0.3s;
        text-align: center;
        color: #fff;
        opacity: 0.7;
        width: 28px;
        height: 28px;
        line-height: 26px;
        &:hover {
            opacity:1
        }
    }
    a.weibo {
        background: #aaaaff;
        border:1px solid #aaaaff;
        &:hover {
            border:1px solid #aaaaff;
        }
    }
    a.segmentfault {
        background: #009a61;
        border:1px solid #009a61;
        &:hover {
            border:1px solid #009a61;
        }
    }
    a.rss {
        background: #ef7522;
        border:1px solid #ef7522;
        &:hover {
            border:1px solid #cf5d0f;
        }
    }
    a.github {
        background: #afb6ca;
        border:1px solid #afb6ca;
        &:hover {
            border:1px solid #909ab6;
        }
    }
    a.gitee {
        background: #c8171e;
        border:1px solid #c8171e;
        &:hover {
            border:1px solid #c8171e;
        }
    }
    a.facebook {
        background: #3b5998;
        border:1px solid #3b5998;
        &:hover {
            border:1px solid #2d4373;
        }
    }
    a.google {
        background: #4086f4;
        border:1px solid #4086f4;
        &:hover {
            border:1px solid #4086f4;
        }
    }
    a.twitter {
        background: #55cff8;
        border:1px solid #55cff8;
        &:hover {
            border:1px solid #24c1f6;
        }
    }
    a.linkedin {
        background: #005a87;
        border:1px solid #005a87;
        &:hover {
            border:1px solid #006b98;
        }
    }
    a.acfun {
        background: #fd4c5d;
        border:1px solid #fd4c5d;
        &:hover {
            border:1px solid #fd4c5d;
        }
    }
    a.bilibili {
        background: #e15280;
        border:1px solid #e15280;
        &:hover {
            border:1px solid #e15280;
        }
    }
    a.zhihu {
        background: #0078d8;
        border:1px solid #0078d8;
        &:hover {
            border:1px solid #0078d8;
        }
    }
    a.douban {
        background: #06c611;
        border:1px solid #06c611;
        &:hover {
            border:1px solid #06c611;
        }
    }
    a.mail {
        background: #005a87;
        border:1px solid #005a87;
        &:hover {
            border:1px solid #006b98;
        }
    }
    a.jianshu {
        background: #ff5722;
        border:1px solid #ff5722;
        &:hover {
            border:1px solid #ff5722;
        }
    }
    a.weixin {
        background: #4caf50;
        border:1px solid #4caf50;
        &:hover {
            border:1px solid #4caf50;
        }
    }
    a.qq {
        background: #34baad;
        border:1px solid #34baad;
        &:hover {
            border:1px solid #34baad;
        }
    }
    a.psn {
        background: #086ef6;
        border:1px solid #086ef6;
        &:hover {
            border:1px solid #086ef6;
        }
    }
}

```
其中我不太懂的语法有（相同的语法只取第一个）：

```scss
.social-menu {}

a {}

display:-moz-inline-stack;

*display:inline;

&:hover {}

a.weibo {}

border:1px solid #009a61;

```

# .social-menu {}
`.social-menu {}` 中的 `.` 表示这是一个类选择器。通过选择器可以设置一个或者一组标签的样式。
按优先级从高到低的顺序，选择器的类型大致可以分为：
- **内联样式**：直接在 HTML 元素中使用的样式，优先级最高。例如：`<div style="color: red;"></div>`。
- **ID 选择器**（`#id`）
- **类选择器**（`.class`）、属性选择器（`[attribute]`）和伪类选择器（`:hover`）。
- **标签选择器**（`element`）和伪元素选择器（`::before`、`::after`）。
- **通配符选择器**（`*`）和组合选择器（后代选择器、子选择器等）。

# a {}
表示整个 a 标签都应用 `{}` 中的属性

# display:-moz-inline-stack
以 `-` 开头的属性一般为各大浏览器的实验属性
- `-moz-`：用于 Mozilla Firefox。
- `-webkit-`：用于 Safari 和 Chrome。
- `-ms-`：用于 Internet Explorer 和 Edge。
- `-o-`：用于 Opera。

# \*display:inline;
`*` 是一种 css hack，专门用于针对早期版本的 Internet Explorer。其它 css hack：
- **下划线前缀**（`_`）：
```css
_height: 100px; /* 仅对 IE6 生效 */
```
- **IE条件注释**：
 ```css
<!--[if IE 6]>
<link rel="stylesheet" type="text/css" href="ie6.css" />
<![endif]-->
<!--[if IE 7]>
<link rel="stylesheet" type="text/css" href="ie7.css" />
<![endif]-->

```

由于 CSS hacks 的不标准性和潜在的维护问题，建议尽量避免使用这些技巧。现代浏览器的兼容性已经大大改善，因此可以使用更标准的方法，例如：
- **Feature Queries**：
```css
@supports (display: grid) {   .container {     display: grid;   } }
```
- **Conditional Comments**：仅在 HTML 中使用，以确保针对特定版本的 IE 应用特定样式。
- **Polyfills 和 PostCSS**：自动处理兼容性问题的工具。

# &:hover {}
`&` 用于在嵌套的 css 中表示父 css 对象。例如：
```css
a {
    color: blue;
    &.show {
        font-weight: bold;
    }
}
```
会编译成
```css
a {
    color: blue;
}

a.show {
    font-weight: bold;
}
```

`&:hover {}` 中的 `:` 表示伪类选择器（上面提到过）。常用于选择元素的不同状态，例如悬停（`:hover`）、聚焦（`:focus`）、选中（`:checked`）等。常用的伪类选择器包括：
- `:hover`：鼠标悬停在元素上时应用的样式。
- `:focus`：元素获得焦点时应用的样式，例如点击输入框。
- `:active`：元素被激活时应用的样式，例如鼠标点击时。
- `:first-child`：选择父元素的第一个子元素。
- `:nth-child(n)`：选择父元素的第 n 个子元素。

# a.weibo {}
这是标签选择器 `a` 和类选择器 `.weibo` 的组合，表示选择所有包含 `weibo` 类的 `a` 标签。

# border:1px solid \#009a61;
`solid` 表示一个单一的实线边框。常见的边框样式还有：
- `dotted`：点状边框。
- `dashed`：虚线边框。
- `double`：双线边框。
- `groove`：凹槽边框。
- `ridge`：脊状边框。
- `inset`：嵌入边框。
- `outset`：凸起边框。
- `none`：无边框。
- `hidden`：隐藏的边框。

