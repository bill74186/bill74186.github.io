# _config.yml 文件配置

**`config.yml` 是 Jekyll 的主配置文件**，位于站点根目录，使用 YAML 格语编写。它存储了站点的基本设置、构建选项、插件配置、自定义变量等，Jekyll 在构建时会自动读取并应用这些配置<br><br>
下面我会使用代码介绍本博客 `_config.yml` 的配置，希望你看完后会使用和修改你网站的 `_config.yml`

> [!tip]
> 代码被注释或者写“*”则该选项可以不用理会
> 写了“!”的必须填！
> `true`和`false`可以不用管

## 1. 网站总设置

**此设置里的内容全部“必填!”**

```yaml
title: Bill Blog    # 你的博客网站标题（会显示在网页各处）
SEOTitle: bill74186的博客 | Bill Blog    # SEO 标题（会显示在<title>里）
author: bill74186    # 网页作者（你的名字）
header-img: img/home-bg.png    # 主页背景图片（_post文章没有指定图片会选用此图片）
description: 「一“码”之缘，有“源”再见！」    ——bill74186    # 随便说点，描述一下
keyword: "Bill, Bill Blog, Bill的博客, bill71186, 比尔, HTML, blog"    # 写的跟你博客相关的词（搜索关键词）
url: "https://bill74186.github.io"    # 你的博客网址，请用绝对网址
baseurl: ""    # 例如“/blog”，如果您的博客托管在“你的网站/blog”
repo: "bill74186.github.io"    # 你的仓库名称（填完整来）
```

## 2.侧边栏设置

此设置里内容**都可以“选填＊”**

```yaml
sidebar: true    # 是否开启侧边栏
sidebar-about-description: "目标决定你将成为什么样的人！"    # 你的座右铭
sidebar-avatar: /img/bill74186.png    # 你的大头照
sidebar-qq: 3854052547    # 你的QQ号
sidebar-wechat: mmll1920141    # 你的微信号
sidebar-email: bill74186@outlook.com    # 你的邮箱地址
```

## 3. SNS 设置

你没有这些就**注释掉**

```yaml
RSS: true    # *是否开启订阅功能
weibo_username: bill74186    # *你的微博账号，底部链接会自动更新的。
jianshu_username: bill74186    # *你的简书账号
zhihu_username: bill74186    # *你的知乎账号
github_username: bill74186    # !你的 GitHub 账号
twitter_username: bill74186    # *你的推特（X）账号
facebook_username: Github-Bill    # *你的脸书账号
linkedin_username: firstname-lastname-idxxxx    # *你的IN账号
```

## 4. 构建设置与 Gem 设置

```yaml
# 构建设置
highlighter: rouge    # （不用管）自2016年起，GitHub Pages不再支持“pygments”。使用“rouge”来突出显示。
permalink: pretty    # （不用管）使用pretty美化永久链接
paginate: 5    # !一页你准备放几篇文章
exclude:
  [
    "node_modules",
    "Gruntfile.js",
    "package.json",
    ".gitignore",
    "README.md",
    "_doc"
  ]    # *不需要构建的文件
anchorjs: true    # *是否开启锚链接
start_time: 2026    # !页脚开始年份
language: zh-CN    # !网页语言，默认中文
timezone: CN    # *时区，默认UTC(在中国必须选择)

# Gem 设置
plugins:
  [
    jekyll-paginate,
    jekyll-sitemap,
    jekyll-seo-tag
  ]    # *需要加载的插件
```
## 5. MD，MC，GA，BT 设置

```yaml
# MarkDown 设置（不用管）
markdown: kramdown    # 使用的 MD (可以试试 redcarpet )
kramdown:
  input: GFM    # 使用 GitHub风格的 MarkDown
  syntax_highlighter_opts:
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1

# 微软 Clarity 设置
microsoft-clarity:
  enable: true    # *是否开启微软 Clarity
  clarity_id: x33wgbqrbr    # !你获取的 ID 码

# 谷歌统计
google_analytics:
  enable: false    # *是否开启谷歌统计
  ga_track_id: "UA-xxxxxx-xx"    # !你获取的代码
  ga_domain: bill74186.github.io    # !要统计的网站

# 百度统计
baidu_tongji:
  enable: true    # *是否开启百度统计
  ba_track_id: 788ec39160ac61840afc0489faf9298f    # !你获取的 ID
```

