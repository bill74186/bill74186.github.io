
<div align="center">

# Bill Blog
「A code connection, goodbye with source!"」

![Blog Photo](/img/blog-title.png)

<p>
  <img src="https://img.shields.io/badge/HTML5-5-E34F26?style=flat-square&logo=html5&" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-3-1572B6?style=flat-square&logo=css3&" alt="CSS3">
  <img src="https://img.shields.io/badge/Less-4.2.0-1D365D?style=flat-square&logo=less&" alt="Less">
  <img src="https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=flat-square&logo=javascript&" alt="JavaScript">
  <img src="https://img.shields.io/badge/Ruby-3.4-CC342D?style=flat-square&logo=ruby&" alt="Ruby">
</p>

**English** | [简体中文](_doc/README.zhCN.md) | [繁體中文](_doc/README.zhTW.md)

<p>
  <a href="https://github.com/bill74186/bill74186.github.io/stargazers"><img src="https://img.shields.io/github/stars/bill74186/bill74186.github.io?style=for-the-badge&amp;logo=github&amp;color=f4c542" alt="Stars"></a>
  <a href="https://github.com/bill74186/bill74186.github.io/network/members"><img src="https://img.shields.io/github/forks/bill74186/bill74186.github.io?style=for-the-badge&amp;logo=github&amp;color=6cc644" alt="Forks"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License"></a>
</p>

