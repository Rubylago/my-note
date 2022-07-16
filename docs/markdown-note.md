---
sidebar_position: 20
slug: markdown-note
title: Markdown note
---

# Markdown Note

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


## 換行 & 空行

後面空兩格再換行，顯示出來就會換行了

123  
有換行

456
沒換行


```markdown
123後面接兩個空白鍵  
有換行

456沒有接到兩個空白鍵
沒換行

```

## 引用
在最前面使用 `>` 符號 就可以變成`<blockquote>`

>引用

>引用  
>第二行也使用 `>` 符號
>  
>還可以空行

>引用  
只有第一行使用 `>` 符號  
後面不管幾行  
都不用也沒關係

```markdown 
>引用

>引用  
>第二行也使用 `>` 符號
>
>還可以空行

>引用  
只有第一行使用 `>` 符號  
後面不管幾行  
都不用也沒關係

```

## 警告視窗

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

```markdown

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

## CODE

```html
<!-- view -->
<form action="/profile" method="POST" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
```

```
  ```html
  <!-- view -->
  <form action="/profile" method="POST" enctype="multipart/form-data">
    <input type="file" name="avatar" />
  </form>
  ```


```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}
```

```
```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}
```


```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


```
```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


