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
      return res.status(400).json({
        status: 400,
        error: "操作失敗: 評分和評價不得為空",
      });
    }

    // 創建一個新的 Review 並新增使用者和顧問姓名欄位
    const newReview = new Review({
      userId: findUser.userId,
      consultantId: consultant.consultantId,
      consultantName: consultant.name,
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

// 查詢 Review
router.get("/consultantId", async (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      Hello: "this is get api test",
    },
  });
});

// 刪除 Review
router.delete("/", async (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      Hello: "this is delete api test",
    },
  });
});

module.exports = router;
