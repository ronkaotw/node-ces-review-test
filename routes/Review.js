const express = require("express");
const router = express.Router();

// 引入 Model

// 新增 Review
router.post("/", async (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      Hello: "api test",
    },
  });
});

// 查詢 Review
router.get("/", async (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      Hello: "this is get api test",
    },
  });
});

// 刪除 Review
router.get("/", async (req, res) => {
  return res.status(200).json({
    status: 200,
    data: {
      Hello: "this is delete api test",
    },
  });
});

module.exports = router;
