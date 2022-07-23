---
title: <JS> Event Loop
---

# Event Loop 簡易筆記

>事件循環 (Event Loop)、事件佇列 (Event Queue)、事件堆疊 (Call Stack)

Javascript 是單執行緒 (Single Thread) ，意思是 JS 一次只能做一件事情，程式碼是一行一行執行的。 所有的程式碼都會排排站在stack中等待被執行。  
那我們到底執行到哪裡了呢? 這邊會有 事件堆疊 (Call Stack) 來記錄我們執行到哪了!  
事件堆疊採後進先出，一個一個來，越晚進入堆疊的程序越早執行完，執行完後就移出推疊。就像去排隊買東西遇到臨檢，警察從隊伍最末端開始檢查，查完就踢出隊伍一樣(??)

[下圖](https://medium.com/itsems-frontend/javascript-event-loop-event-queue-call-stack-74a02fed5625)很好的說明了整個事件循環 (Event Loop)的過程:
![img alt](https://miro.medium.com/max/1050/0*julBGLAIl2V-_TJ_.png )

## 整個大框框是事件循環 (Event Loop) 相關流程，分成四個區塊

1. JS 程式執行中
   + Heap 是程式中各種函式 / 宣告blablabla的記憶體空間
   + Stack 就是剛剛提到的事件堆疊，紀錄現在執行到哪裡的進度

2. WebAPIs  
  JS運行在瀏覽器上的時候，瀏覽器會提供另外的API來互相合作，當我們在JS中呼叫對應的非同步WebAPIs時，這些WebAPIs就會跳出JS的Stack執行序(老娘不排隊了)，跑到旁邊去做他要做的事情!  
  這時候因為WebAPIs已經跳出隊伍了，所以在Stack排隊的程式碼可以繼續執行，WebAPIs在旁邊也可以自己玩自己的，而當WebAPIs執行完成/滿足條件後也不會插隊，會很有禮貌的跑到下面的佇列中等待。

3. Callback Queue 事件佇列  
  儲放 WebAPIs執行完成後的內容的地方，會等Event Loop通知，當Stack執行序的隊伍清空後才進入 Stack 被執行。

4. Event Loop 事件循環  
  Event Loop 會持續查看 Stack 的狀態，如果 Stack 空了，就會把在 Callback Queue 裡等待的內容排進 Stack 去執行。

## 現在來看常見範例 `setTimeout`

 在 JS 裡呼叫了 setTimeout，設定 0 秒後執行:

```js
console.log('Hi')

setTimeout(function (){
  console.log('there')
}, 0)

console.log('Body')

// 順序會是：Hi → Body → there
```

依照上述邏輯就可以看到執行順序：

1. console.log('Hi')
2. setTimeout 跳脫 JS 的 Stack 隊伍到旁邊玩，0秒後立刻跑到下面的事件佇列等待回去的時機
3. console.log('Body')
4. Stack 空了，Event Loop 把在 Callback Queue 裡等待的 setTimeout 內容排進 Stack 去執行: console.log('there')  

看到這可以發現，其實 setTimeout 設定幾秒不是真的要等幾秒，因為無論如何 setTimeout 都要等前面的Stack清空才能執行，所以這裡應該把 setTimeout 的時間理解成 *最少要等多久才會執行* 的意思!

最近在研究 Promise 也遇到 Event Loop ，找時間把筆記放上!

---

### 參考資料 與 延伸閱讀  

* [愛門莉的旅途留聲 Emilydondon](https://emilywalkdone.blogspot.com/2021/01/JavaScript-EVENT-LOOP.html)  
* [Javascript 的執行環境 (Execution context) 與堆疊 (Stack)](https://medium.com/itsems-frontend/javascript-execution-context-and-call-stack-e36e7f77152e)
