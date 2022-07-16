---
sidebar_position: 10
title: Docusaurus 搬家心得
---

# Docusaurus 搬家心得

前陣子用medium寫筆記寫到有點厭世，主要還是卡在medium對我來說真的很難用，很多想用的符號花俏的表示她都不給用，插個code也很麻煩~~又醜~~，對於剛起步正在培養寫作習慣來說根本是荼毒。為了保護我好不容易開始慢慢養成的習慣，起了自己架站的想法。  

## 1. 以終為始，先確定想要的樣子

架站選擇琳瑯滿目，之前因為看過gitbook做成的筆記，當時心中就許願希望未來架站可以搭配github試看看，但gitbook的介面樣子沒有特別喜歡，還是想先從平日看的筆記網站裡找順眼的，好看的介面寫起來才快樂嘛!  

到此目前希望的條件是: 可以用github佈署、介面清爽、好入手、免費

既然確定了，就來挑介面吧！心中立刻跳出兩個最喜歡的網站，分別是PJ大神的 [PJCHENder](https://pjchender.dev/) 和陪伴我長大的 [Fooish 程式技術](https://www.fooish.com/javascript/) 。
細細比較後更喜歡PJCHENder的版型一點。

既然決定想往PJCHENder的筆記版型移動，當然先看看人家用什麼架的，很快找到PJ大大搬家的紀錄: [2021 部落格搬家到 docusaurus](https://pjchender.dev/blog/2021/01/03/happy-new-year/)

## 2. 動手找資料

Docusaurus 是FB家的小孩，網路上資料不少，官方網站也有詳細的手把手教學，網站還內建深色和淺色主題(大加分)，重點是小孔農好口愛!! 中了中了就決定是他了!!!  
![img alt](/img/docusaurus.png)  

另外也看了一下其他人用小孔濃的心得，看起來本地部屬非常簡單，也可以搭配github，只是在github佈署上看到近來因為github權限更新，有人遇到推送權限的問題，稍微留個心就好。接下來就開始動手啦~

## 3. 建立我的小孔農

首先是本地端，官網上步驟滿清楚的，建議大家跟著走就好，大概不用半個小時可以完成本地第一篇文章的推送。  
再來是github部屬，官網上也有教學步驟，良心來著。要注意的是github權限，這裡參考官網的 [Deploy](https://docusaurus.io/docs/deployment#deploy) 設置github權限。我自己在設置的時候是用 [token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) 的方式推成功的，這邊如果也是選用 token 的方式最後官方給的部屬步驟內容要改一下，記得帶上 GIT_PASS=token，也可以用.env的方式代換

```shell
GIT_USER=process.env.GIT_USER GIT_PASS=process.env.GIT_PASS yarn deploy
```

## 4. 回顧

這次從研究到成功佈署，時間上斷斷續續也搞了快5個小時，大概就是所謂的新手期吧(哭) 但是看到自己的小孔農正常顯示的時候是真的很開心~之後就慢慢的把 medium 筆記搬過來就好了!
