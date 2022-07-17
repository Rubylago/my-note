---
sidebar_position: 10
slug: multer-upload
title: Multer 圖片上傳
---

# Multer圖片上傳 

>搭配 imgur @2.2.0

[Multer](https://github.com/expressjs/multer#multer---) 是Express官方推出的，用於Node.js multipart/form-data請求資料處理的中介軟體。

因為我的網站有部屬Heroku ，Heroku主機會定期清除資料，使上傳的圖片無法保留，所以會需要用Multer 的第三方圖片空間，這裡示範的是搭配 imgur 服務，把圖片上傳到第三方網站保存的步驟。

而且因為之前用的是 imgur @1.XX 的版本，要寫這篇筆記的時候發現他更新到@2.2.0，想說順便邊寫邊升級好了結果這個做法超累花了一天才寫完Q口Q

:::tip

* 設定表單傳輸類型 : 透過 form 提交，用POST/PUT/PATCH
* Multer 不會處理任何非 `multipart/form-data` 類型的表單數據所以一定要設定 `<form>` 的屬性: `enctype="multipart/form-data"`
:::
:::note
* `enctype` 屬性：設定提交表單到伺服器前，應對表單資料如何進行編譯
* `multipart/form-data` : 讓 Server 知道表單不僅包含純文字，也包含二進位資料
:::

```js
<form action="/users/:id/edit" method="post" enctype="multipart/form-data">
```

---

## 基本安裝

1. [Multer](https://github.com/expressjs/multer#multer---) 是Express官方推出的，用於Node.js multipart/form-data請求資料處理的中介軟體。它基於busboy構建，可以高效的處理檔案上傳。
2. 安裝 Multer `npm i multer`
3. 除了基本的表單內容存入`body`之外，Multer 還會新增一個叫做`file` (or `files`) 的物件到express 框架的`request`物件裡面，物件裡包含表單上傳的檔案資訊 [官方 File information](https://github.com/expressjs/multer#file-information)

## 表單設定

1. 前端表單設定 `enctype="multipart/form-data"` ， POST 提交表單

    ```html
    <!-- view -->
    <form action="/profile" method="POST" enctype="multipart/form-data">
      <input type="file" name="avatar" />
    </form>
    ```

2. 後端資料庫確認有新增對應欄位，增加屬性來保存圖片來源的連結字串  
    以MYSQL為例:  
   1. 新增migration `npx sequelize migration:generate --name add-avatar`
   2. 修改要新增的內容欄位/名稱，屬性是`type: Sequelize.STRING`
   3. 修改對應Model欄位，屬性是字串 DataTypes.STRING
   4. 資料庫同步 `npx sequelize db:migrate`
   5. 開啟資料庫，確定在資料庫以及 model 裡面都有這個新的屬性

## 申請Imgur服務並安裝imgur套件

1. 註冊 [imgur](https://imgur.com/)。
2. 成功登入以後，前往 [https://api.imgur.com/oauth2/addclient](https://api.imgur.com/oauth2/addclient) 填寫資料
3. Authorization type 選第二個「OAuth 2 authorization without a callback URL」，其他則按照個人資訊填寫即可
4. 按下 Submit 之後會看到一個成功頁面，上面有你的 **Client ID** 跟 **Client Secret**，這些資訊是機密喔!! 要到`.env`註記起來 `IMGUR_CLIENT_ID=你的ClientID`, `IMGUR_CLIENT_SECRET=你的ClientSecret`。

   :::caution
    一旦關閉視窗就再也無法檢視 Client secret。如果真的忘記就要重新申請一個!
   :::

5. 安裝 [imgur@2.2.0版](https://www.npmjs.com/package/imgur/v/2.2.0)  `npm i imgur@2.2.0`
6. 這裡有個小坑，要同步安裝 tslib 套件 `npm install --save tslib`，不然 imgur 會報錯

## middleware 設定 Multer 的各種選項

前置作業都安裝的差不多了，要開始寫code啦~

1. 在根目錄新增資料夾 temp 並加進 `.gitignore` 裡，這個資料夾用來放暫存的圖片封包
2. 在 middleware 資料夾中新增 multer.js
3. 於 multer.js 中設定 Multer options  
     `multer(opts)` 有4個選項，下面有範例:
     1. `dest` or `storage` : 你要把檔案存在哪，放檔案儲存的位置

     2. `fileFilter` : 控制可上傳的檔案型別，篩選符合條件的檔案
        選項帶有一個函式，用來篩選符合條件的上傳檔案，接受3個參數：  
        * `request` 物件
        * 帶有上傳檔案資訊的`file` 物件
        * 篩選完成後呼叫的`cb` 函式  

     3. `limits` : 上傳檔案的限制，用於設定檔案大小，Multer 會將這個物件傳遞至busboy中
          limits 物件中還可以再包含7個選用參數：
         * fieldNameSize – 檔案名稱長短的最大值。預設值：100 bytes
         * fieldSize – 檔案大小的最大值。預設值：1MB
         * fields – 非檔案欄位的最大數量。預設值：Infinity
         * fileSize – multipart 表單中，檔案的最大值。預設值：Infinity
         * files – multipart 表單中，檔案最大數量。預設值：Infinity
         * parts – multipart 表單中，最大元件(fields files)數量。預設值：Infinity
         * headerPairs – 預設值：2000  

     4. `preservePath` : 是否保存檔案完整路徑

    ```js title=範例
    // middleware/multer.js
    const multer = require('multer')  // 把 multer 載進來
    const upload = multer({   // 呼叫multer 套件提供的方法
      dest: 'temp/',          // 設定上傳的圖片會暫存到 temp 這個資料夾中
      limit: {                
        fileSize: 1000000     // 設定檔案大小限制 1MB
      },
      fileFilter (req, file, cb) {    // 限定上傳檔案類型 (我選了 jpg,jpeg,png,gif )
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {  
          // You can always pass an error if something goes wrong:
          cb(new Error('Please upload an image'))
        }
        cb(null, true)        // cd + 布林值, 表示要不要上面的限制
      }
    })
    module.exports = upload   // 存成 upload 後導出
    ```

## 在路由中設定接收上傳檔案的方式

在路由中載入剛剛 exports 的 multer middleware ，並設定接收上傳檔案的方式。

```js  這邊示範的路由是把controller拆出來的方式
// routes/index.js  
const upload = require('../middleware/multer') // 載入 multer midleware 
// ...
app.put('/profile', upload.single('cat'), updateController.imgUpdate)
```

根據上傳方式的不同， `upload` 裡面有5種對應方法 :

* `.single(fieldname)`  : 接受單一欄位的單一檔案，存在 `req.file` 裡面

  ```jsx
  upload.single('cat') // 一次上傳一張貓貓圖
  ```

* `.array(fieldname[, maxCount])`  : 接受單一欄位的多個檔案，可以用參數`maxCount`來限制數量，存在 `req.files` 裡面

  ```jsx
  upload.array('cat', 12) // 一次上傳最多 12 張貓貓圖
  ```

* `.fields(fields)`  : 接受多個欄位的多個檔案，必須包含欄位名稱name和參數`maxCount`，以物件的形式存在`req.files` 裡面

  ```js
  upload.fields([{ name: 'cat', maxCount: 3 }, { name: 'bird', maxCount: 4 }])
    // 同時上傳3張貓貓圖和4張鳥鳥圖 
    // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    // e.g.
    //  req.files['cat'][0] -> File
    //  req.files['bird'] -> Array
    //  { cat: [cat0, cat1, ...], bird: [bird0, bird1, ...] }
  ```

* `.none()`  :  只收文字，非文字檔會報錯`"LIMIT_UNEXPECTED_FILE”`

* `.any()`  : 啥都收，存成一個陣列在 `req.files` 裡面

:::note
目前為止，檔案順利上傳的流程會是 :  
form表單送出 ⇒ 路由 upload ⇒ 轉進 middleware/multer.js ⇒ 產生 req.file 並把圖存進 temp 資料夾中  
到此 multer 的工作告一段落囉!  
接下來，我們要把 multer 存好的圖片檔案`req.file` (或 `req.files`) 拿出來，這裡就要開始自己做 helper啦!
:::

## 新增 helpers/file-helpers.js 處理圖檔

這裡我們會使用 Node.js 的 fs module ，是用來操作實體檔案，可以同步或非同步存取檔案的系統操作。

```js
// helpers/file-helpers.js
const fs = require('fs')  // 使用node.js原生模組fs
const { ImgurClient } = require('imgur')  // 載入imgur

// 把剛剛申請的資料從.env拿出來
const client = new ImgurClient({     
  clientId: process.env.IMGUR_CLIENT_ID,
  clientSecret: process.env.IMGUR_CLIENT_SECRET,
  refreshToken: process.env.IMGUR_REFRESH_TOKEN
})

const imgurFileHandler = file => {          // 傳入 file 或 files
  return new Promise((resolve, reject) => { // 建立一個promise實例
    if (!file) return resolve(null)         // 如果沒有file就跳出
    return client.upload({                  // imgur@2.2.0官方的上傳方式
      image: fs.createReadStream(file.path),// 用 fs 讀取檔案路徑，這裡都跟著imgur的官方設定
      type: 'stream',
      album: process.env.IMGUR_ALBUM_ID
    }).then(img => {
      // console.log(img)                   // 可以印出img看一下拿到什麼資料
      resolve(img ? img.data.link : null)   // img如果建立成功，回傳img的路徑
    })
      .catch(err => reject(err))
  })
}
module.exports = {
  imgurFileHandler
}
```

## 拿到img.data就大功告成了
到此我們已經可以透過載入imgurFileHandler(file)的方式取得圖檔上傳img的路徑了!

可以試著console.log(img)印出來看看，如果順利應該會印出整包圖檔imgur的data，裡面的link就是imgur幫你上傳好的圖片網址!

至此就算告一段落啦!
之後可以在controller裡面用這個網址來存進資料庫，真的很方便~

```jsx
// 以 async/await 的方式拿到圖檔網址
async(req, res, next) => {
  const { file } = req
  const filePath = await imgurFileHandler(file)
}
```

---
### 參考資料 與 延伸閱讀

* [express檔案上傳中介軟體Multer詳解](https://codertw.com/前端開發/253979/)
* [超完整 Express Imgur 套件上傳教學](https://israynotarray.com/nodejs/20220517/432259079/)
* [Day8 - Node.js 檔案系統](https://ithelp.ithome.com.tw/articles/10185422)
* [Node.js 文件系統](https://www.runoob.com/nodejs/nodejs-fs.html)
