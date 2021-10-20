const express = require("express");
const { adminMiddleware, requiresignin } = require("../common-middleware");

const { addCategory, getCategory } = require("../controller/category");

const router = express.Router();

router.post(
  "/category/addCategory",
  requiresignin,
  adminMiddleware,
  addCategory
);
router.get("/category/getCategory", getCategory);

module.exports = router;
