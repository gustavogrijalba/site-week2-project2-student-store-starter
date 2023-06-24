import React from 'react'
import "./ProductCard.css" 
import { Link } from 'react-router-dom'

const ProductCard = ({product, showDescription, handleAddItem, shoppingCart, handleRemoveItem}) => {

  //console.log(typeof(shoppingCart))

  
  const productId = product?.id
  const foundProduct = shoppingCart?.find(item => item.id === productId)

  const quantity = foundProduct ? foundProduct.quantity : 0
  

  const addItem = () => {
    handleAddItem(product)
  }

  const removeItem = () => {
    handleRemoveItem(productId)
  }

  return (
    <div className = "product-card">
      <Link to = {`/products/${product.id}`}>
      <img className = "product-image" src = {product.image}/>
      </Link>
      <h2>{product.name}</h2>
      <h3>${product.price}</h3>
      <button onClick={addItem}>+</button>
      <button onClick = {removeItem}>-</button>
      {quantity != 0 && (
        <p>{quantity}</p>
      )}

      {showDescription ? 
             <p className = "product-description">{product.description}</p>: null}
      
      </div>
  )
}

export default ProductCard