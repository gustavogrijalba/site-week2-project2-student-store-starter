import React from 'react'
import "./ProductCard.css" 
import { Link } from 'react-router-dom'

const ProductCard = ({product, showDescription}) => {

  return (
    <div className = "product-card">
      <Link to = {`/products/${product.id}`}>
      <img className = "product-image" src = {product.image}/>
      </Link>
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>

      {showDescription ? 
             <p className = "product-description">{product.description}</p>: null}
      
      </div>
  )
}

export default ProductCard