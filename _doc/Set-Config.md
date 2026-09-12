<div align="center">

# _config.yml File Configuration

**English** | [简体中文](Set-Config.zhCN.md) | [繁体中文](Set-Config.zhTW.md)

**`config.yml` is Jekyll's main configuration file**, located in the site root directory and written in YAML format. It stores the site's basic settings, build options, plugin configurations, custom variables, and more. Jekyll automatically reads and applies these configurations during the build process.<br><br>
Below I will introduce the configuration of this blog's `_config.yml` using code. I hope that after reading it, you will be able to use and modify your website's `_config.yml`.

</div>

> [!tip]
> Options that are commented out or marked with "*" can be ignored.<br>
> Options marked with "!" are required!<br>
> `true` and `false` can be left as-is.

## 1. Website General Settings

**All content in this section is "required!"**

```yaml
title: Bill Blog    # Your blog site title (displayed throughout the webpage)
SEOTitle: bill74186's Blog | Bill Blog    # SEO title (displayed in <title>)
author: bill74186    # Webpage author (your name)
header-img: img/home-bg.png    # Homepage background image (used when a _post article does not specify an image)
description: 「Destined by code, we meet again by source!」    ——bill74186    # Say something freely, a brief description
keyword: "Bill, Bill Blog, Bill's Blog, bill71186, Bill, HTML, blog"    # Keywords related to your blog (search keywords)
url: "https://bill74186.github.io"    # Your blog URL, please use an absolute URL
baseurl: ""    # e.g. "/blog", if your blog is hosted at "yourwebsite/blog"
repo: "bill74186.github.io"    # Your repository name (fill in the full name)
```

## 2. Sidebar Settings

All content in this section is **"optional*"**

```yaml
sidebar: true    # Whether to enable the sidebar
sidebar-about-description: "Your goals determine who you will become!"    # Your motto
sidebar-avatar: /img/bill74186.png    # Your profile photo
sidebar-qq: 3854052547    # Your QQ number
sidebar-wechat: mmll1920141    # Your WeChat ID
sidebar-email: bill74186@outlook.com    # Your email address
```

## 3. SNS Settings

If you don't have these, **comment them out**

```yaml
RSS: true    # *Whether to enable the RSS subscription feature
weibo_username: bill74186    # *Your Weibo username, the footer link will update automatically
jianshu_username: bill74186    # *Your Jianshu username
zhihu_username: bill74186    # *Your Zhihu username
github_username: bill74186    # !Your GitHub username
twitter_username: bill74186    # *Your Twitter (X) username
facebook_username: Github-Bill    # *Your Facebook username
linkedin_username: firstname-lastname-idxxxx    # *Your LinkedIn username
```

## 4. Build Settings and Gem Settings

```yaml
# Build Settings
highlighter: rouge    # (No need to worry) Since 2016, GitHub Pages no longer supports "pygments". Use "rouge" for syntax highlighting.
permalink: pretty    # (No need to worry) Use "pretty" to beautify permalinks
paginate: 5    # !How many articles to display per page
exclude:
  [
    "node_modules",
    "Gruntfile.js",
    "package.json",
    ".gitignore",
    "README.md",
    "_doc"
  ]    # *Files that do not need to be built
anchorjs: true    # *Whether to enable anchor links
start_time: 2026    # !Footer start year
language: zh-CN    # !Webpage language, default is Chinese
timezone: CN    # *Timezone, default is UTC (must be set when in China)

# Gem Settings
plugins:
  [
    jekyll-paginate,
    jekyll-sitemap,
    jekyll-seo-tag
  ]    # *Plugins to load
```
## 5. MD, MC, GA, BT Settings

```yaml
# Markdown Settings (no need to worry)
markdown: kramdown    # MD engine to use (you can try redcarpet)
kramdown:
  input: GFM    # Use GitHub-Flavored Markdown
  syntax_highlighter_opts:
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1

# Microsoft Clarity Settings
microsoft-clarity:
  enable: true    # *Whether to enable Microsoft Clarity
  clarity_id: x33wgbqrbr    # !The ID code you obtained

# Google Analytics
google_analytics:
  enable: false    # *Whether to enable Google Analytics
  ga_track_id: "UA-xxxxxx-xx"    # !The tracking code you obtained
  ga_domain: bill74186.github.io    # !The website to track

# Baidu Tongji (Baidu Analytics)
baidu_tongji:
  enable: true    # *Whether to enable Baidu Tongji
  ba_track_id: 788ec39160ac61840afc0489faf9298f    # !The ID you obtained
```

## 6. Comment Settings

I may publish a dedicated tutorial later on how to configure this.

```yaml
comments: true    # *Whether to enable the comment feature
```

### Giscus

(For detailed configuration, refer to the official website)

```yaml
giscus:
  enable: true    # *Whether to enable Giscus
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

(For detailed configuration, refer to the official website)

```yaml
utterances:
  enable: false    # *Whether to enable Utterances
  repo: "bill74186/bill74186.github.io"
  issue_term: "pathname"
  label: "Comment"
  theme: "github-light"
```

### Gitalk

(For detailed configuration, refer to the official website)

```yaml
gitalk:
  enable: false    # *Whether to enable Gitalk
  clientID: "Ov23liP2CLqcJYEBhES0"
  clientSecret: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"    # !This cannot be shown
  repo: "bill74186.github.io"
  owner: "bill74186"
  admin: "bill74186"
  distractionFreeMode: true
