import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ProductView = ({product, showDescription, handleAddItem, handleRemoveItem, shoppingCart}) => {

  return (
    <div className = "product-view">
      <h1 className = "product-id">Product #: {product.id}</h1>
      <ProductCard product = {product}  showDescription = "true" 
      handleAddItem={handleAddItem} 
      handleRemoveItem={handleRemoveItem}
      shoppingCart={shoppingCart}/>
      </div>
  )
}

export default ProductView