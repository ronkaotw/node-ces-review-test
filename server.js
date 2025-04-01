// 環境變入引入
require("dotenv").config();
const express = require("express");
const app = express();
// 使用中介軟體
const morgan = require("morgan");
const PORT = process.env.PORT;

// 引入 DB Config 文件
const { connectDB } = require("./config/db");

// api引入
const apiReview = require("./routes/Review.js");

connectDB();

//morgan
morgan.format("Aaron", "[Aaron] :method :url :status");
app.use(morgan("Aaron"));

// 使用中介軟體
app.use(express.json());

// api 執行
app.use("/api/review", apiReview);

app.listen(PORT, () => {
  console.log(`伺服器啟動在 http://localhost:${PORT}`);
});
