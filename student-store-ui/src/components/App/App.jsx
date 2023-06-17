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
import AboutUs from "../About Us/AboutUs"
import Footer from "../Footer/Footer"
import ContactUs from "../ContactUs/ContactUs"


export default function App() {

let [products,setProducts] = useState([])

  useEffect(() => {
    
      axios.get('https://codepath-store-api.herokuapp.com/store').then((response) => {
        setProducts(response.data.products);
        // console.log("here"); 
      })
  }, [])


  // console.log("App: ", products)

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Routes>
          <Route path = "/products/:productId" element = {<ProductDetail></ProductDetail>}></Route>
          <Route path = "/" element = {<Home products = {products} />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
