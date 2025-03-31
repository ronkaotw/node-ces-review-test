const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`伺服器啟動在 http://localhost:${PORT}`);
});
