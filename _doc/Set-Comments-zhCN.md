<div align="center">

# 评论系统配置

[English](Set-Comments.md) | **简体中文** | [繁体中文](Set-Comments-zhTW.md)

**`评论`是博客网站的重要内容**，它可以让博客主知道自己文章读众对自己文章的看法与反馈。<br>
如果一个博客网站没有评论系统就基本上没有什么意义了<del>（类似老师只教书不让学生考试）</del><br><br>
下面我会使用代码介绍本博客评论系统的配置，希望你看完后会使用和修改你网站的评论系统

</div>

## 基本介绍

本博客已基本支持了以下③种不同类型的评论系统：
- [Giscus](#Giscus)
- [Utterances](#Utterances)
- [Gitalk](#Gitalk)

大家可以自由选择您需要的评论系统，详细代码可以查看`_config.yml`的内容

## 代码介绍

在查看下面代码时，你要知道：
- "[]"里的为建议值，需要根据实际情况修改
- 以下代码基本在 `_config.yml` 里，设置请去文件里面修改
- 以下代码与 `_include/comments.html` 相关联
- 如果觉得麻烦可以直接覆盖 `_include/comments.html` 内容

### 总开关

如果你觉得做博客不需要别人评论，你可以把下面的值改为`false`：
```yaml
comments: [true/false]    # 开启或关闭评论
```

### Giscus

**官网**：https://giscus.app/<br>
**简介**：无广告的静态网站评论系统，灵感来自 utterances。基于 GitHub Discussions存储评论，不需要自建数据库。访客通过 GitHub OAuth 授权留言；首次评论时机器人自动创建 Discussion。支持多主题、多语言、高度可配置，支持自托管。<br>
**使用方式**：参见下面代码
```yaml
giscus:
  enable: [true/false]    # 是否启用 Giscus 评论
  repo: "username/reponame"    # GitHub仓库，格式：用户名/仓库名（存储Discussions）
  repo_id: "[Repository ID]"    # 仓库ID，在官网配置页获取
  category: "[Category Name]"    # Discussions分类名称，评论存放的分类
  category_id: "[Category ID]"    # 分类ID，在官网配置页获取
  mapping: "[pathname/url/title]"    # 文章与Discussion映射规则：pathname页面路径 / url完整链接 / title页面标题
  strict: [0/1]    # 是否严格匹配映射值：1开启，0关闭
  reactions_enabled: [0/1]    # 是否开启评论表情点赞反应：1开启，0关闭
  emit_metadata: [0/1]    # 是否注入评论元数据：1开启，0关闭
  input_position: "[top/bottom]"    # 评论输入框位置：top在评论列表上方，bottom在下方
  theme: "[light/dark/custom]"    # 主题：light浅色 / dark深色 / custom自定义主题
  lang: "[zh-CN/en-US/other]"    # 界面语言：zh-CN简体中文、en-US英文等
  loading: "[lazy/eager]"    # 加载模式：lazy滚动到区域才加载，eager页面直接加载
```

### Utterances

**官网**：https://utteranc.es/<br>
**简介**：轻量的评论系统，基于 GitHub Issues存储评论。同样无广告、免费，只需要在仓库安装 utterances GitHub App，在`_include/comments.html`嵌入一段脚本即可。每篇文章映射到仓库的一个 Issue，评论就是 Issue 评论。<br>
**缺点**：不支持嵌套回复，必须登录 GitHub 才能评论。<br>
**使用方式**：参见下面代码
```yaml
utterances:
  enable: [true/false]    # 是否启用 Utterances 评论
  repo: "username/reponame"    # GitHub仓库，格式：用户名/仓库名（存储Issues）
  issue_term: "pathname"    # 文章与Issue映射规则：pathname页面路径 / url完整链接 / title页面标题
  label: "[Comment/other]"    # 自动创建Issue时附加的标签
  theme: "[github-light/other]"    # 主题样式：github-light浅色等
```

### Gitalk

**官网**：https://gitalk.github.io/<br>
**简介**：基于 GitHub Issues + Preact 开发的前端评论插件。需要自己去 GitHub 注册 OAuth App，拿到 Client ID / Client Secret 填入配置。评论保存在指定仓库的 Issue 中，支持快捷键提交、多语言。<br>
**缺点**：项目更新停滞，需要手动初始化每篇文章对应的 Issue，配置流程比 utterances/giscus 繁琐。**中国境内无法使用！**<br>
**使用方式**：参见下面代码
```yaml
gitalk:
  enable: [true/false]    # 是否启用 Gitalk 评论
  clientID: "[Client ID]"    # GitHub OAuth App 的 Client ID
  clientSecret: "[Client Secret]"    # GitHub OAuth App 的 Client Secret
  repo: "username/reponame"    # 存储评论的GitHub仓库名
  owner: "[Owner Name]"    # 仓库所有者用户名
  admin: "[Admin Account]"    # 管理员账号，拥有初始化Issue权限
  distractionFreeMode: [true/false]    # 是否开启无干扰模式，true开启，false关闭
```

> [!warning]
> 本人以及本仓库与上面所述的评论系统**没有任何直接关系**，**仅是使用他们的产品**<br>
> 如果是评论无法使用，请查看评论系统制作方的文档，我不能也不会解答相关问题<br>
> **不要拿我的配置内容使用！**<br>
> 目前本博客的评论系统配置就是这样，后续添加新内容可能会择期更新<br><br>
> **如发现问题可 Issues 报告漏洞**
