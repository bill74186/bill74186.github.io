
<div align="center">

# Bill Blog
「一「碼」之緣，有「源」再見！」

![Blog Photo](../img/blog-title.png)

<p>
  <img src="https://img.shields.io/badge/HTML-5-E34F26?style=flat-square&logo=html5&" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS-3-1572B6?style=flat-square&logo=css&" alt="CSS3">
  <img src="https://img.shields.io/badge/Less-4.2.0-1D365D?style=flat-square&logo=less&" alt="Less4.2.0">
  <img src="https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=flat-square&logo=javascript&" alt="JavaScript-ES2025">
  <img src="https://img.shields.io/badge/Ruby-3.4-CC342D?style=flat-square&logo=ruby&" alt="Ruby3.4">
</p>

[English](../README.md) | [简体中文](README.zhCN.md) | **繁體中文**

<p>
  <a href="https://github.com/bill74186/bill74186.github.io/stargazers"><img src="https://img.shields.io/github/stars/bill74186/bill74186.github.io?style=for-the-badge&logo=github&color=f4c542" alt="Stars"></a>
  <a href="https://github.com/bill74186/bill74186.github.io/network/members"><img src="https://img.shields.io/github/forks/bill74186/bill74186.github.io?style=for-the-badge&logo=github&color=6cc644" alt="Forks"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License"></a>
</p>

