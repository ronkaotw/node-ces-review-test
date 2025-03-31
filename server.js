const express = require("express");
const app = express();
// 使用中介軟體
const morgan = require("morgan");

const PORT = 3000;

//morgan
morgan.format("Aaron", "[Aaron] :method :url :status"),
  morgan.token("from", function (req, res) {
    return req.query.from || "-";
  });

app.listen(PORT, () => {
  console.log(`伺服器啟動在 http://localhost:${PORT}`);
});
