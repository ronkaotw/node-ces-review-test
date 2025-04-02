const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

// 與資料庫進行連線
async function connectDB() {
  try {
    // 連接到 MongoDB
    await mongoose.connect(mongoURI);
    console.log("資料庫連線成功");
  } catch (error) {
    console.error("資料庫連線失敗", error);
  }
}
connectDB();

module.exports = { connectDB, mongoose };
