---
layout: post
title: "博客的进度"
subtitle: "现在，「Bill Blog」变得怎么样了？"
author: "bill74186"
header-img: "img/post-bg-1.png"
header-mask: 0.2
tags:
  - 重要
  - 博客
---

> 完成了

## 博客进度

回应上期博客内容，我已经把博客的评论系统做好了

并且制作了③套评论系统，可供大家使用：

- `giscus`
- `utterances`
- `gitalk`

这三套在国内是可以稳定运行且 UI 界面都很不错的评论系统

后面我会慢慢细讲

## 修改方面

历经两周的修改融合，我已经修改一下基本内容：

- 完全个人化博客，不再依赖Hux部分源代码
- 充分利用之前引入 fa 图标，使界面跟好看
- 增加`Microsoft Clarity`，根据用户优化界面
- 增加`comments.html`，单文件管理评论
- 增加`sitemap.xml`，让搜索引擎收录博客
- 增加`robots.txt`，开放搜索机器人
- 增加`README.zhTW.md`，繁體中文版仓库介绍
- 删除`ads.html`，减少广告的植入
- 删除`multilingual-sel.html`，去除post语言选择
- 删除`mathjax_support.html`，整合进了`footer.html`
- 修改`_config.yml`，实现所有自定义代码的可开关性
- 修改`README.md`，完全自己的仓库介绍
- 修改代码的注释机制，避免无用的空注释
- 完成三种语言的仓库博客的介绍，确定主语言
- 完成优化代码的过程，减少不必要的类名
- 确定博客未来的发展方向

## 回应之前

### 评论系统

上期博客的最后我说会做出评论系统，我也做出来啦

为了省事，我直接使用了现成的评论方案(~~就是懒~~)

目前来说，这些评论系统基本不会立马倒掉，可放心使用

下面是这个评论系统方案的配置代码：

```yaml
# 评论总开关
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

如果不用直接false就行了，建议不要直接删代码

还有一个专门的`comments.html`插入评论

大家可以自己看一下，**不要用我的ID做**！

### 数学公式

一些特殊的数学符号是无法正常显示的，所以需要使用mathjax库显示

这个库可以完美显示所有数学物理的公式与式子，这里就不做演示了

之前Huxpro的博客也使用mathjax库，但版本有点旧，也有一点Bug

所以我就换成了兼容**IE11**的3.2.2版本(*已经是最后的兼容了*)

最终整合后的代码如下：

```
{% if site.mathjax %}
<!-- add support for mathjax -->
<script>
window.MathJax = {
  tex: {
	inlineMath: [['$', '$']],
	displayMath: [['$$', '$$']],
	processEscapes: true,
	equationNumbers: { autoNumber: "AMS" }
  },
  svg: {
	scale: 0.9,
	fontCache: 'global'
  }
};
</script>
<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.2/es5/tex-svg.min.js">
</script>
{% endif %}
```

**不想用千万不要直接删代码！**

## 后续计划

后续我可能会添加繁體中文版的About页，呼应仓库

全部使用less或CSS做样式文件，增加giscus专门的界面样式

深度修改优化JS代码，脱离Huxpro的代码

~~增加几篇水博客，忽悠浏览用户~~

#### 后记

博客做得很好了，给个Star吧！