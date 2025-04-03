# 考試題目：顧問評價系統模組設計

## 關於公司簡介

我們是一個專注於綠色產業、ESG、碳管理顧問媒合的創新平台，期望建立顧問與企業用戶之間的高效對接機制，現正進入 MVP 建置與策略合作階段。

若您對環保科技、平台型 SaaS、顧問服務數位化有興趣，我們非常期待與您共同打造這個具有影響力的產品。

## 使用技術棧：

Node.js / Express / MongoDB

## 所需需求：

- 建立 Review 評價資料模型
- 實作三支 API（新增、查詢、刪除）
- 資料需與顧問關聯，並具備驗證與錯誤處理機制

## How to Use 如何執行

```
git clone https://github.com/ronkaotw/node-ces-review-test.git
```

```
cd node-ces-review-test-main
```

```
npm install
```

```
npm run start or nodemon server.js
```

## API 路徑

### 測試路徑

```
POST　/api/review
```

### Input 資料

```
{
  "userEmail": "testuser@example.com",
  "consultantName": "John Doe",
  "rating": 5,
  "comment": "這是一個很棒的顧問"
}
```

### 回傳資料

```
{
    "status": 201,
    "data": {
        "rating": 5,
        "comment": "這是一個很棒的顧問",
        "_id": "67ecb5dd5240fd49ff8ce0dc",
        "createdAt": "2025-04-02T03:58:21.869Z",
        "__v": 0
    }
}
```

### 測試路徑

```
GET /api/review
```

### 回傳資料

```
{
    "status": 201,
    "data": {
        {
            "_id": "67ecb5dd5240fd49ff8ce0dc",
            "rating": 5,
            "comment": "這是一個很棒的顧問",
            "createdAt": "2025-04-02T03:58:21.869Z",
            "__v": 0
        },
        {
            "_id": "67ece14de91a7aea2165e32a",
            "rating": 5,
            "comment": "這是一個很棒的顧問",
            "createdAt": "2025-04-02T07:03:41.196Z",
            "__v": 0
        },
    }
}
```

### 測試路徑

```
GET /api/review/:id
```

### 回傳資料

```
{
    "status": 201,
    "data": {
        {
            "_id": "67ecb5dd5240fd49ff8ce0dc",
            "rating": 5,
            "comment": "這是一個很棒的顧問",
            "createdAt": "2025-04-02T03:58:21.869Z",
            "__v": 0
        }
    }
}
```

### 如果找不到使用者跟顧問資料，就會顯示錯誤代碼 404

### 伺服器錯誤則會顯示 500，錯誤代碼
