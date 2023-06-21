const express = require("express");
const router = express.Router();
const storeModel = require("../models/store")

router.get("/", (req, res) => {
    const products = storeModel.getAllProducts()
    res.json(products)
})

router.get("/:id", (req, res) => {
    const {id} = req.params
    const product = storeModel.getProductById(parseInt(id))

    if (!product) {
        return res.status(404).json({ message: "Product not found" })
    }

    res.json(product)
})

module.exports = router