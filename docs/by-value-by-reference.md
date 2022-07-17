---
sidebar_position: 9
slug: by-value-by-reference
title: 按值還是按址? by value & by reference
---

# 按值還是按址? by value & by reference

>Javascript 基本觀念釐清

建立變數的時候會有兩種不同的記憶體建立方式，先講結論：

1. 建立的是基本型別primitive type(String, Number, Boolean, null, undefined)：按值by value

2. 建立的是物件型別(Object,Function,Array)：按址by reference

## 按值 by value

建立一個全新的記憶體位置。如果用不同變數互相指定，彼此也是獨立存在，互不影響的。

```js
let a = 1
let b = a
b = 2
console.log(a) // 1
console.log(b) // 2
// b 跟 a 互相沒有影響，改變b的內容不會連動到a
```

原因：按值建立記憶體的時候，每個記憶體是分開建立的，打比方就像是建房子，每個變數都有一棟自己的房子，怎麼改都跟別人的房子沒關係

## 按址 by reference

第一次建立時是一個全新記憶體位置，後續指定只會指到同一處，不再新建。如果用不同變數互相指定，彼此會連動(*特殊情況除外)

```js
let A = [1,2,3]
let B = A
B.push(5)
console.log(A) // [1,2,3,5]
console.log(B) // [1,2,3,5]
```

原因：建立Object類型的記憶體的時候，如果是第一次宣告，一樣是建立一個新的記憶體，但如果把其他變數指定過來，就不會再新增，只會指定到同一個位置。打比方就是A變數買了Object類型的房子，B變數也想買一樣的房子時，記憶體就很壞的逼B跟A住一起啦! 因此只要B改動內容，A的內容也會跟著改，畢竟住一起(幫A掬一把淚)

## 特殊情況

### 1. object literal

在前面按址 by reference建立變數的時候，如果使用object literal的方式賦值，就可以跳脫記憶體指定相同位置的窘境，重新拿到新房子!

```js
let A = [1,2,3]
let B = A
B = [1,2,3,5]
console.log(A) // [1,2,3]
console.log(B) // [1,2,3,5]
```

我的理解是這就重新賦值，重新賦值就是全新的內容，記憶體不會回頭去找B之前跟誰住，反正B要一棟新房子，那當然要另外蓋一棟給B啊!!!


### 2. function有自己的玩法

如果想用function來重新賦值的化，是無法改動外部變數的，這裡要回歸function使用的注意事項，其實是一樣的!

```js
let A = [1,2,3]
function changeValue(obj) {
  obj = [0]
  console.log(obj) // [0]
}
changeValue(A)  
console.log(A) // [1,2,3]
```

*目前讀到還有一說 Javascript 沒有在 by value 啊 by reference 的，他其實是 by sharing?! 這個部份好像也還沒個定論，且讓我們繼續看下去~~放置play~~*


---

### 參考資料 與 延伸閱讀

* [[筆記] 談談 JavaScript 中 by reference 和 by value 的重要觀念](https://pjchender.blogspot.com/2016/03/javascriptby-referenceby-value.html)
* [重新認識 JavaScript: Day 05 JavaScript 是「傳值」或「傳址」？](https://ithelp.ithome.com.tw/articles/10191057)
