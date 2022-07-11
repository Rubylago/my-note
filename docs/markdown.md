# Markdown

## img & link

[Rubylago's note](https://rubylago.github.io/my-note/)

[img 連結](https://d33wubrfki0l68.cloudfront.net/c088b7acfcf11100903c44fe44f2f2d7e0f30531/a52f4/zh-cn/img/docusaurus.svg)

![img 預覽](/img/docusaurus.png "小孔農")

```markdown
[Rubylago's note](url)
[img alt02](/img/docusaurus.png)  /連結
![img alt03](/img/docusaurus.png "滑鼠經過說明文字") /static下的路徑
```

Docusaurus 轉換:

```markdown
[下載此文檔](/files/note.docx)
會被轉換為
<a href={require('static/files/note.docx')}>下載此文檔</a>
```  

<br/>

## 換行 & 空行

後面空兩格再換行，顯示出來就會換行了

123  
有換行

456
沒換行

空行用

`<br/>`<br/>

最實在

```markdown
123後面接兩個空白鍵  
有換行

456沒有接到兩個空白鍵
沒換行

空行用

`<br/>`<br/>

最實在
```
