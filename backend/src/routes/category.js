const express = require("express");
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const { adminMiddleware, requiresignin } = require("../common-middleware");

const { addCategory, getCategory } = require("../controller/category");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post(
  "/category/addCategory",
  requiresignin,
  adminMiddleware,
  upload.single("categoryImage"),
  addCategory
);
router.get("/category/getCategory", getCategory);

module.exports = router;
