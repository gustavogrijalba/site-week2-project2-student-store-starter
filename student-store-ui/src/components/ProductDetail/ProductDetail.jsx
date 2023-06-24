import React, { useEffect, useState } from 'react'
import "./ProductDetail.css"
import { useParams } from 'react-router-dom'
import ProductView from "../ProductView/ProductView"
import axios from 'axios'
const ProductDetail = ({handleAddItem,handleRemoveItem, shoppingCart}) => {

  const [product, setProducts] = useState([])
  const {productId} = useParams()

  let showDescription = false

  useEffect(() => {
    
    axios.get(`http://localhost:3001/store/${productId}`).then((response) => {
      setProducts(response.data);
    })
}, [])


  return (
    <div className = "product-detail">
      <ProductView product = {product} productId = {productId} showDescription = {showDescription} 
      handleAddItem={handleAddItem}
      handleRemoveItem={handleRemoveItem}
      shoppingCart={shoppingCart}/>
      </div>
  )
}

export default ProductDetail