Blog setup tutorial modified from [Hux](https://github.com/Huxpro/huxpro.github.io)

Blog template also modified from [Hux Blog](https://github.com/huxpro.github.io)

Feel free to check out the original tutorial

</div>

>
### [Check out the blog here 👆](http://bill74186.github.io)


## Usage

* Getting Started
	* [Environment](#environment)
	* [Setup](#setup)
	* [Writing Posts](#writing-posts)
* Components
	* [Sidebar](#sidebar)
	* [Mini About Me](#mini-about-me)
	* [Featured Tags](#featured-tags)
	* [SNS Settings](#sns-settings)
	* [Friend Links](#friend-links)
	* [Keynote Layout](#keynote-layout)
* Comments &amp; Analytics
	* [Comments](#comment-system)
	* [Analytics](#statistical-analysis) 
* Advanced
	* [Customization](#customization)
	* [Header Background](#header-background)
	* [Search Title - Header](#header-modification)

## Getting Started

### Environment

If you have [jekyll](http://jekyllcn.com/) installed, you just need to type `jekyll serve` or `jekyll s` in the command line and you can preview the theme in your local browser at `http://127.0.0.1:4000/`. Changes to the theme will be displayed in real time (you may need to hard refresh your browser).


### Setup

You can easily start building your own blog by modifying the `_config.yml` file:

```
# Site Settings
title: Bill Blog    # Your blog title
SEOTitle: bill74186's Blog | Bill Blog    # SEO title
description: "Hey"    # Say something, describe it a bit

# SNS Settings
zhihu_username: bill74186    # Your Zhihu username
github_username: bill74186    # Your GitHub username

# Config Settings
# paginate: 10    # How many posts per page
```

There are many more parameters you can adjust on the official Jekyll website, such as setting the permalink format... The website is here: [Jekyll - Official Site](http://jekyllrb.com/)

### Writing Posts

Posts to be published are generally placed in `_posts/` in **Markdown** format. You'll understand how to set it up immediately by looking at the template posts.

The yaml front matter looks like this:

```

---
layout:     post
title:      "Hello 「Bill Blog」"
subtitle:   " \"Hello World, Hello Blog\""
date:       2026-06-04 
author:     "bill74186"
header-img: "img/offline-bg.jpg"
catalog: true
tags:
    - Blog
---
```

## Components

### Sidebar

Look on the right:
![Sidebar Image sidebar.png](_doc/sidebar.png)

The settings are in the `Sidebar Settings` section of the `_config.yml` file.

```
# Sidebar Settings
sidebar: true  # Add sidebar
sidebar-about-description: "Briefly describe yourself"
sidebar-avatar: /img/bill74186.jpg     # Your avatar, please use absolute path. Note: Case sensitive! File extension too
```

The sidebar is responsive. When the screen size is less than 992px, the sidebar will move to the bottom. Please see the bootstrap grid system &lt;http://v3.bootcss.com/css/&gt;


### Mini About Me

The Mini-About-Me module will display all your social accounts below your avatar. This is also responsive. When the screen gets smaller, it will move to the bottom of the page, with just a few small changes. Please see the code for details.

### Featured Tags

I saw the featured tags on [Medium](http://medium.com) and they were really cool, so I added them in.
This module is now independent and can appear on all pages, including the homepage and the top of every published article.

```
# Featured Tags
featured-tags: true  
featured-condition-size: 1
```

The only thing to note is `featured-condition-size`: If the SIZE of a tag, meaning the number of posts using that tag, is greater than the condition value set above, this tag will be featured on the homepage.
 
There's a conditional template inside `{% if tag[1].size &gt; {{site.featured-condition-size}} %}` that's used for filtering.

### SNS Settings

Enter your social accounts below. Those not added will not be displayed in the sidebar.

```
	# SNS Settings
	RSS: false
    weibo_username: bill74186
    jianshu_username: bill74186
    zhihu_username: bill74186
    github_username: bill74186
    twitter_username: bill74186
    facebook_username: bill74186
    linkedin_username: firstname-lastname-idxxxx
```

![SNS Settings SNS-Setting.png](_doc/SNS-Setting.png)

### Friend Links

Friend links section. This will be displayed on all pages.

The settings are in the `Friends` section of the `_config.yml` file. Add them yourself.

```
# Friend Links
friends: [
    { title: "Github", href: "https://github.com/"},
    { title: "2048", href: "https://bill74186.github.io/2048-Game/"}
]
```


### Keynote Layout

![keynote.png](_doc/keynote.png)

This part is for HTML format slides, generally using Reveal.js, Impress.js, Slides, Prezi, etc. I think a modern blog can't be without the ability to display HTML slides~

The main principle is to add an `iframe` and include an external link. You can write it directly in the front matter. Please see the yaml front matter writing method below for details.

```

---
layout:     keynote
iframe:     "http://huangxuan.me/js-module-7day/"
---
```

The iframe will automatically adjust its size on different devices. Padding is kept so that mobile users can scroll down and add more content.


### Comment System

This blog fully supports the following three different comment systems:
- `giscus`
- `utterances`
- `gitalk`

You can freely choose the comment system you need. For detailed configuration code, please refer to the `_config.yml` file:

```yaml
# Global Comment Switch
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
> The values shown here are recommended defaults. Please modify them according to your actual situation.

### Statistical Analysis

Website analytics now supports Baidu Analytics and Google Analytics. You need to register on the official website and then paste the returned code below:

```
# Baidu Analytics
ba_track_id: [your-baId-id]

# Google Analytics
ga_track_id: 'UA-xxxxxx-xx'            # You'll get an ID like this when you register with Google
ga_domain: auto			# Default is auto, here I customized the domain, if you don't have your own domain, you need to change it to auto.
```

### Customization

If you like to tinker, you can customize this template's Code.

**If you can understand the code in the `_include/` and `_layouts/` folders (this is where the entire interface layout is), you can directly modify/add code using the template engine [Liquid](https://github.com/Shopify/liquid/wiki) syntax used by Jekyll for more creative custom interfaces!**

### Header Background

The header background for each page of the blog can be chosen by yourself. Look at a few example posts and you'll know how to set it up.
  
The choice of header background is entirely up to your personal aesthetic. Each article can have a different background, you can put whatever you want, just make sure the width is sufficient and the size isn't too big, otherwise it will load slowly.

&gt; It's best to compress the uploaded images first. Here I recommend imageOptim image compression software to make your blog take off.

But note that the title of this template is **white**, so the background color should be set to **gray** or **black**, in short, a dark color scheme. Of course, you can also customize the font color. In short, using github pages means you can completely customize your own blog.

### Header Modification

My blog title is **"Bill Blog"** but I want it to display **"bill74186的博客 | Bill Blog"** when searched. This requires the SEO Title to be defined.

Actually, this SEO Title defines what's inside `&lt;head&gt;&lt;title&gt;Title&lt;/title&gt;&lt;/head&gt;` and the share title. You can modify it yourself.

### About Receiving "Page Build Warning" Emails

Due to jekyll upgrading to 3.0.x, the original pygments code highlighting is no longer supported. Now only one is supported - rouge, so you need to modify `highlighter: rouge` in the `_config.yml` file. You also need to add `gems: [jekyll-paginate]` to the `_config.yml` file.

Also, you need to update your local jekyll environment.

Students using `jekyll server` need to do this:

1. `gem update jekyll` # Update jekyll
2. `gem update github-pages` # Update dependency packages

Students using `bundle exec jekyll server` need to enter `bundle update` to update dependency packages after updating jekyll.

&gt; Note:
&gt; You can use the `jekyll -s` command to configure the blog locally in real time, improving efficiency. See [Jekyll.com](http://jekyllcn.com/) for details.

Reference documents: [using jekyll with pages](https://help.github.com/articles/using-jekyll-with-pages/) &amp; [Upgrading from 2.x to 3.x](http://jekyllrb.com/docs/upgrading/2-to-3/)


## Acknowledgments

1. This template was forked from [Hux](https://github.com/Huxpro/huxpro.github.io), thanks to this author. 
2. Thanks to Jekyll, Github Pages, and Bootstrap!

## License

Follow the MIT license. For details, please refer to [LICENSE](LICENSE).
