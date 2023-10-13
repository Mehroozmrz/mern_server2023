const express = require("express");
const ProductInsert = require("../Controllers/ProductCal");

const router = express.Router();

router.post("/product_insert",ProductInsert);

module.exports=router;