```

## 7. Other Settings

These settings are all **optional**

### Featured Tags

```yaml
featured-tags: true    # Whether to display featured tags
featured-condition-size: 1    # Tags are only displayed when the number of associated articles exceeds this value
```

### Miscellaneous Settings

```yaml
chrome-tab-theme-color: "#000000"    # Chrome browser tab theme color
service-worker: true    # Whether to allow Service Worker
mathjax: true    # Whether to render mathematical formulas
future: true    # Whether to allow publishing posts or documents with future dates
```

## 8. Friends Settings

`{ title: "Your friend's name", href: "Your friend's URL"}`

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
> The current `_config.yml` of this blog is as above. New content may be added and updated from time to time in the future.<br><br>
> **If you find any issues, please report bugs via Issues.**

## Appendix

**Full Code**

```yaml
title: Bill Blog    # Your blog site title
SEOTitle: bill74186's Blog | Bill Blog    # SEO title
author: bill74186    # Webpage author (your name)
header-img: img/home-bg.png    # Homepage background image
description: 「Destined by code, we meet again by source!」    ——bill74186    # Say something freely, a brief description
keyword: "Bill, Bill Blog, Bill's Blog, bill71186, Bill, HTML, blog"    # Keywords related to your blog
url: "https://bill74186.github.io"    # Your blog URL, use an absolute URL
baseurl: ""    # e.g. "/blog", if your blog is hosted at "yourwebsite/blog"
repo: "bill74186.github.io"    # Your repository name

# Sidebar Settings
sidebar: true    # Whether to enable the sidebar
sidebar-about-description: "Your goals determine who you will become!"    # Your motto
sidebar-avatar: /img/bill74186.png    # Your profile photo
sidebar-qq: 3854052547    # Your QQ number
sidebar-wechat: mmll1920141    # Your WeChat ID
sidebar-email: bill74186@outlook.com    # Your email address

future: true    # Whether to allow publishing posts or documents with future dates

# SNS Settings (comment out if you don't have them)
RSS: true    # Whether to enable the RSS subscription feature
weibo_username: bill74186    # Your Weibo username, the footer link will update automatically
jianshu_username: bill74186    # Your Jianshu username
zhihu_username: bill74186    # Your Zhihu username
github_username: bill74186    # Your GitHub username
twitter_username: bill74186    # Your Twitter (X) username
facebook_username: Github-Bill    # Your Facebook username
linkedin_username: firstname-lastname-idxxxx    # Your LinkedIn username

# Build Settings
highlighter: rouge    # Since 2016, GitHub Pages no longer supports "pygments". Use "rouge" for syntax highlighting.
permalink: pretty    # Use "pretty" to beautify permalinks
paginate: 5    # How many articles to display per page
exclude:
  [
    "node_modules",
    "Gruntfile.js",
    "package.json",
    ".gitignore",
    "README.md",
    "_doc"
  ]    # Files that do not need to be built
anchorjs: true    # Whether to enable anchor links
start_time: 2026    # Footer start year
language: zh-CN    # Webpage language, default is Chinese
timezone: CN    # Timezone, default is UTC (must be set when in China)

# Gem Settings
plugins:
  [
    jekyll-paginate,
    jekyll-sitemap,
    jekyll-seo-tag
  ]    # Plugins to load

# Markdown Settings
markdown: kramdown    # MD engine to use (you can try redcarpet)
kramdown:
  input: GFM    # Use GitHub-Flavored Markdown
  syntax_highlighter_opts:
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1

# Microsoft Clarity Settings
microsoft-clarity:
  enable: true    # Whether to enable Microsoft Clarity
  clarity_id: x33wgbqrbr    # The ID code you obtained

# Google Analytics
google_analytics:
  enable: false    # Whether to enable Google Analytics
  ga_track_id: "UA-xxxxxx-xx"    # The tracking code you obtained
  ga_domain: bill74186.github.io    # The website to track

# Baidu Tongji (Baidu Analytics)
baidu_tongji:
  enable: true    # Whether to enable Baidu Tongji
  ba_track_id: 788ec39160ac61840afc0489faf9298f    # The ID you obtained

# Comment Settings
comments: true    # Whether to enable the comment feature

# Giscus (for detailed configuration, refer to the official website)
giscus:
  enable: true    # Whether to enable Giscus
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

# Utterances (for detailed configuration, refer to the official website)
utterances:
  enable: false    # Whether to enable Utterances
  repo: "bill74186/bill74186.github.io"
  issue_term: "pathname"
  label: "Comment"
  theme: "github-light"

# Gitalk
gitalk:
  enable: false    # Whether to enable Gitalk
  clientID: "Ov23liP2CLqcJYEBhES0"
  clientSecret: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"    # This cannot be shown
  repo: "bill74186.github.io"
  owner: "bill74186"
  admin: "bill74186"
  distractionFreeMode: true

# Featured Tags
featured-tags: true    # Whether to display featured tags
featured-condition-size: 1    # Tags are only displayed when the number of associated articles exceeds this value

# Other Settings
chrome-tab-theme-color: "#000000"    # Chrome browser tab theme color
service-worker: true    # Whether to allow Service Worker
mathjax: true    # Whether to render mathematical formulas

# Friends Settings
friends: [
    { title: "AI Chat", href: "/AI-Chat/web/chat.html"},
    { title: "TACS", href: "https://github.com/TACS-Studio/"},
    { title: "bill74286", href: "http://github.com/bill74286/"},
    { title: "Github", href: "https://github.com/"},
    { title: "2048", href: "/2048-Game/"}
#    { title: "Your friend's name", href: "Your friend's URL"}
]
```
