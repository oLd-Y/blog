---
title: hugo + stack + obsidian 搭建博客
categories:
  - ""
tags: 
date: 2024-06-25T08:31:36.022Z
description: ""
slug: ""
image: cover.jpg
weight: 1
draft: false
lastmod: 2024-06-29T07:40:36+08:00
---
## obsidian
templater 插件，创建博客以及自动拉取图片
```markdown
<%*
let title = await tp.system.prompt("Enter the title");
let folder = `/${title}/`
/**
const key = "id";
if (!app.metadataCache.getFileCache(f)?.frontmatter?.[key]) {
	await app.fileManager.processFrontMatter(f, (data) => {
		data[key] = ulid();
	});
}
*/
// 获取 Obsidian 根 vault 路径
let vaultPath = app.vault.adapter.basePath;
// 构建封面保存路径
let imagePath = `${vaultPath}${folder}cover.jpg`;
// tp.system.suggester(["中文", "English"], ["index.zh-cn", "index.en"], true, "请选择博客的语言")

await tp.file.create_new(tp.file.find_tfile("new index template"), "index.zh-cn", true, folder)

await tp.user.download_image("http://api.mtyqx.cn/api/random.php", imagePath);
-%>

```

使用 page bundle 组织博客，所有的文件都显示的是 index.md，十分地不方便。因此我们需要下载 `Front Matter Title` 插件。
## Hugo
hugo 是我们构建博客的主要工具，号称是世界上最快的网站构建工具。它通过对文件夹分层管理我们的资源；通过标记语言（主要为 markdown）编写内容，然后在构建之后将内容渲染到 themes 或者 layouts 的 hugo 的模板文件中来展示博客。

值得一提的是，hugo 只需要下载它的 exe 文件即可正常工作。首先我们安装 hugo。在 [release](https://github.com/gohugoio/hugo/releases/tag/v0.127.0) 页面下载带 extended 的版本，否则主题无法正常启动。下载完成之后，将 hugo.exe 所在文件夹加入环境变量。

整个网站的搭建网上资料已经很多了，例如你可参考[这篇文章](https://zexwoo.blog/posts/tutorials/build-hugo-blog/)，讲得比较详细，这里不再赘述，只提一些需要知道的知识。

### 主要命令

在构建网站的过程中主要使用到的 hugo 命令也就几个：

```shell
hugo version # 查看 hugo 的版本
hugo new site blog # 在当前目录下创建一个名为 blog 的 hugo 站点
hugo serve # 启动站点
```

其中 `hugo new site blog` 命令中的 blog 可以
	
		
hugo.toml，忽略某个文件夹
```toml
ignoreFiles = ["post/_templates"]

```

解析 obsidian 的双链

## Stack
开启评论、目录（toc）、中英双语

设置自己的域名

代码块折叠


[个人网站的建立过程（三）：Hugo主题stack的使用与优化](https://jinli.io/p/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E7%9A%84%E5%BB%BA%E7%AB%8B%E8%BF%87%E7%A8%8B%E4%B8%89hugo%E4%B8%BB%E9%A2%98stack%E7%9A%84%E4%BD%BF%E7%94%A8%E4%B8%8E%E4%BC%98%E5%8C%96/)

[Hugo Stack主题装修笔记](https://thirdshire.com/hugo-stack-renovation/)


如果是从其它博客主题迁移过来的，注意把相关的文件清理干净。比如我就是在 `content/` 目录下残留有上个主题 `paperMod` 的 search.md 文件，导致 `Stack` 主题的搜索功能（`content/search/index.md`）无法生效。

~~要设置 favicon.icon，需要将其放到 static 中的某个文件夹，例如 static/img/，并配置在 hugo.toml 中配置

```toml
[params]
favicon = "/img/favicon.ico"
```

如果直接将 favicon 放在 static 中，则配置不生效~~

如果资源的最前方带了 `/`，则表示从域名主机的根目录开始；不带 `/` 则表示从博客的根目录开始（像 `static`、`assets` 这些文件夹都会被构建为根目录。
[Publication on GitHub pages and BaseURL - support - HUGO](https://discourse.gohugo.io/t/publication-on-github-pages-and-baseurl/43631/4)


