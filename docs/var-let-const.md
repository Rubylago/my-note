---
sidebar_position: 8
slug: var-let-const
title: "[JS] var, let, const 的 block scope"
---
# [JS] var, let, const 的 block scope

>解到一個setTimeout觀念題，回頭檢視了一下自己對scope的理解  

Q: 下方console.log會輸出什麼?

```js
for(var i = 0; i < 5; i++){
  setTimeout(function(){
    console.log(i);
  },1000);
}
```

A: 55555

為什麼不是 01234 ??

主要問題出在 變數 i 的宣告方式: var

var 是全域變數，在沒有被閉包隔離的情況下是可以向外影響的。  

當setTimeout被放到儲列中排隊時，for迴圈內的 i 值 不停地被var更新，也就是說當for迴圈都跑完了，儲列中排了4個setTimeout的時候，所有的i值都已經被var全域變數改變成最後的i值。

也就是說，排程上雖然有4個console.log(i)，但是每個i都會因為跑了下面的 `for(var i = 0; i < 5; i++)` 被這行的 `i++` 給覆蓋掉  

以至於在執行到最後一個for的時候 `var i = 5; i<5` 此時if條件不成立 ，程式停止，i的值停在 `i = 5`  

於是所有排列中的 `console.log(i)` 的 `i` 值就都變成最後一個 `var i = 5` 的值!  

此時if迴圈執行完畢，`setTimeout` 開始執行 `console.log(i)`，而每一個`i`都是全域變數，因此所有的`i`都是同一個值， `i = 5` ，於是印出 5555  

這個時候只要把var改成let就可以了，因為let有 **block scope{}** 的特性，所以在if判斷式內的 `let i` 的值，每一次都是獨立存在不會被其他 if 判斷式影響，自然就可以印出 01234啦 。

另外一種比較複雜(?)的方式，是把 `setTimeout` 用閉包包起來再用 IIFE 立即調用，也可以印出 01234

```js
for( var i = 0; i < 5; i++ ) {
  (function(i){
    window.setTimeout(function() {
     console.log(i)
   }, 1000)
})(i)}
```

---

### 參考資料 與 延伸閱讀

* [談談 JavaScript 的 setTimeout 與 setInterval](https://kuro.tw/posts/2019/02/23/%E8%AB%87%E8%AB%87-JavaScript-%E7%9A%84-setTimeout-%E8%88%87-setInterval/)
* [重新認識 JavaScript: Day 10 函式 Functions 的基本概念](https://ithelp.ithome.com.tw/articles/10191549)
* [在 JavaScript 中，Var、Let、Const 的差異](https://askie.today/differences-among-var-let-const/)
