// 環境變入引入
require("dotenv").config();
const express = require("express");
const app = express();
// 使用中介軟體
const morgan = require("morgan");
const PORT = process.env.PORT;

// 引入 DB Config 文件
const db = require("./config/db");

// api引入
const apiReview = require("./routes/Review.js");

// 與資料庫進行連線
async function connDB() {
  try {
    await db.client.connect();
    console.log("資料庫已連結");
  } catch (error) {
    console.log("資料庫連結失敗:", error);
    process.exit(1);
  }
}
connDB();

// 關閉資料庫連線
async function closeDB() {
  try {
    await db.client.close();
    console.log("資料庫連線已關閉");
  } catch (error) {
    console.error("無法關閉資料庫連線:", error);
    process.exit(1);
  }
}
closeDB;

//morgan
morgan.format("Aaron", "[Aaron] :method :url :status"),
  morgan.token("from", function (req, res) {
    return req.query.from || "-";
  });

// 中介軟體執行
app.use(morgan("Aaron"));

// api 執行
app.use("/api/review", apiReview);

app.listen(PORT, () => {
  console.log(`伺服器啟動在 http://localhost:${PORT}`);
});
