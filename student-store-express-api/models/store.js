let products = require("../data/db.json")

  const getAllProducts = () => {
    return products
  }

  const getProductById = (id) => {
    return products.products.find((product) => product.id === id)
  }


  module.exports = {
    getAllProducts,
    getProductById,
  }