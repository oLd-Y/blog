---
title: Hugo + Stack + Obsidian 搭建博客
categories: 计算机
tags:
  - hugo
  - blog
  - obsidian
  - 工具
date: 2024-06-25
description: ""
slug: ""
image: cover.jpg
weight: 1
draft: false
lastmod: 2024-07-20T17:17:56+08:00
---
## Hugo
hugo 是我们构建博客的主要工具，号称是世界上最快的网站构建工具。它通过对文件夹分层管理我们的资源；通过标记语言（主要为 markdown）编写内容，然后在构建之后将内容渲染到 themes 或者 layouts 的 hugo 的模板文件中来展示博客。

值得一提的是，hugo 只需要下载它的 exe 文件即可正常工作。首先我们安装 hugo。在 [release](https://github.com/gohugoio/hugo/releases/tag/v0.127.0) 页面下载带 extended 的版本，否则主题无法正常启动。下载完成之后，将 hugo.exe 所在文件夹加入环境变量。

hugo 网站的搭建网上资料已经很多了，例如你可参考[这篇文章](https://zexwoo.blog/posts/tutorials/build-hugo-blog/)，讲得比较详细，这里不再赘述，只提一些需要知道的知识。

### 主要命令

在构建网站的过程中主要使用到的 hugo 命令也就几个：

```shell
hugo version # 查看 hugo 的版本
hugo new site blog # 在当前目录下创建一个名为 blog 的 hugo 站点
hugo serve # 启动站点
hugo serve -D # 启动站点，并附带草稿
```

其中 `hugo new site blog` 命令中的 blog 可以替换成其它字符串。它会创建一个 blog 目录作为网站的根结点，下方的一级目录就是它的各种资源文件夹，例如 assets 存放一些图标、layouts 存放你的网站的 hugo 模板文件等。我们主要关注 content 文件夹，你的网站所有**内容**相关的东西，比如文章、侧边栏、功能栏的展示等，都放在这个目录中。更多请查看[hugo 的目录结构](https://gohugo.io/getting-started/directory-structure/)。

### Front Matter

对于每篇 markdown 文章，都可以在开头为其添加一些以两对 `---` 包裹的键值对，作为这篇文章的 front matter，用于控制这篇文章的一些属性，例如是否为草稿，设置封面及路径等。

例如本篇博客的 front matter 格式就如下所示：

```markdown
---
title: Hugo + Stack + Obsidian 搭建博客
categories:
  - ""
tags:
  - hugo
  - obsidian
  - blog
date: 2024-06-25
description: ""
slug: ""
image: cover.jpg
weight: 1
draft: false
lastmod: 2024-06-28T20:51:31+08:00
---
```

### Page Bundle

hugo 的所有文章都是放在 content/post 目录中的（根据主题的不同可能有些差异，不过大多数主题都遵循这个约定）。你可以直接使用单个 markdown 文件，将其放在该目录中就可以显示为博客，但 hugo  更推荐 Page Bundle 的内容组织形式。

所谓 Page Bundle，就是以**文件夹名**作为标识，`index.md` / `_index.md` 文件作为组织的核心，通过文件夹将相关联的内容组织到一起，方便管理。比如一篇博客的中英文版本、图片之类的内容都可以放在同一文件夹中，或者用于显示目录的文件夹也将它的内容都放在一起，就不用到其它地方才能看到了。

需要说明的是，Page Bundle 分为 Leaf Bundle 和 Branch Bundle。简单理解：

- Leaf Bundle 就是叶子节点，以 index.md 标识，其后不可以再有其它 Leaf Bundle；
- 而 Branch Bundle 则是肢干节点，以 \_index.md 标识（注意这个下横线），其后可以有其它的 Leaf Bundle 和 Branch Bundle。

本博客的主题 Stack 的 content 目录，以及子目录 archives、categories、page、post、tags 等，都是以这样的方式组织文件的。

详情可以查看[官网](https://gohugo.io/content-management/page-bundles/)。

### 配置文件 hugo.toml

hugo 中所有与配置相关的内容，包括图标、外链的设置，语言、评论的添加等，都在配置文件中处理。这个文件可以是 hugo.toml, hugo.yaml, hugo.json 中的任意一种，官网推荐使用 hugo.toml，因此本博客亦使用 hugo.toml。

hugo.toml 文件的位置默认位于站点的根目录下。不过为了组织方便，也可以将其放在根目录的 `config/_default` 目录下，然后将配置按照类型放到不同的文件中。详情请查看[官网](https://gohugo.io/getting-started/configuration/)。

具体的 hugo.toml 文件请查看 Stack 一节。

## Stack

本博客使用 [Stack](https://github.com/CaiJimmy/hugo-theme-stack) 作为主题，将项目克隆到 themes 文件夹下后，将其中的 exampleSite 中的所有内容复制到博客的根目录下即可开始使用。使用 `hugo serve` 命令可以看到项目被部署到了本地。访问 `http://localhost:1313` 即可查看博客项目。

修改 hugo.toml 文件中的各种配置项即可看到网站实时修改。完整的配置文件就不放上来了，提几个比较关键的配置：

```toml
# 网站的根域名
baseurl = "https://old-y.github.io/blog/"
# 用于显示使用的是什么语言
languageCode = "zh-CN"
# 指定使用的主题
theme = "hugo-theme-stack"
# 设置文章的默认语言
DefaultContentLanguage = "zh-cn"
# 设置是否使用汉字编码，CJK 表示中、日、韩
hasCJKLanguage = true

...

  # 设置评论提供商，我的是 giscus，将在 giscus 中配置好的信息填入 giscus 那一栏即可
  # [giscus 官网](https://giscus.app/zh-CN)
  [params.comments]
  enabled = true
  provider = "giscus"

    [params.comments.disqusjs]

    [params.comments.utterances]
    issueTerm = "pathname"

    [params.comments.beaudar]
    issueTerm = "pathname"

    [params.comments.remark42]

    [params.comments.vssue]
    autoCreateIssue = false

    [params.comments.waline]
    emoji = [ "https://unpkg.com/@waline/emojis@1.0.1/weibo" ]
    requiredMeta = [ "name", "email", "url" ]

      [params.comments.waline.locale]
      admin = "Admin"

    [params.comments.twikoo]

    [params.comments.cactus]
    defaultHomeserverUrl = "https://matrix.cactus.chat:8448"
    serverName = "cactus.chat"
    siteName = ""

    [params.comments.giscus]
    repo = ""
    repoID = ""
    category = ""
    categoryID = ""
    mapping = "pathname"
    lightTheme = "light"
    darkTheme = "dark"
    theme = "preferred_color_scheme"
    lang = "zh-CN"
    loading = "lazy"
    reactionsEnabled = 1
    emitMetadata = 0

    [params.comments.gitalk]

    [params.comments.cusdis]

...

[menu]
main = [ ]
  # 设置侧边栏
  [[menu.social]]
  identifier = "github"
  name = "GitHub"
  url = "https://github.com/oLd-Y"
  weight = 1

    [menu.social.params]
    icon = "brand-github"

  [[menu.social]]
  identifier = "bilibili"
  name = "bilibili"
  url = "https://space.bilibili.com/180272185"

    [menu.social.params]
    icon = "brand-bilibili"

  [[menu.social]]
  identifier = "rss"
  name = "Rss"
  url = "https://old-y.github.io/blog/index.xml"

    [menu.social.params]
    icon = "rss"

...
```

## Obsidian

下面的说明默认你有一定的 Obsidian 使用经验。

### 自动创建 Page Bundle

之前提到，与常规单个 markdown 文件不同，hugo 更推荐采用 page bundle 的形式组织文件。那么自然是不能每个文件夹和文件都手动创建，那样也太低效了。因此我们需要使用到 templater 插件。

在 Obsidain 插件社区中安装 templater 插件。指定好模板文件夹之后，在该模板文件夹中创建一个 `create page bundle` 文件，并填入如下模板：

```markdown
<%*
let title = await tp.system.prompt("Enter the title");
let folder = `/${title}/`

// 获取 Obsidian 根 vault 路径
let vaultPath = app.vault.adapter.basePath;
// 构建封面保存路径
let imagePath = `${vaultPath}${folder}cover.jpg`;
// tp.system.suggester(["中文", "English"], ["index.zh-cn", "index.en"], true, "请选择博客的语言")

await tp.file.create_new(tp.file.find_tfile("new index template"), "index.zh-cn", true, folder)

await tp.user.download_image("<imageSite>", imagePath);
-%>

```

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240629114157.png)


然后再创建一个模板文件命令为 `new index template`，填入如下内容：

```markdown
---
title: <% tp.file.folder() %>
catogories: 
tags: 
date: <% tp.file.creation_date("YYYY-MM-DD") %>
description: 
image: cover.jpg
weight: 1
draft: true
---
```
（注意第一个模板可以随意命名，第二个模板重新命名之后需要将 `tp.file.find_tfile("new index template")` 代码中的名字相应改掉。）

接着我们设置一下 templater 的脚本地址

![image.png](https://raw.githubusercontent.com/oLd-Y/PicGoPictures/main/20240629121606.png)

在其中新建一个 js 脚本并命名为 `download_image.js`，用其它文本编辑器填入如下代码：

```js
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function downloadImage(url, localPath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(localPath);

        const request = protocol.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // Handle redirect
                return downloadImage(response.headers.location, localPath).then(resolve).catch(reject);
            } else if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close(resolve);
            });
        });

        request.on('error', (err) => {
            fs.unlink(localPath, () => reject(err));
        });

        file.on('error', (err) => {
            fs.unlink(localPath, () => reject(err));
        });
    });
}

module.exports = downloadImage;
```
如此设置了之后，就可以点击 obsidian 左侧的 templater 功能按钮（一个 `<` 一个 `%`），选择 `create page bundle` 就可以看到左侧边栏创建了一个新的 page bundle 了，并且每篇文章都自动从网上下载一张图片作为封面。

### 解决 index 显示问题

使用 page bundle 组织博客，obsidian 中的主要文件都显示的是 index.md，在 graph view 和 canvas 中都是如此显示，十分地难以区分，也不大好看。因此我们需要用到 `Front Matter Title` 插件。

安装完成之后将每个按钮都打开即可，这样之后，只要你的文章中包含 `title` 的 front matter，它就会自动作为 obsidian 中的文件名。注意请自行将第 3 段 js 脚本中的代码 `await tp.user.download_image("<imageSite>", imagePath);` 中的 `<imageSite>` 修改为可以随机获取图片的网址。

其它比较有用的 obsidian 插件如 git、Image auto upload plugin、update time on edit 等，请自行探索。

## 踩坑记录

1. 如果是从其它博客主题迁移过来的，注意把相关的文件清理干净。比如我就是在 `content/` 目录下残留有上个主题 `PaperMod` 的 search.md 文件，导致 `Stack` 主题的搜索功能（`content/search/index.md`）无法生效。

2. 如果资源的最前方带了 `/`，则表示从域名主机的根目录开始；不带 `/` 则表示从博客的根目录开始（像 `static`、`assets` 这些文件夹都会被构建为根目录。[参考链接](https://discourse.gohugo.io/t/publication-on-github-pages-and-baseurl/43631/4)

3. Hugo 会自动生成你的所有博客中的 categories 和 tags 元数据的词云，但如果相要为每个词云添加背景图片，则需要手动为每个单词在 `content/categories` 或者 `content/tags` 目录中设置 page bundle。在 `_index.zh-cn.md` 中设置。

## 参考链接

[个人网站的建立过程（三）：Hugo主题stack的使用与优化](https://jinli.io/p/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E7%9A%84%E5%BB%BA%E7%AB%8B%E8%BF%87%E7%A8%8B%E4%B8%89hugo%E4%B8%BB%E9%A2%98stack%E7%9A%84%E4%BD%BF%E7%94%A8%E4%B8%8E%E4%BC%98%E5%8C%96/)

[Hugo Stack主题装修笔记](https://thirdshire.com/hugo-stack-renovation/)

[如何在 Windows 系统从零开始构建一个和我一样的 Hugo 博客](https://zexwoo.blog/posts/tutorials/build-hugo-blog/#%E6%B7%BB%E5%8A%A0-hugo-%E4%B8%BB%E9%A2%98-stack)





