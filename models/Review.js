const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// 定義 Review Schema
const reviewSchema = new Schema({
  consultantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Consultant", // 顧問與該資料模型關聯
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // 使用者與該資料模型關聯
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 建立模型
const ReviewModel = mongoose.model("Review", reviewSchema);

// 將模型與方法關聯
Object.setPrototypeOf(ReviewModel, Review);

module.exports = ReviewModel;
