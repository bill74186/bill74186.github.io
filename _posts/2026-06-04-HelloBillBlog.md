---
layout:     post
title:      "你好 「Bill博客」"
subtitle:   " \"Hello World, Hello Blog\""
date:       2026-06-04 
author:     "bill74186"
header-img: "img/offline-bg.png"
catalog: true
tags:
    - 博客
---

> “Yeah It's on. ”


### bill74186 的 Blog 就这么开通了。

[跳过废话，直接看技术实现 ](#build) 

---

今天我终于有地方分享我的生活了

之前我的个人主页一直是我的`2048-Game`项目的网页，看起来没有排面

之前一直没有时间搞个人主页（*主要还是懒～*） 六一的时候觉得没有博客有点丢脸

所以一不做二不休花了**三天**时间部署我的Blog，现在基本搞好了

![blog-title.png](https://bill74186.github.io/img/blog-title.png)

<p id = "build"></p>

# 正文

接下来说说搭建这个博客的技术细节。  

## 好处

正好之前就有关注过 [GitHub Pages](https://pages.github.com/) + [Jekyll](http://jekyllrb.com/) 快速 Building Blog 的技术方案，非常轻松时尚。

其优点非常明显：

* **Markdown** 带来的优雅写作体验
* 非常熟悉的 Git workflow ，**Git Commit 即 Blog Post**
* 利用 GitHub Pages 的域名和免费无限空间，不用自己折腾主机
	* 如果需要自定义域名，也只需要简单改改 DNS 加个 CNAME 就好了 
* Jekyll 的自定制非常容易，基本就是个模版引擎

## 坏处

本来觉得最大的缺点可能是 GitHub 在国内访问起来太慢，所以第二天一起床就专门找了个VPN加速器加速连接

结果发现使用 **termux** `git`上传仓库巨快，所以就把VPN删了

---

## 过程
配置的过程中也没遇到什么坑，基本就是 Git 的流程，相当顺手

大的 Jekyll 主题上直接 fork 了 Hux Blog（*这个主题也相当有名，就不多赘述了。唯一的缺点大概就是评论系统被墙了，于是我忍痛割爱删掉了。*）

本地调试环境需要 `gem install jekyll`，结果 rubygem 的源居然被墙了……后来手动改成了我大淘宝的镜像源才成功

修改文件名时，还算正常。到了修改archive时，当时我想改成`tags`这个名，结果一直报错，所以就不改了

最后就进入了耗时反而最长的**做图、写字**阶段，也算是进入了**写博客**的正轨，因为是类似 Hack Day 的方式去搭这个站的，所以折腾折腾着大半夜就过去了。

第二天考虑修改压缩代码，把没有压缩的文件全部压缩或删除了。顺便优化了nav的fa标签

# 后记

回顾这个博客的诞生，纯粹是出于个人兴趣。在博客相关问题上回答并获得一定的 star 后，我决定把这个博客主题当作一个小小的开源项目来维护。

我也非常感谢我的朋友（*TA不愿意透露姓名*），帮我修改一些代码

如果你恰好逛到了这里，希望你也能喜欢这个博客主题。

—— bill74186 后记于 2026.06