## 6.评论设置

后面可能我会专门出文档教程教大家如何配置

```yaml
comments: true    # *是否开启评论功能
```

### Giscus 

(具体配置查看官网)

```yaml
giscus:
  enable: true    # *是否开启 Giscuss
  repo: "bill74186/bill74186.github.io"
  repo_id: "R_kgDOSuyHDQ"
  category: "Announcements"
  category_id: "DIC_kwDOSuyHDc4C-w2s"
  mapping: "pathname"
  strict: 0
  reactions_enabled: 1
  emit_metadata: 1
  input_position: "top"
  theme: "light"
  lang: "zh-CN"
  loading: "lazy"
```

### Utterances

(具体配置查看官网)

```yaml
utterances:
  enable: false    # *是否开启 Uttercances
  repo: "bill74186/bill74186.github.io"
  issue_term: "pathname"
  label: "Comment"
  theme: "github-light"
```

### Gitalk

(具体配置看官网)

```yaml
gitalk:
  enable: false    # *是否开启 Gitalk
  clientID: "Ov23liP2CLqcJYEBhES0"
  clientSecret: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"    # !这里不能看
  repo: "bill74186.github.io"
  owner: "bill74186"
  admin: "bill74186"
  distractionFreeMode: true
```

## 7.其他设置

这些设置都是**选填**的

### 精选标签

```yaml
featured-tags: true    # 是否显示精选标签
featured-condition-size: 1    # 标签关联的文章数超过此值时才展示
```

### 乱七八糟的设置

```yaml
chrome-tab-theme-color: "#000000"    # Chrome 浏览器导航栏颜色
service-worker: true    # 是否允许 SW
mathjax: true    # 是否渲染数学公式
future: true    # 是否允许发布带有未来日期的帖子或文档
```

## 8.朋友设置

`{ title: "你朋友名字", href: "你朋友网址"}`

```yaml
friends: [
    { title: "AI Chat", href: "/AI-Chat/web/chat.html"},
    { title: "TACS", href: "https://github.com/TACS-Studio/"},
    { title: "bill74286", href: "http://github.com/bill74286/"},
    { title: "Github", href: "https://github.com/"},
    { title: "2048", href: "/2048-Game/"}
]
```

---

> [!note]
> 目前本博客的`_config.yml`就是这样，后续添加新内容可能会择期更新<br><br>
> **如发现问题可 Issues 报告漏洞**

## 附

**整段代码**

