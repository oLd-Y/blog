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
draft: true
lastmod: 2024-06-28T17:42:11+08:00
---
# obsidian
templater 插件，创建博客以及自动拉取图片
```markdown
<%*
const fs = require('fs');
const path = require('path');

// 获取用户输入的 Note Title
let qcFileName = await tp.system.prompt("Note Title");
let titleName = qcFileName;

// 定义 baseFolder 和 newFolder
let baseFolder = "/";
let newFolder = `${baseFolder}${titleName}/`;

// 获取 Obsidian 根 vault 路径
let vaultPath = app.vault.adapter.basePath;

// 构建新的 markdown 文件路径
let mdFilePath = `${vaultPath}${newFolder}index.md`;

// 构建封面保存路径
let imagePath = `${vaultPath}${newFolder}cover.jpg`;

// 确保新文件夹存在
if (!fs.existsSync(`${vaultPath}${newFolder}`)) {
    fs.mkdirSync(`${vaultPath}${newFolder}`, { recursive: true });
}

// 创建新的 markdown 文件并添加 front matter
let frontMatter = `---
title: ${titleName}
categories: ""
tags: ""
date: ${new Date().toISOString()}
description: ""
slug: ""
image: "cover.jpg"
weight: 1
draft: true
---
`;

// 将 front matter 写入新的 markdown 文件
fs.writeFileSync(mdFilePath, frontMatter);
// tp.file.create_new(frontMatter, qcFileName, true, "")

// 下载封面图片并更新 front matter
async function downloadAndSetImage() {
    try {
        await tp.user.download_image("http://api.mtyqx.cn/api/random.php", imagePath);
        setTimeout(() => { 
            app.fileManager.processFrontMatter(mdFilePath, frontmatter => {
                frontmatter["image"] = "cover.jpg";
            }) 
        }, 200);
    } catch (error) {
        console.error("Failed to download the cover image:", error);
    }
}

downloadAndSetImage();

-%>

```

使用 page bundle 组织博客，所有的文件都显示的是 index.md，十分地不方便。因此我们需要下载 `Front Matter Title` 插件。
# Hugo
hugo.toml，忽略某个文件夹
```toml
ignoreFiles = ["post/_templates"]

```

解析 obsidian 的双链

# Stack
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


