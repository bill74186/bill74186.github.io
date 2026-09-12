<div align="center">

# _config.yml 檔案配置

[English](Set-Config.md) | [简体中文](Set-Config.zhCN.md) | **繁体中文**

**`config.yml` 是 Jekyll 的主設定檔**，位於站台根目錄，使用 YAML 格式編寫。它儲存了站台的基本設定、建置選項、外掛設定、自訂變數等，Jekyll 在建置時會自動讀取並套用這些設定<br><br>
下面我會使用程式碼介紹本部落格 `_config.yml` 的設定，希望你看完後會使用和修改你網站的 `_config.yml`

</div>

> [!tip]
> 程式碼被註解或者寫「*」則該選項可以不用理會<br>
> 寫了「!」的必須填！<br>
> `true`和`false`可以不用管

## 1. 網站總設定

**此設定裡的內容全部「必填!」**

```yaml
title: Bill Blog    # 你的部落格網站標題（會顯示在網頁各處）
SEOTitle: bill74186的部落格 | Bill Blog    # SEO 標題（會顯示在<title>裡）
author: bill74186    # 網頁作者（你的名字）
header-img: img/home-bg.png    # 首頁背景圖片（_post文章沒有指定圖片會選用此圖片）
description: 「一「碼」之緣，有「源」再見！」    ——bill74186    # 隨便說點，描述一下
keyword: "Bill, Bill Blog, Bill的部落格, bill71186, 比爾, HTML, blog"    # 寫的跟你部落格相關的詞（搜尋關鍵字）
url: "https://bill74186.github.io"    # 你的部落格網址，請用絕對網址
baseurl: ""    # 例如「/blog」，如果您的部落格託管在「你的網站/blog」
repo: "bill74186.github.io"    # 你的倉庫名稱（填完整來）
```

## 2.側邊欄設定

此設定裡內容**都可以「選填＊」**

```yaml
sidebar: true    # 是否開啟側邊欄
sidebar-about-description: "目標決定你將成為什麼樣的人！"    # 你的座右銘
sidebar-avatar: /img/bill74186.png    # 你的大頭照
sidebar-qq: 3854052547    # 你的QQ號
sidebar-wechat: mmll1920141    # 你的微信號
sidebar-email: bill74186@outlook.com    # 你的電子郵件地址
```

## 3. SNS 設定

你沒有這些就**註解掉**

```yaml
RSS: true    # *是否開啟訂閱功能
weibo_username: bill74186    # *你的微博帳號，底部連結會自動更新的。
jianshu_username: bill74186    # *你的簡書帳號
zhihu_username: bill74186    # *你的知乎帳號
github_username: bill74186    # !你的 GitHub 帳號
twitter_username: bill74186    # *你的推特（X）帳號
facebook_username: Github-Bill    # *你的臉書帳號
linkedin_username: firstname-lastname-idxxxx    # *你的IN帳號
```

## 4. 建置設定與 Gem 設定

```yaml
# 建置設定
highlighter: rouge    # （不用管）自2016年起，GitHub Pages不再支援「pygments」。使用「rouge」來突顯顯示。
permalink: pretty    # （不用管）使用pretty美化永久連結
paginate: 5    # !一頁你準備放幾篇文章
exclude:
  [
    "node_modules",
    "Gruntfile.js",
    "package.json",
    ".gitignore",
    "README.md",
    "_doc"
  ]    # *不需要建置的檔案
anchorjs: true    # *是否開啟錨點連結
start_time: 2026    # !頁尾開始年份
language: zh-CN    # !網頁語言，預設中文
timezone: CN    # *時區，預設UTC(在中國必須選擇)

# Gem 設定
plugins:
  [
    jekyll-paginate,
    jekyll-sitemap,
    jekyll-seo-tag
  ]    # *需要載入的外掛
```
## 5. MD，MC，GA，BT 設定

```yaml
# MarkDown 設定（不用管）
markdown: kramdown    # 使用的 MD (可以試試 redcarpet )
kramdown:
  input: GFM    # 使用 GitHub風格的 MarkDown
  syntax_highlighter_opts:
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1

# 微軟 Clarity 設定
microsoft-clarity:
  enable: true    # *是否開啟微軟 Clarity
  clarity_id: x33wgbqrbr    # !你取得的 ID 碼

# 谷歌統計
google_analytics:
  enable: false    # *是否開啟谷歌統計
  ga_track_id: "UA-xxxxxx-xx"    # !你取得的程式碼
  ga_domain: bill74186.github.io    # !要統計的網站

# 百度統計
baidu_tongji:
  enable: true    # *是否開啟百度統計
  ba_track_id: 788ec39160ac61840afc0489faf9298f    # !你取得的 ID
```

## 6.評論設定

後面可能我會專門出文件教程教大家如何設定

```yaml
comments: true    # *是否開啟評論功能
```

### Giscus 

(具體設定查看官網)

```yaml
giscus:
  enable: true    # *是否開啟 Giscuss
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

(具體設定查看官網)

```yaml
utterances:
  enable: false    # *是否開啟 Uttercances
  repo: "bill74186/bill74186.github.io"
  issue_term: "pathname"
  label: "Comment"
  theme: "github-light"
```

### Gitalk

(具體設定看官網)

```yaml
gitalk:
  enable: false    # *是否開啟 Gitalk
  clientID: "Ov23liP2CLqcJYEBhES0"
  clientSecret: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"    # !這裡不能看
  repo: "bill74186.github.io"
  owner: "bill74186"
  admin: "bill74186"
  distractionFreeMode: true
