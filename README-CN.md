<div align="center">

# 2048 小游戏
一款丝滑滑动的2048小游戏，支持30多种语言

<p>
  <a href="https://github.com/bill74186/bill74186.github.io/stargazers"><img src="https://img.shields.io/github/stars/bill74186/bill74186.github.io?style=for-the-badge&logo=github&color=f4c542" alt="Stars"></a>
  <a href="https://github.com/bill74186/bill74186.github.io/network/members"><img src="https://img.shields.io/github/forks/bill74186/bill74186.github.io?style=for-the-badge&logo=github&color=6cc644" alt="Forks"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License"></a>
</p>

---

[English](README.md) | **简体中文** | [更新日志](description.md)

<p>
  <img src="https://img.shields.io/badge/HTML-5-E34F26?style=flat-square&logo=html5&" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS-3-1572B6?style=flat-square&logo=css" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=flat-square&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/jQuery-3.7.1-0769AD?style=flat-square&logo=jquery" alt="jQuery">
  <img src="https://img.shields.io/badge/Android-7.0+-3DDC84?style=flat-square&logo=android" alt="Android 7.0+">
</p>

</div>

## 🎮 线上游玩

如果你不想下载来玩，请点 👉 
[这里 *(`https://bill74186.github.io`)*](https://bill74186.github.io/)
喜欢的话就点点Star吧，求求了！
 
## ✨ 项目信息
 
- **中文名称**: 2048小游戏
- **英文名称**: 2048 Game
- **创立时间**: 2026/04/15
- **上传时间**: 2026/05/01
- **现版本号**: v2.5.6(157)
- **开发人员**: bill74186
 
## 📌 项目介绍
 
- **项目风格**：软像素极简风格
- **适配设备**：电脑端 + 移动端完美双端适配
- **核心特点**：原生丝滑操作手感、无防抖无锁帧、多语言国际化、独立最高分储存、隐藏彩蛋自定义设置系统
- **特色亮点**：彩蛋设置页伪装为加泰罗尼亚语语言文件，隐蔽性极高，入口藏于页脚作者名称
 
## 📸 游戏截图
 
<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1175750/8614312/280e5dc2-26f1-11e5-9f1f-5891c3ca8b26.png" alt="Screenshot"/>
</p>
 
这张截图不是我的，是原版gabrielecirulli拍的

## 👤 作者信息
 
- **真名**: 保密 😜
- **网名**: bill74186
- **年龄**: 刚满十八岁~
- **性格**: 非常懒，能不动就不动
- **爱好**: 玩游戏，学习编程
 
## 💬 作者的话

> [!warning]
字体文件不是我自己的，如果侵权就删除
> 
所有内容都由 *bill74186* 制作，所有人都可复制修改转发
 
可不可以给点 *money* 或者 *stars*？孩子没饭吃了🙃🙃🙃
 
文件做得有些冗余，能跑就行了
 
项目主页是 `index.html` ，务必以本地服务器运行

> [!important]
请以**本地服务器**运行，不要以本地文件 `file://` 运行！

## 📁 项目架构

```
2048-Game/
├── font.ttf          # 专用软像素字体文件
├── style.css         # 全局公共样式
├── script.js         # 全局唯一JS文件（加载逻辑+游戏核心+公共工具）
├── jquery-3.7.1.min.js  # 本地离线jQuery官方最新稳定版
├── jquery.qrcode-1.0.3.min.js  # 本地离线jQuery二维码生成插件
├── index.html        # 首页=多语言选择页
├── zh-CN.html        # 简体中文游戏页
├── zh-TW.html        # 繁体中文游戏页
├── en-US.html        # 美式英语游戏页
├── ja-JP.html        # 日语游戏页
├── ko-KR.html        # 韩语游戏页
├── es-ES.html        # 西班牙语游戏页
├── fr-FR.html        # 法语游戏页
├── de-DE.html        # 德语游戏页
├── it-IT.html        # 意大利语游戏页
├── pt-BR.html        # 巴西葡萄牙语游戏页
├── ru-RU.html        # 俄语游戏页
├── is-IS.html        # 冰岛语游戏页
├── hi-IN.html        # 印地语游戏页
├── th-TH.html        # 泰语游戏页
├── vi-VN.html        # 越南语游戏页
├── id-ID.html        # 印尼语游戏页
├── ms-MY.html        # 马来语游戏页
├── tr-TR.html        # 土耳其语游戏页
├── pl-PL.html        # 波兰语游戏页
├── nl-NL.html        # 荷兰语游戏页
├── sv-SE.html        # 瑞典语游戏页
├── da-DK.html        # 丹麦语游戏页
├── no-NO.html        # 挪威语游戏页
├── fi-FI.html        # 芬兰语游戏页
├── cs-CZ.html        # 捷克语游戏页
├── hu-HU.html        # 匈牙利语游戏页
├── ro-RO.html        # 罗马尼亚语游戏页
├── uk-UA.html        # 乌克兰语游戏页
├── el-GR.html        # 希腊语游戏页
├── cy-GB.html        # 威尔士语游戏页
└── ca-ES.html        # 隐藏彩蛋设置页（伪装加泰罗尼亚语）
```
 
> [!tip]
所有文件平铺在根目录上，方便查看和修改
 
## 🧾 页脚信息
 
Made By Bill74186👍
 
这个就是写着看的🥲
 
写README也是🤪
 
尽情享受快乐吧！👽
 
> [!note]
该项目在MIT许可证下开源，您可以自由使用、修改和分发该项目的所有代码📖
