---
title: 通过 hugo 主题 stack 中的 menu.scss 文件学习 css 知识
categories:
  - ""
  - 前端
tags:
  - scss
date: 2024-06-25T11:11:07.861Z
description: ""
slug: ""
image: cover.jpg
weight: 1
draft: false
lastmod: 2024-06-25T20:06:15+08:00
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