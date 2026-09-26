---
layout: post
title: "「模式」的改变"
subtitle: "世界将一片漆黑"
author: "bill74186"
header-img: "img/in-post/post-bg-black.png"
header-mask: 0.2
tags:
  - 技术
  - 博客
---

> 「暗黑」模式到了

## 更新介绍

### 1. 暗黑模式

这次我添加了一个对晚上喜欢看文章非常友好的功能——暗黑模式！

![暗黑模式展示图片](https://raw.githubusercontent.com/bill74186/bill74186.github.io/main/_doc/theme-dark.png)

如果现在想使用只需在导航栏按下 “DARK” 就行了。

![明白模式下的开关](https://bill74186.github.io/img/in-post/theme-light.png)
![暗黑模式下的开关](https://bill74186.github.io/img/in-post/theme-dark.png)

如果你是制作者只需在 `_config.yml` 里设置 `theme-dark` 的值为 `true` 就可以开启了。

```yaml
theme-dark: true
```

### 2. 同步修改

为了适应暗黑模式，我同步修改了 CSS 文件，不再使用硬编码颜色，而是使用变量。这样也利用后续更改与自定义化。

此外，我还同步修改了 `comments.html` ，使评论系统也能同步网页的暗黑模式。（这个做了比较久）

现在，你需要分别为明暗模式设置两个主题：

```yaml
giscus:
  theme: "light"
  theme-dark: "dark"
```

### 其他更改

这里直接列表

- 在每个文件前添加注释
- 修改 `_config.yml`
- 修复几个漏洞
- 更改一些文字

> 这次就主要添加暗黑模式，其他没有大变化。<br>
> 其实 Hux Blog 这个模版是很难添加暗黑模式的，但我做出来了。<br>
> 所以给我一个 Star 吧！<br>

## 附，搞笑图

高考失利了可以试试下面办法：

![高考失利补救方法](https://bill74186.github.io/img/in-post/gkslbjff.png)