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
lastmod: 2024-06-29T10:35:53+08:00
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

这里先提一下，在后面 Obsidian 那里会详细说明。

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


参考的 hugo.toml 如下所示：
```toml
baseurl = "https://old-y.github.io/blog/"
# baseurl = "http://localhost:1313/"
languageCode = "zh-CN"
theme = "hugo-theme-stack"
paginate = 5
title = "谷栗杳"
copyright = "谷栗杳"
DefaultContentLanguage = "zh-cn"
hasCJKLanguage = true

# 需要放到配置文件较前的地方，否则可能不生效。相对于 content 文件夹的位置。
ignoreFiles = ["post/_templates"]


[languages.en]
languageName = "English"
title = "lyao's Blog"
weight = 1

  [languages.en.params]
  description = "Example description"

[languages.zh-cn]
languageName = "中文"
title = "谷栗杳"
weight = 2

  [languages.zh-cn.params]
  description = "成为最好的自己"

[services.disqus]
shortname = "hugo-theme-stack"

[services.googleAnalytics]

[permalinks]
post = "/p/:slug/"
page = "/:slug/"

[params]
mainSections = [ "post" ]
featuredImageField = "image"
rssFullContent = true
favicon = "favicon.ico"

  [params.footer]
  since = 2_024

  [params.dateFormat]
  published = "Jan 02, 2006"
  lastUpdated = "Jan 02, 2006 15:04 MST"

  [params.sidebar]
  emoji = "✨"
  subtitle = "再微弱的荧光，也有它可以照亮的地方。"

    [params.sidebar.avatar]
    enabled = true
    local = true
    src = "img/avatar.png"

  [params.article]
  math = true
  toc = true
  readingTime = true

    [params.article.license]
    enabled = true
    default = "Licensed under CC BY-NC-SA 4.0"

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
    repo = "oLd-Y/blog"
    repoID = "R_kgDOLzCoMA"
    category = "Announcements"
    categoryID = "DIC_kwDOLzCoMM4Ce8bK"
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

[[params.widgets.homepage]]
type = "search"

[[params.widgets.homepage]]
type = "archives"

  [params.widgets.homepage.params]
  limit = 5

[[params.widgets.homepage]]
type = "categories"

  [params.widgets.homepage.params]
  limit = 10

[[params.widgets.homepage]]
type = "tag-cloud"

  [params.widgets.homepage.params]
  limit = 10

[[params.widgets.page]]
type = "toc"

[params.opengraph.twitter]
card = "summary_large_image"

[params.defaultImage.opengraph]
enabled = false
local = false

  [params.colorScheme]
  toggle = true
  default = "auto"

[params.imageProcessing.cover]
enabled = true

[params.imageProcessing.content]
enabled = true

[menu]
main = [ ]

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

[related]
includeNewer = true
threshold = 60
toLower = false

  [[related.indices]]
  name = "tags"
  weight = 100

  [[related.indices]]
  name = "categories"
  weight = 200

[markup.goldmark.renderer]
unsafe = true

[markup.tableOfContents]
endLevel = 4
ordered = true
startLevel = 2

[markup.highlight]
noClasses = false
codeFences = true
guessSyntax = true
lineNoStart = 1
lineNos = true
lineNumbersInTable = true
tabWidth = 4



```

```

	
		
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


