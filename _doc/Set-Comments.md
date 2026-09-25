<div align="center">

# Comment System Configuration

**English** | [简体中文](Set-Comments-zhCN.md) | [繁体中文](Set-Comments-zhTW.md)

**`Comments` are an important part of a blog website**, allowing the blog owner to understand readers' opinions and feedback on their articles.<br>
A blog website without a comment system is basically meaningless<del>(like a teacher who only teaches but never lets students take exams)</del><br><br>
Below I will introduce the configuration of this blog's comment system using code. I hope that after reading it, you will be able to use and modify your website's comment system.

</div>

## Introduction

This blog supports the following ③ different types of comment systems:
- [Giscus](#Giscus)
- [Utterances](#Utterances)
- [Gitalk](#Gitalk)

You can freely choose the comment system you need. For detailed code, please refer to the contents of `_config.yml`.

## Code Introduction

When reviewing the code below, please note:
- Values inside "[]" are suggested values and need to be modified according to your actual situation
- The following code is basically in `_config.yml`; please modify the settings in that file
- The following code is associated with `_include/comments.html`
- If you find it troublesome, you can directly overwrite the contents of `_include/comments.html`

### Master Switch

If you feel that your blog does not need comments from others, you can change the value below to `false`:
```yaml
comments: [true/false]    # Enable or disable comments
```

### Giscus

**Official website**: https://giscus.app/<br>
**Introduction**: An ad-free comment system for static websites, inspired by utterances. It stores comments based on GitHub Discussions and does not require a self-hosted database. Visitors leave comments via GitHub OAuth authorization; a bot automatically creates a Discussion on the first comment. Supports multiple themes, multiple languages, is highly configurable, and supports self-hosting.<br>
**Usage**: See the code below
```yaml
giscus:
  enable: [true/false]    # Whether to enable Giscus comments
  repo: "username/reponame"    # GitHub repository, format: username/repo name (stores Discussions)
  repo_id: "[Repository ID]"    # Repository ID, obtained from the official website configuration page
  category: "[Category Name]"    # Discussions category name, the category where comments are stored
  category_id: "[Category ID]"    # Category ID, obtained from the official website configuration page
  mapping: "[pathname/url/title]"    # Article-to-Discussion mapping rule: pathname page path / url full link / title page title
  strict: [0/1]    # Whether to strictly match the mapping value: 1 enable, 0 disable
  reactions_enabled: [0/1]    # Whether to enable comment emoji reactions: 1 enable, 0 disable
  emit_metadata: [0/1]    # Whether to inject comment metadata: 1 enable, 0 disable
  input_position: "[top/bottom]"    # Comment input box position: top above the comment list, bottom below
  theme: "[light/dark/custom]"    # Theme: light / dark / custom theme
  lang: "[zh-CN/en-US/other]"    # Interface language: zh-CN Simplified Chinese, en-US English, etc.
  loading: "[lazy/eager]"    # Loading mode: lazy loads when scrolled to the area, eager loads immediately on page load
```

### Utterances

**Official website**: https://utteranc.es/<br>
**Introduction**: A lightweight comment system that stores comments based on GitHub Issues. It is also ad-free and free. You only need to install the utterances GitHub App on your repository and embed a script in `_include/comments.html`. Each article maps to an Issue in the repository, and comments are Issue comments.<br>
**Disadvantages**: Does not support nested replies; you must log in to GitHub to comment.<br>
**Usage**: See the code below
```yaml
utterances:
  enable: [true/false]    # Whether to enable Utterances comments
  repo: "username/reponame"    # GitHub repository, format: username/repo name (stores Issues)
  issue_term: "pathname"    # Article-to-Issue mapping rule: pathname page path / url full link / title page title
  label: "[Comment/other]"    # Label attached when automatically creating an Issue
  theme: "[github-light/other]"    # Theme style: github-light, etc.
```

### Gitalk

**Official website**: https://gitalk.github.io/<br>
**Introduction**: A frontend comment plugin developed based on GitHub Issues + Preact. You need to register an OAuth App on GitHub yourself and fill in the Client ID / Client Secret in the configuration. Comments are stored in Issues of the specified repository, supporting shortcut key submission and multiple languages.<br>
**Disadvantages**: Project development has stalled; you need to manually initialize the Issue corresponding to each article; the configuration process is more cumbersome than utterances/giscus. **Cannot be used within China!**<br>
**Usage**: See the code below
```yaml
gitalk:
  enable: [true/false]    # Whether to enable Gitalk comments
  clientID: "[Client ID]"    # Client ID of the GitHub OAuth App
  clientSecret: "[Client Secret]"    # Client Secret of the GitHub OAuth App
  repo: "username/reponame"    # GitHub repository name that stores comments
  owner: "[Owner Name]"    # Repository owner's username
  admin: "[Admin Account]"    # Administrator account with permission to initialize Issues
  distractionFreeMode: [true/false]    # Whether to enable distraction-free mode: true enable, false disable
```

> [!warning]
> I and this repository have **no direct relationship** with the comment systems mentioned above, **we only use their products**<br>
> If comments cannot be used, please refer to the documentation of the comment system provider. I cannot and will not answer related questions<br>
> **Do not use my configuration content!**<br>
> The current comment system configuration of this blog is as above. New content may be added and updated from time to time in the future.<br><br>
> **If you find any issues, please report bugs via Issues.**
