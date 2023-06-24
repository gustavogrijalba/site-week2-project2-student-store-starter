import React from 'react'
import "./ShoppingCart.css"

const ShoppingCart = ({shoppingCart}) => {
  //total of all the items
  let subTotal = 0
  //iterating through shopping cart to get the total price of each element, adding it to subtotal
  shoppingCart.forEach(element => {
    subTotal += element.quantity * element.price
  })

  //console.log(subTotal)

  
  return (
    <div className = 'shoppingCart'>
      <h1 id = "shopping-header">Shopping Cart</h1>

     
        

      {shoppingCart.length != 0 ? 
      <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>

          </tr>
          {shoppingCart.map(item => 
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
            </tr>)}
      
        </table> 
        <div id = "prices">
        <h2>Tax</h2>
        <p>7.25%</p>
        <h2>Subtotal</h2>
        <p>{subTotal.toFixed(2)}</p>
        <h2>Total</h2>
        <p>{(subTotal * 1.0725).toFixed(2)}</p>
        </div>
        </div>
          : <p>No items added to cart yet.</p>}
    </div>
  )
}

export default ShoppingCart