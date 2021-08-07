# 餐廳清單 Restaurant List
以 Express 所建立的餐廳清單網站。

## 功能 Features
- 使用者可以註冊帳號
- 使用者可以透過 Facebook Login 直接登入
- 使用者必須登入才能使用餐廳清單
- 使用者可以建立並管理專屬他的一個餐廳清單
- 使用者登出、註冊失敗、或登入失敗時，使用者都會在畫面上看到正確而清楚的系統訊息
- 使用者可以新增一家餐廳
- 使用者可以瀏覽一家餐廳的詳細資訊，包括類別、地址、電話、描述及圖片
- 使用者可以瀏覽全部所有餐廳，包括照片、名稱、分類以及評分
- 使用者可以修改一家餐廳的資訊
- 使用者可以刪除一家餐廳
- 使用者可以透過搜尋餐廳名稱來找到特定的餐廳
- 使用者可以選擇規則進行排序

## 環境 Environment
- Node.js
- Nodemon
- mongodb

## 安裝 Installation

1. 取得專案至本地
```
git clone https://github.com/wilson614/restaurant_list
```
2. 進入專案目錄
```
cd restaurant_list
```
3. 安裝套件
```
npm install
```
4. 建立 .env 檔案
```
參照 .env.example 在專案根目錄建立 .env 檔案
```
5. 產生種子資料
```
npm run seed
```
預設使用者
>* name: user1
>* email: user1@example.com
>* password: 12345678

>* name: user2
>* email: user2@example.com
>* password: 12345678

6. 啟動專案
```
npm run dev
```
7. 出現以下訊息後，即可在 http://localhost:3000 開始使用
```
This server is running on localhost:3000
```
