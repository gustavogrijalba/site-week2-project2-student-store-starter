import * as React from "react"
import "./Sidebar.css"
import { useState } from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar({shoppingCart, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, checkoutForm}) {

  const [siderbarStatus,setSidebarStatus] = useState('closed')

  const sidebarHandler = () => {
    if (siderbarStatus === 'closed') {
      setSidebarStatus('open')
    } else {
      setSidebarStatus('closed')
    }
  }

  return (
      <div className = {siderbarStatus}>
        <div id = "sidebar-icon">
      <img src = "https://www.footyrenders.com/render/kylian-mbappe-137.png" 
      id = "sidebar-nav"
      onClick={sidebarHandler}
      />
      </div>

      {/* conditionally render when the sidebar is open */}
      {siderbarStatus === 'open' ? 
      <div>
      <ShoppingCart shoppingCart = {shoppingCart}></ShoppingCart> 
      <CheckoutForm shoppingCart={shoppingCart} 
      handleOnCheckoutFormChange = {handleOnCheckoutFormChange} 
      handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm} 
      checkoutForm = {checkoutForm}></CheckoutForm> 
      </div>
      : null}
      </div>
  )
}
