import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import Search from "../Search/Search"
import { useState } from "react"
import SubNavBar from "../SubNavBar/SubNavBar"
import AboutUs from "../About Us/AboutUs"
import Footer from "../Footer/Footer"
import ContactUs from "../ContactUs/ContactUs"

export default function Home({products}) { 

  const [searchItem, setSearchItem] = useState("")
  const [activeCategory, setActiveCategory] = useState("")

  const handleSearchItem = (event) => {
    setSearchItem(event.target.value)
  }

  const handleUpdateCategory = (event) => {
    setActiveCategory(event.target.id)
  }

  return (
    <div className="home">
      <Hero/>
      <Search searchItem = {searchItem} handleSearchItem = {handleSearchItem}/>
      <SubNavBar  handleUpdateCategory = {handleUpdateCategory}/>
      <ProductGrid products = {products} searchItem = {searchItem} activeCategory={activeCategory}/>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  )
}
