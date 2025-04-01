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
    min: 1,
    max: 5,
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

// 使用 ES6 class 來定義 Model
class Review {
  static async createReview(data) {
    const review = new this(data);
    await review.save();
    return review;
  }

  static async getReviewsByConsultant(consultantId) {
    return this.find({ consultantId }).exec();
  }

  static async deleteReviewById(id) {
    return this.findByIdAndDelete(id).exec();
  }
}

// 建立模型
const ReviewModel = mongoose.model("Review", reviewSchema);

// 將模型與方法關聯
Object.setPrototypeOf(ReviewModel, Review);

module.exports = ReviewModel;