部落格的搭建教學修改自 [Hux](https://github.com/Huxpro/huxpro.github.io)

部落格模板也修改自 [Hux Blog](https://github.com/huxpro.github.io)

有興趣可以看看原版教學

</div>

>
### [查看部落格戳這裡 👆](http://bill74186.github.io)


## 使用

* 開始
	* [環境](#環境)
	* [開始](#開始)
	* [撰寫博文](#撰寫博文)
* 元件
	* [側邊欄](#側邊欄)
	* [迷你關於我](#迷你關於我)
	* [推薦標籤](#推薦標籤)
	* [SNS 設定](#SNS-設定)
	* [好友連結](#好友連結)
	* [演示文件佈局](#演示文件佈局)
* 評論與網站分析
	* [評論](#評論系統)
	* [網站分析](#統計分析) 
* 進階部分
	* [自訂](#customization)
	* [標題底圖](#標題底圖)
	* [搜尋展示標題-頭文件](#頭文件修改)

## 開始

### 環境

如果你安裝了 [jekyll](http://jekyllcn.com/)，那你只需要在命令列輸入`jekyll serve` 或 `jekyll s`就能在本地瀏覽器中輸入`http://127.0.0.1:4000/`預覽主題，對主題的修改也能即時展示（需要強刷瀏覽器）。


### 開始

你可以通用修改 `_config.yml`文件來輕鬆的開始搭建自己的部落格:

```yaml
# 網站設定
title: Bill Blog    # 你的部落格網站標題
SEOTitle: bill74186的部落格 | Bill Blog    # SEO 標題
description: "Hey"    # 隨便說點，描述一下

# SNS 設定
zhihu_username: bill74186    # 你的知乎名稱
github_username: bill74186    # 你的 GitHub 名稱

# 組態設定
# paginate: 10    # 一頁你準備放幾篇文章
```

Jekyll官方網站還有很多的參數可以調，比如設定文章的連結形式...網址在這裡：[Jekyll - Official Site](http://jekyllrb.com/) 中文版的在這裡：[Jekyll中文](http://jekyllcn.com/)。

### 撰寫博文

要發表的文章一般以 **Markdown** 的格式放在這裡`_posts/`，你只要看看這篇模板裡的文章你就立刻明白該如何設定。

yaml 頭文件長這樣:

```

---
layout:     post
title:      "你好 「Bill部落格」"
subtitle:   " \"Hello World, Hello Blog\""
date:       2026-06-04 
author:     "bill74186"
header-img: "img/offline-bg.jpg"
catalog: true
tags:
    - 部落格
---
```

## 元件

### 側邊欄

看右邊:
![側邊欄圖片 sidebar.png](sidebar.png)

設定是在 `_config.yml`文件裡面的`側邊欄設定`那塊。

```yaml
# 側邊欄設定
sidebar: true  #新增側邊欄
sidebar-about-description: "簡單的描述一下你自己"
sidebar-avatar: /img/bill74186.jpg     #你的大頭貼，請使用絕對位址.注意：名字區分大小寫！副檔名也是
```

側邊欄是響應式佈局的，當螢幕尺寸小於992px的時候，側邊欄就會移動到底部。具體請見bootstrap柵格系統 &lt;http://v3.bootcss.com/css/&gt;


### 迷你關於我

Mini-About-Me 這個模組將在你的頭像下面，展示你所有的社交帳號。這個也是響應式佈局，當螢幕變小時候，會將其移動到頁面底部，只不過會稍微有點小變化，具體請看程式碼。

### 推薦標籤

看到這個網站 [Medium](http://medium.com) 的推薦標籤非常的炫酷，所以我將他加了進來。
這個模組現在是獨立的，可以呈現在所有頁面，包括首頁和發表的每一篇文章標題的頭上。

```yaml
# 推薦標籤
featured-tags: true  
featured-condition-size: 1
```

唯一需要注意的是`featured-condition-size`: 如果一個標籤的 SIZE，也就是使用該標籤的文章數大於上面設定的條件值，這個標籤就會在首頁上被推薦。
 
內部有一個條件模板 `{% if tag[1].size &gt; {{site.featured-condition-size}} %}` 是用來做篩選過濾的.

### SNS 設定

在下面輸入的社交帳號，沒有的新增的不會顯示在側邊框中。

```yaml
	# SNS 設定
	RSS: false
    weibo_username: bill74186
    jianshu_username: bill74186
    zhihu_username: bill74186
    github_username: bill74186
    twitter_username: bill74186
    facebook_username: bill74186
    linkedin_username: firstname-lastname-idxxxx
```

![SNS 設定SNS-Setting.png](SNS-Setting.png)

### 好友連結

好友連結部分。這會在全部頁面顯示。

設定是在 `_config.yml`文件裡面的`Friends`那塊，自己加吧。

```yaml
# 好友連結
friends: [
    { title: "Github", href: "https://github.com/"},
    { title: "2048", href: "https://bill74186.github.io/2048-Game/"}
]
```


### 演示文件佈局

![keynote.png](keynote.png)

這部分是用於佔用html格式的投影片的，一般用到的是 Reveal.js, Impress.js, Slides, Prezi 等等.我認為一個現代化的部落格怎麼能少了放html幻燈的功能呢~

其主要原理是新增一個 `iframe`，在裡面加入外部連結。你可以直接寫到頭文件裡面去，詳情請見下面的yaml頭文件的寫法。

```

---
layout:     keynote
iframe:     "http://huangxuan.me/js-module-7day/"
---
```

iframe在不同的裝置中，將會自動的調整大小。保留內邊距是為了讓手機用戶可以向下滑動，以及新增更多的內容。


### 評論系統

# 部落格評論系統說明

本部落格已基本支援以下三種不同類型的評論系統：
- `giscus`
- `utterances`
- `gitalk`

大家可以自由選擇您需要的評論系統，詳細程式碼可參閱`_config.yml`的內容：

```yaml
# 評論開關
comments: [true/false]

giscus:
  enable: [true/false]
  repo: "username/reponame"
  repo_id: "[Repository ID]"
  category: "[Category Name]"
  category_id: "[Category ID]"
  mapping: "[pathname/url/title]"
  strict: [0/1]
  reactions_enabled: [0/1]
  emit_metadata: [0/1]
  input_position: "[top/bottom]"
  theme: "[light/dark/custom]"
  lang: "[zh-CN/en-US/other]"
  loading: "[lazy/eager]"

utterances:
  enable: [true/false]
  repo: "username/reponame"
  issue_term: "pathname"
  label: "[Comment/other]"
  theme: "[github-light/other]"

gitalk:
  enable: [true/false]
  clientID: "[Client ID]"
  clientSecret: "[Client Secret]"
  repo: "username/reponame"
  owner: "[Owner Name]"
  admin: "[Admin Account]"
  distractionFreeMode: [true/false]
```

> ![note]
> 此處填寫的為建議值，請依實際狀況修改

### 統計分析

網站分析，現在支援百度統計和Google Analytics。需要去官方網站註冊一下，然後將返回的code貼在下面：

```
# Baidu Analytics
ba_track_id: [your-baId-id]

# Google Analytics
ga_track_id: 'UA-xxxxxx-xx'            # 你用Google帳號去註冊一個就會給你一個這樣的id
ga_domain: auto			# 預設的是 auto, 這裡我是自訂了的功能變數名稱，你如果沒有自己的功能變數名稱，需要改成auto。
```

### 自訂

如果你喜歡折騰，你可以去自訂這個模板的 Code。

**如果你可以理解 `_include/` 和 `_layouts/`資料夾下的程式碼（這裡是整個介面佈局的地方），你就可以使用 Jekyll 使用的模版引擎 [Liquid](https://github.com/Shopify/liquid/wiki)的語法直接修改/新增程式碼，來進行更有創意的自訂介面啦！**

### 標題底圖

部落格每頁的標題底圖是可以自己選的，看看幾篇範例post你就知道如何設定了。
  
標題底圖的選取完全是看個人的審美了。每一篇文章可以有不同的底圖，你想放什麼就放什麼，最後寬度要夠，大小不要太大，否則載入慢啊。

&gt; 上傳的圖片最好先壓縮，這裡推薦 imageOptim 圖片壓縮軟體，讓你的部落格起飛。

但是需要注意的是本模板的標題是**白色**的，所以背景色要設定為**灰色**或者**黑色**，總之深色系就對了。當然你還可以自訂修改字型顏色，總之，用github pages就是可以完全的個性自訂自己的部落格。

### 頭文件修改

我的部落格標題是 **「Bill Blog」** 但是我想要在搜尋的時候顯示 **「bill74186的部落格 | Bill Blog」**，這個就需要 SEO Title 來定義了。

其實這個 SEO Title 就是定義了`&lt;head&gt;&lt;title&gt;標題&lt;/title&gt;&lt;/head&gt;`這個裡面的東西和多說分享的標題，你可以自行修改的。

### 關於收到"Page Build Warning"的 Email

由於jekyll升級到3.0.x,對原來的 pygments 程式碼高亮不再支援，現只支援一種-rouge，所以你需要在 `_config.yml`文件中修改`highlighter: rouge`.另外還需要在`_config.yml`文件中加上`gems: [jekyll-paginate]`.

同時,你需要更新你的本地 jekyll 環境.

使用`jekyll server`的同學需要這樣：

1. `gem update jekyll` # 更新jekyll
2. `gem update github-pages` #更新依賴的包

使用`bundle exec jekyll server`的同學在更新 jekyll 後，需要輸入`bundle update`來更新依賴的包.

&gt; Note：
&gt; 可以使用 `jekyll -s` 命令在本地即時組態部落格，提高效率。詳見 [Jekyll.com](http://jekyllcn.com/)

參考文件：[using jekyll with pages](https://help.github.com/articles/using-jekyll-with-pages/) &amp; [Upgrading from 2.x to 3.x](http://jekyllrb.com/docs/upgrading/2-to-3/)


## 致謝

1. 這個模板是從這裡 [Hux](https://github.com/Huxpro/huxpro.github.io) fork 的, 感謝這個作者。 
2. 感謝 Jekyll、Github Pages 和 Bootstrap!

## License

遵循 MIT 許可證。有關詳細,請參閱 [LICENSE](LICENSE)。
