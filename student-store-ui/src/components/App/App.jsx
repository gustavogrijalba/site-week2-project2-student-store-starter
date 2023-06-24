import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import axios from 'axios'
import { useState } from "react"
import { useEffect } from "react"
import {Routes, Route, Link } from 'react-router-dom'
import ProductDetail from "../ProductDetail/ProductDetail"



export default function App() {

let [products,setProducts] = useState([])

  useEffect(() => {
    
      axios.get('http://localhost:3001/store').then((response) => {
        setProducts(response.data.products);
        // console.log("here"); 
      })
  }, [])
  
  //create shopping cart 
  const [shoppingCart, setShoppingCart] = useState([])

//handler for adding item
  const handleAddItem = (product) => {
    // setting the new item based on product info
    const newItem = {
      "id": product.id,
      "name": product.name,
      "price": product.price,
      "quantity": 1
    }
    const exists = shoppingCart.find((insideCart) => newItem.id === insideCart.id)
    // checking if item already exists within the shopping cart
    if (exists) {
      exists.quantity++
      setShoppingCart([...shoppingCart])
    } else {
      shoppingCart.push(newItem)
      setShoppingCart([...shoppingCart])
    }
    // console.log(shoppingCart)
  }

  //handler for removing item
  const handleRemoveItem = (productId) => {
  
    //check if the item exists in our cart using id
    const exists = shoppingCart.findIndex((insideCart) => productId === insideCart.id)

    if (exists != -1) {
      //if exists, delete the item from the cart if it's 1 
      if (shoppingCart[exists].quantity > 0) {
        shoppingCart[exists].quantity--
        setShoppingCart([...shoppingCart])
      } 

      if (shoppingCart[exists].quantity === 0) {
        shoppingCart.splice(exists,1)
        setShoppingCart([...shoppingCart])
      }
    }
    console.log(shoppingCart)
  }
//setting up the checkoutform 

const [checkoutForm, setCheckoutForm] = useState({
  name: "",
  email: "",
  order: []
})

//handler for the inputs
const handleOnCheckoutFormChange = (name,value) => {
  checkoutForm[name] = value
  setCheckoutForm({...checkoutForm})
}
//handler for the submit button 
const handleOnSubmitCheckoutForm = () => {
  checkoutForm.order = shoppingCart
  setCheckoutForm({...checkoutForm})
  setShoppingCart([])
  console.log(checkoutForm)
  checkoutForm.name = ""
  checkoutForm.email = ""
  setCheckoutForm({...checkoutForm})
}

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar shoppingCart = {shoppingCart} 
          handleOnCheckoutFormChange = {handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm} 
          checkoutForm = {checkoutForm}></Sidebar>
          <Routes>
          <Route path = "/products/:productId" element = {<ProductDetail handleAddItem = {handleAddItem} handleRemoveItem = {handleRemoveItem} shoppingCart={shoppingCart}></ProductDetail>}></Route>
          <Route path = "/" element = {<Home products = {products} handleAddItem = {handleAddItem} shoppingCart = {shoppingCart} handleRemoveItem = {handleRemoveItem} />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
