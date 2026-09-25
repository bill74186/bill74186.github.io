<div align="center">

# 評論系統設定

[English](Set-Comments.md) | [简体中文](Set-Comments-zhCN.md) | **繁體中文**

**`評論`是部落格網站的重要內容**，它可以讓部落格主知道自己文章讀眾對自己文章的看法與回饋。<br>
如果一個部落格網站沒有評論系統就基本上沒什麼意義了<del>（類似老師只教書不讓學生考試）</del><br><br>
下面我會使用程式碼介紹本部落格評論系統的設定，希望你看完後會使用和修改你網站的評論系統

</div>

## 基本介紹

本部落格已基本支援了以下③種不同類型的評論系統：
- [Giscus](#Giscus)
- [Utterances](#Utterances)
- [Gitalk](#Gitalk)

大家可以自由選擇您需要的評論系統，詳細程式碼可以查看`_config.yml`的內容

## 程式碼介紹

在查看下面程式碼時，你要知道：
- "[]"裡的為建議值，需要根據實際情況修改
- 以下程式碼基本在 `_config.yml` 裡，設定請去檔案裡面修改
- 以下程式碼與 `_include/comments.html` 相關聯
- 如果覺得麻煩可以直接覆蓋 `_include/comments.html` 內容

### 總開關

如果你覺得做部落格不需要別人評論，你可以把下面的值改為`false`：
```yaml
comments: [true/false]    # 開啟或關閉評論
```

### Giscus

**官網**：https://giscus.app/<br>
**簡介**：無廣告的靜態網站評論系統，靈感來自 utterances。基於 GitHub Discussions儲存評論，不需要自建資料庫。訪客透過 GitHub OAuth 授權留言；首次評論時機器人自動建立 Discussion。支援多主題、多語言、高度可設定，支援自託管。<br>
**使用方式**：參見下面程式碼
```yaml
giscus:
  enable: [true/false]    # 是否啟用 Giscus 評論
  repo: "username/reponame"    # GitHub倉庫，格式：使用者名/倉庫名（儲存Discussions）
  repo_id: "[Repository ID]"    # 倉庫ID，在官網設定頁取得
  category: "[Category Name]"    # Discussions分類名稱，評論存放的分類
  category_id: "[Category ID]"    # 分類ID，在官網設定頁取得
  mapping: "[pathname/url/title]"    # 文章與Discussion對應規則：pathname頁面路徑 / url完整連結 / title頁面標題
  strict: [0/1]    # 是否嚴格匹配對應值：1開啟，0關閉
  reactions_enabled: [0/1]    # 是否開啟評論表情點贊反應：1開啟，0關閉
  emit_metadata: [0/1]    # 是否注入評論元資料：1開啟，0關閉
  input_position: "[top/bottom]"    # 評論輸入框位置：top在評論列表上方，bottom在下方
  theme: "[light/dark/custom]"    # 主題：light淺色 / dark深色 / custom自訂主題
  lang: "[zh-CN/en-US/other]"    # 介面語言：zh-CN簡體中文、en-US英文等
  loading: "[lazy/eager]"    # 載入模式：lazy捲動到區域才載入，eager頁面直接載入
```

### Utterances

**官網**：https://utteranc.es/<br>
**簡介**：輕量的評論系統，基於 GitHub Issues儲存評論。同樣無廣告、免費，只需要在倉庫安裝 utterances GitHub App，在`_include/comments.html`嵌入一段腳本即可。每篇文章對應到倉庫的一個 Issue，評論就是 Issue 評論。<br>
**缺點**：不支援巢狀回覆，必須登入 GitHub 才能評論。<br>
**使用方式**：參見下面程式碼
```yaml
utterances:
  enable: [true/false]    # 是否啟用 Utterances 評論
  repo: "username/reponame"    # GitHub倉庫，格式：使用者名/倉庫名（儲存Issues）
  issue_term: "pathname"    # 文章與Issue對應規則：pathname頁面路徑 / url完整連結 / title頁面標題
  label: "[Comment/other]"    # 自動建立Issue時附加的標籤
  theme: "[github-light/other]"    # 主題樣式：github-light淺色等
```

### Gitalk

**官網**：https://gitalk.github.io/<br>
**簡介**：基於 GitHub Issues + Preact 開發的前端評論外掛。需要自己去 GitHub 註冊 OAuth App，拿到 Client ID / Client Secret 填入設定。評論儲存在指定倉庫的 Issue 中，支援快速鍵提交、多語言。<br>
**缺點**：專案更新停滯，需要手動初始化每篇文章對應的 Issue，設定流程比 utterances/giscus 繁瑣。**中國境內無法使用！**<br>
**使用方式**：參見下面程式碼
```yaml
gitalk:
  enable: [true/false]    # 是否啟用 Gitalk 評論
  clientID: "[Client ID]"    # GitHub OAuth App 的 Client ID
  clientSecret: "[Client Secret]"    # GitHub OAuth App 的 Client Secret
  repo: "username/reponame"    # 儲存評論的GitHub倉庫名
  owner: "[Owner Name]"    # 倉庫所有者使用者名
  admin: "[Admin Account]"    # 管理員帳號，擁有初始化Issue權限
  distractionFreeMode: [true/false]    # 是否開啟無干擾模式，true開啟，false關閉
```

> [!warning]
> 本人以及本倉庫與上面所述的評論系統**沒有任何直接關係**，**僅是使用他們的產品**<br>
> 如果是評論無法使用，請查看評論系統製作方的文件，我不能也不會解答相關問題<br>
> **不要拿我的設定內容使用！**<br>
> 目前本部落格的評論系統設定就是這樣，後續新增內容可能會擇期更新<br><br>
> **如發現問題可 Issues 報告漏洞**
