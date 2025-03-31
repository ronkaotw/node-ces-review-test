const express = require("express");
const app = express();
// 使用中介軟體
const morgan = require("morgan");
const PORT = 3000;

// api引入
const apiReview = require("./routes/Review.js");
// db引入
const db = require("./config/db.js");
// 環境變入引入
require("dotenv").config();
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
