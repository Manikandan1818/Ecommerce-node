const express = require("express");
const multer = require("multer");
const shortid = require("shortid");
const { adminMiddleware, requiresignin } = require("../common-middleware");
const { addProduct } = require("../controller/product");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.post(
  "/product/addProduct",
  requiresignin,
  adminMiddleware,
  upload.single("productPictures"),
  addProduct
);

module.exports = router;