```yaml
title: Bill Blog    # 你的博客网站标题
SEOTitle: bill74186的博客 | Bill Blog    # SEO 标题
author: bill74186    # 网页作者（你的名字）
header-img: img/home-bg.png    # 主页背景图片
description: 「一“码”之缘，有“源”再见！」    ——bill74186    # 随便说点，描述一下
keyword: "Bill, Bill Blog, Bill的博客, bill71186, 比尔, HTML, blog"    # 写的跟你博客相关的词
url: "https://bill74186.github.io"    # 你的博客网址，用绝对网址
baseurl: ""    # 例如“/blog”，如果您的博客托管在“你的网站/blog”
repo: "bill74186.github.io"    # 你的仓库名

# 侧边栏设置
sidebar: true    #是否开启侧边栏
sidebar-about-description: "目标决定你将成为什么样的人！"    # 你的座右铭
sidebar-avatar: /img/bill74186.png    # 你的大头照
sidebar-qq: 3854052547    # 你的QQ号
sidebar-wechat: mmll1920141    # 你的微信号
sidebar-email: bill74186@outlook.com    # 你的邮箱地址

future: true    #是否允许发布带有未来日期的帖子或文档

# SNS 设置（没有就注释掉）
RSS: true    # 是否开启订阅功能
weibo_username: bill74186    # 你的微博账号，底部链接会自动更新的。
jianshu_username: bill74186    # 你的简书账号
zhihu_username: bill74186    # 你的知乎账号
github_username: bill74186    # 你的 GitHub 账号
twitter_username: bill74186    # 你的推特（X）账号
facebook_username: Github-Bill    #你的脸书账号
linkedin_username: firstname-lastname-idxxxx    #你的IN账号

# 构建设置
highlighter: rouge    # 自2016年起，GitHub Pages不再支持“pygments”。使用“rouge”来突出显示。
permalink: pretty    # 使用pretty美化永久链接
paginate: 5    # 一页你准备放几篇文章
exclude:
  [
    "node_modules",
    "Gruntfile.js",
    "package.json",
    ".gitignore",
    "README.md",
    "_doc"
  ]    # 不需要构建的文件
anchorjs: true    # 是否开启锚链接
start_time: 2026    # 页脚开始年份
language: zh-CN    # 网页语言，默认中文
timezone: CN    # 时区，默认UTC(在中国必须选择)

# Gem 设置
plugins:
  [
    jekyll-paginate,
    jekyll-sitemap,
    jekyll-seo-tag
  ]    # 需要加载的插件

# MarkDown 设置
markdown: kramdown    # 使用的 MD (可以试试 redcarpet )
kramdown:
  input: GFM    # 使用 GitHub风格的 MarkDown
  syntax_highlighter_opts:
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1

# 微软 Clarity 设置
microsoft-clarity:
  enable: true    # 是否开启微软 Clarity
  clarity_id: x33wgbqrbr    # 你获取的 ID 码

# 谷歌统计
google_analytics:
  enable: false    # 是否开启谷歌统计
  ga_track_id: "UA-xxxxxx-xx"    # 你获取的代码
  ga_domain: bill74186.github.io    # 要统计的网站

# 百度统计
baidu_tongji:
  enable: true    # 是否开启百度统计
  ba_track_id: 788ec39160ac61840afc0489faf9298f    # 你获取的 ID

# 评论设置
comments: true    # 是否开启评论功能

#Giscus (具体配置查看官网)
giscus:
  enable: true    # 是否开启 Giscuss
  repo: "bill74186/bill74186.github.io"
  repo_id: "R_kgDOSuyHDQ"
  category: "Announcements"
  category_id: "DIC_kwDOSuyHDc4C-w2s"
  mapping: "pathname"
  strict: 0
  reactions_enabled: 1
  emit_metadata: 1
  input_position: "top"
  theme: "light"
  lang: "zh-CN"
  loading: "lazy"

# Utterances (具体陪着查看官网)
utterances:
  enable: false    # 是否开启 Uttercances
  repo: "bill74186/bill74186.github.io"
  issue_term: "pathname"
  label: "Comment"
  theme: "github-light"

# Gitalk
gitalk:
  enable: false    # 是否开启 Gitalk
  clientID: "Ov23liP2CLqcJYEBhES0"
  clientSecret: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"    # 这里不能看
  repo: "bill74186.github.io"
  owner: "bill74186"
  admin: "bill74186"
  distractionFreeMode: true

# 精选标签
featured-tags: true    # 是否显示精选标签
featured-condition-size: 1    # 标签关联的文章数超过此值时才展示

# 其他设置
chrome-tab-theme-color: "#000000"    # Chrome 浏览器导航栏颜色
service-worker: true    # 是否允许 SW
mathjax: true    # 是否渲染数学公式

#朋友设置
friends: [
    { title: "AI Chat", href: "/AI-Chat/web/chat.html"},
    { title: "TACS", href: "https://github.com/TACS-Studio/"},
    { title: "bill74286", href: "http://github.com/bill74286/"},
    { title: "Github", href: "https://github.com/"},
    { title: "2048", href: "/2048-Game/"}
#    { title: "你朋友名字", href: "你朋友网址"}
]
```