```

## 7.其他設定

這些設定都是**選填**的

### 精選標籤

```yaml
featured-tags: true    # 是否顯示精選標籤
featured-condition-size: 1    # 標籤關聯的文章數超過此值時才展示
```

### 亂七八糟的設定

```yaml
chrome-tab-theme-color: "#000000"    # Chrome 瀏覽器導覽列顏色
service-worker: true    # 是否允許 SW
mathjax: true    # 是否渲染數學公式
future: true    # 是否允許發佈帶有未來日期的文章或文件
```

## 8.朋友設定

`{ title: "你朋友名字", href: "你朋友網址"}`

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
> 目前本部落格的`_config.yml`就是這樣，後續新增內容可能會擇期更新<br><br>
> **如發現問題可 Issues 報告漏洞**

## 附

**整段程式碼**

```yaml
title: Bill Blog    # 你的部落格網站標題
SEOTitle: bill74186的部落格 | Bill Blog    # SEO 標題
author: bill74186    # 網頁作者（你的名字）
header-img: img/home-bg.png    # 首頁背景圖片
description: 「一「碼」之緣，有「源」再見！」    ——bill74186    # 隨便說點，描述一下
keyword: "Bill, Bill Blog, Bill的部落格, bill71186, 比爾, HTML, blog"    # 寫的跟你部落格相關的詞
url: "https://bill74186.github.io"    # 你的部落格網址，用絕對網址
baseurl: ""    # 例如「/blog」，如果您的部落格託管在「你的網站/blog」
repo: "bill74186.github.io"    # 你的倉庫名

# 側邊欄設定
sidebar: true    #是否開啟側邊欄
sidebar-about-description: "目標決定你將成為什麼樣的人！"    # 你的座右銘
sidebar-avatar: /img/bill74186.png    # 你的大頭照
sidebar-qq: 3854052547    # 你的QQ號
sidebar-wechat: mmll1920141    # 你的微信號
sidebar-email: bill74186@outlook.com    # 你的電子郵件地址

future: true    #是否允許發佈帶有未來日期的文章或文件

# SNS 設定（沒有就註解掉）
RSS: true    # 是否開啟訂閱功能
weibo_username: bill74186    # 你的微博帳號，底部連結會自動更新的。
jianshu_username: bill74186    # 你的簡書帳號
zhihu_username: bill74186    # 你的知乎帳號
github_username: bill74186    # 你的 GitHub 帳號
twitter_username: bill74186    # 你的推特（X）帳號
facebook_username: Github-Bill    #你的臉書帳號
linkedin_username: firstname-lastname-idxxxx    #你的IN帳號

# 建置設定
highlighter: rouge    # 自2016年起，GitHub Pages不再支援「pygments」。使用「rouge」來突顯顯示。
permalink: pretty    # 使用pretty美化永久連結
paginate: 5    # 一頁你準備放幾篇文章
exclude:
  [
    "node_modules",
    "Gruntfile.js",
    "package.json",
    ".gitignore",
    "README.md",
    "_doc"
  ]    # 不需要建置的檔案
anchorjs: true    # 是否開啟錨點連結
start_time: 2026    # 頁尾開始年份
language: zh-CN    # 網頁語言，預設中文
timezone: CN    # 時區，預設UTC(在中國必須選擇)

# Gem 設定
plugins:
  [
    jekyll-paginate,
    jekyll-sitemap,
    jekyll-seo-tag
  ]    # 需要載入的外掛

# MarkDown 設定
markdown: kramdown    # 使用的 MD (可以試試 redcarpet )
kramdown:
  input: GFM    # 使用 GitHub風格的 MarkDown
  syntax_highlighter_opts:
    span:
      line_numbers: false
    block:
      line_numbers: true
      start_line: 1

# 微軟 Clarity 設定
microsoft-clarity:
  enable: true    # 是否開啟微軟 Clarity
  clarity_id: x33wgbqrbr    # 你取得的 ID 碼

# 谷歌統計
google_analytics:
  enable: false    # 是否開啟谷歌統計
  ga_track_id: "UA-xxxxxx-xx"    # 你取得的程式碼
  ga_domain: bill74186.github.io    # 要統計的網站

# 百度統計
baidu_tongji:
  enable: true    # 是否開啟百度統計
  ba_track_id: 788ec39160ac61840afc0489faf9298f    # 你取得的 ID

# 評論設定
comments: true    # 是否開啟評論功能

#Giscus (具體設定查看官網)
giscus:
  enable: true    # 是否開啟 Giscuss
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

# Utterances (具體設定查看官網)
utterances:
  enable: false    # 是否開啟 Uttercances
  repo: "bill74186/bill74186.github.io"
  issue_term: "pathname"
  label: "Comment"
  theme: "github-light"

# Gitalk
gitalk:
  enable: false    # 是否開啟 Gitalk
  clientID: "Ov23liP2CLqcJYEBhES0"
  clientSecret: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"    # 這裡不能看
  repo: "bill74186.github.io"
  owner: "bill74186"
  admin: "bill74186"
  distractionFreeMode: true

# 精選標籤
featured-tags: true    # 是否顯示精選標籤
featured-condition-size: 1    # 標籤關聯的文章數超過此值時才展示

# 其他設定
chrome-tab-theme-color: "#000000"    # Chrome 瀏覽器導覽列顏色
service-worker: true    # 是否允許 SW
mathjax: true    # 是否渲染數學公式

#朋友設定
friends: [
    { title: "AI Chat", href: "/AI-Chat/web/chat.html"},
    { title: "TACS", href: "https://github.com/TACS-Studio/"},
    { title: "bill74286", href: "http://github.com/bill74286/"},
    { title: "Github", href: "https://github.com/"},
    { title: "2048", href: "/2048-Game/"}
#    { title: "你朋友名字", href: "你朋友網址"}
]
```
