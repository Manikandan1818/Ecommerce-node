const express = require("express");
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const { adminMiddleware, requiresignin } = require("../common-middleware");
const { addProduct } = require("../controller/product");

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
  "/product/addProduct",
  requiresignin,
  adminMiddleware,
  upload.array("productPictures"),
  addProduct
);

module.exports = router;
