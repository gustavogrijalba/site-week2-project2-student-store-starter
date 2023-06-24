import React from 'react'
import "./CheckoutForm.css"
import { useState } from 'react'

const CheckoutForm = ({shoppingCart,checkoutForm,handleOnCheckoutFormChange,handleOnSubmitCheckoutForm }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
   

    if (checkoutForm.name !== "" && shoppingCart.length !== 0) {
      handleOnSubmitCheckoutForm(event.target.value)
    }
    
  }

  const handleChange = (event) => {
    handleOnCheckoutFormChange(event.target.name, event.target.value)
  }

  //for button onClick 
  const [isClicked, setIsClicked] = useState('false')

  const handleButtonClick = () => {
    setIsClicked("true")
  }

  return (
    <div>
      <h1> Checkout </h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br></br>
        <input name = "name"
        type = "text"
        placeholder='Name'
        value = {checkoutForm.name}
        onChange={handleChange}/>
        <br></br>
        <label>Email</label>
        <br></br>

        <input name = "email"
        type = "email"
        placeholder='student@codepath.org'
        value = {checkoutForm.email}
        onChange={handleChange}/>
        <br></br>
        <button onClick={handleButtonClick}>Checkout</button>
      </form> 

      {checkoutForm.order.length != 0 && 
      isClicked === 'true' &&
      checkoutForm.order.map(item => (
        <p>{item.name} was purchased {item.quantity} times, for a total of ${(item.quantity * item.price)}</p>
      ))
      }

    </div>

    
  )
}

export default CheckoutForm