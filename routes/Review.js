const express = require("express");
const router = express.Router();

// 引入 Model
const User = require("../models/User");
const Review = require("../models/Review");
const Consultant = require("../models/Consultant");

//新增 Review
router.post("/", async (req, res) => {
  try {
    // 取得傳入的資料
    const createData = {
      userEmail: req.body.userEmail,
      consultantName: req.body.consultantName,
      rating: req.body.rating,
      comment: req.body.comment,
    };

    // 查找 userId 和 userName
    const findUser = await User.findOne({ email: createData.userEmail });

    // 找不到 userId，返回 404
    if (!findUser) {
      return res.status(404).json({
        status: 404,
        error: "操作失敗: 找不到使用者資料",
      });
    } else {
      const user = new User({
        email: createData.userEmail,
      });
      await user.save();
    }

    // 查找 consultantId 和 consultantName
    const consultant = await Consultant.findOne({
      name: createData.consultantName,
    });

    // 找不到顧問 id，返回 404
    if (!consultant) {
      return res.status(404).json({
        status: 404,
        error: "操作失敗: 找不到顧問評分",
      });
    } else {
      const consultant = new Consultant({
        name: createData.consultantName,
      });

      await consultant.save();
    }

    // 檢查其他欄位是否正確
    if (!createData.rating || !createData.comment) {
      return res.status(404).json({
        status: 404,
        error: "操作失敗: 評分和評價不得為空",
      });
    }

    // 創建一個新的 Review 並新增使用者和顧問姓名欄位
    const newReview = new Review({
      rating: createData.rating,
      comment: createData.comment,
    });

    // 儲存到資料庫
    const savedReview = await newReview.save();

    return res.status(201).json({
      status: 201,
      data: savedReview,
    });
  } catch (error) {
    // 錯誤處理
    console.error("伺服器錯誤:", error);
    return res.status(500).json({
      status: 500,
      error: "內部伺服器錯誤",
    });
  }
});

// 查詢多筆 Review
router.get("/", async (req, res) => {
  try {
    const review = await Review.find();

    // 如果找不到 review 資料，返回 404 。
    if (!review) {
      return res.status(404).json({
        status: 404,
        message: "操作失敗: 找不到該顧問的評價",
      });
    }

    return res.status(200).json({
      status: 200,
      data: review,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      error: "內部伺服器錯誤",
    });
  }
});

// 查詢單筆 Review
router.get("/:_id", async (req, res) => {
  try {
    const review = await Review.findOne({
      _id: req.params._id,
    });

    if (!review) {
      return res.status(404).json({
        status: 404,
        message: "操作失敗: 找不到該顧問的評價",
      });
    }

    return res.status(200).json({
      status: 200,
      data: review,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      error: "內部伺服器錯誤",
    });
  }
});

// 刪除 Review
router.delete("/:_id", async (req, res) => {
  try {
    // 用ID找尋一筆顧問資料
    const findDelete = await Review.findOne({
      _id: req.params._id,
    });

    // 刪除一筆顧問資料
    const review = await Review.deleteOne({
      _id: req.params._id,
    });

    // 判斷該資料是不是已經被刪除
    if (!findDelete || !review) {
      return res.status(404).json({
        status: 404,
        message: "操作失敗: 找不到要刪除的顧問資料或是顧問資料已經刪除",
      });
    } else {
      return res.status(200).json({
        status: 200,
        message: "操作成功: 顧問資料已成功刪除！",
        data: review,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      error: "內部伺服器錯誤",
    });
  }
});

module.exports = router;
