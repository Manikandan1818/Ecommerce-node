const shortid = require("shortid");
const Product = require("../model/product");

exports.addProduct = (req, res) => {
  res.status(200).json({ file: req.file, body: req.body });
};
