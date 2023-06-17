import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ProductView = ({product, productId, showDescription}) => {

  return (
    <div className = "product-view">
      <h1 className = "product-id">Product #: {productId}</h1>
      <ProductCard product = {product} productId={productId} showDescription = "true"/>
      </div>
  )
}

export default ProductView