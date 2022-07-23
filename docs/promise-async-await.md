---
title: 從 Promise 到 async/await 的基本概念
---

# 從 Promise 到 async/await 的基本概念

>Promise 的誕生簡單說是為了解決 callback 容易變成 callback hell 的問題，讓非同步處理更好閱讀!

## Promise 基本概念

- Promise 一旦建立就會立刻執行(可以塞console.log看看，馬上就會印出來)  
- Promise 只有三種狀態: 等待(pending)、成功(resolve)、失敗(rejected)  
- Promise 狀態的改變只有兩種可能，一但狀態改變就會固定，永遠不會再改變狀態：

  1. 從 pending 變成 fulfilled
  2. 從 pending 變成 rejected  

- Promise 有兩種結果:  
  1. 非同步處理成功 ⇒返回一個 Promise 物件，狀態顯示成功
  2. 非同步處理中間有問題 ⇒ 拋出一個錯誤訊息，狀態顯示失敗  

- Promise Chain 用 .then 來串接同步/非同步程式，接續下一步執行的動作內容，因為下一個.then要可以接同步與非同步，所以即使傳入的值本身不是非同步的狀態，.then也會用return把它包成一個Promise物件，讓 Promise 可以一路傳下去~ 
  >then() 和 catch() 方法執行後都會返回一個新的 Promise 物件，讓你可以使用 chaining 的語法

- 如果在 .then 的路上回傳一個新的 new Promise ，下一個 .then 就會等這個新的 new Promise resolve的內容

- 一定要return 結果，否則 Callback 不會獲得前一個 Promise 的resolve值

## 使用方式

1.  使用 `new Promise()` 的建構函式創造一個新的 Promise 物件 (*很少用到，一般都是用人家建好的*)

    ```js
    const myPromise =new Promise ((resolve, reject) => {
      if (/* 非同步成功的條件 */){
        resolve(value)    // 成功的回傳值
      } else {
        reject(error)     // 失敗的原因
      }
    })
    ```

2. 使用建好的 `Promise` 物件

```js
myPromise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

### Promise 都是以非同步的方式調用

promise是以非同步的方式進行，即便是一串成功的鍊接.then，每個.then都還是會以非同步的方式調用!!  
好饒口，這個看示範比較有感:

```js
const promise = new Promise((resolve, reject)=>{
console.log('I am in new Promise')
resolve('Hi')
})
promise.then(value => {
  console.log(value)
})
console.log('end')
/*
I am in new Promise
end
Hi
*/
```

### 程式碼不會真的結束在 resolve()

調用 resolve 或 reject 並不會終結 Promise 的參數函數的執行，除非用 return resolve()，不然後面的東西還是會繼續跑出來!

也因為調用 resolve 或 reject 以後，Promise 的使命就完成了，所以後繼操作應該放到 .then 方法裡面，不要在 new Promise裡放 .then，意義不明啊!

```js
// 沒有用 return 語句，後面的東西會出來
new Promise((resolve, reject) => {
  resolve(1)
  console.log(2)  // 這個console還是會印出來
}).then(r => {    // then 也會走下去!!
  console.log('r =', r)
})
// 2
// r = 1

// 如果不想發生這樣的事情，除了好好改順序之外，可以在resolve前面加上return語句，這樣就不會有意外
new Promise((resolve, reject) => {
  return resolve(1)  // 後面的語句不會執行
  console.log(2)
})
```

### 用 catch 接住錯誤

Promise 對象的錯誤具有“冒泡”性質，會一直向後傳遞，直到被捕獲為止。也就是說，錯誤總是會被下一個catch語句捕獲。

```js
// 如果 Promise 狀態已經變成resolved，再拋出錯誤是無效的
const promise = new Promise(function(resolve, reject) {
  resolve('value')
  throw new Error('err')  // 不會被捕獲
})

// 一串promise用最後一個catch抓錯誤就好
promise
  .then(function(value1) {/* some code */})
  .then(function(value2) {/* some code */})
  .catch(function(err) { /* some code */ })

```

## async/await 基本概念

>async/await 只是一個 Promise 的語法糖，底層仍然是 Promise，針對 promise-based 函式再次進行語法包裝，讓程式碼讀起來更接近同步處理。

- await 只能在 async 函式內使用
- await 會暫停整個async function，讓 JS 引擎等待 Promise 執行完畢後再繼續async function 的內容
- async function 會回傳 Promise，如果回傳值不是一個 Promise 物件，則會被轉換為 resolved 狀態的 Promise 物件
- 要先確認有 Promise 物件實例，也就是已經定義好 resolve/reject，才能使用 async/await

## 使用方式

原本當同步與非同步邏輯混搭時，我們會需要用一堆 then 來控制先後順序，而在 async/await 中，只要關鍵字放對了，就可以確保程式按照「視覺上由上而下的順序」來執行。

```js
function promise(boolean){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (boolean){
        resolve('Yes')
      }else{
        reject('No')
      }
    }, 100)
  })
}  

async function asyncFn() {
  console.log('1')  
  const res1 = await promise(true)
  console.log('2', res1)  
  const res2 = await promise(true)
  console.log('3', res2)  
}

```

### 報錯的方式

因為 await 後面的 promise 如果失敗，就會直接回傳 Promise 的 reject 內容，await 下面的程式就都不會執行，所以很難抓錯。這時候就會搭配 try...catch 的語法一起。

- try 專門存放執行 Promise 成功的結果
- catch 則是執行 Promise 失敗的結果

```js
async function asyncFn() {
  try {
    console.log('1')  
  const res1 = await promise(true)
  console.log('2', res1)  
  const res2 = await promise(false) // 變成失敗
  console.log('3', res2)  
  }catch(err){
    console.log(err)   // 抓到失敗
  }
}
```
