import React from 'react'
import "./SubNavBar.css"

const SubNavBar = ({handleUpdateCategory}) => {
  return (
    <div className = "subNavBar">
    <button className = "hover-underline-animation" id = "" onClick={handleUpdateCategory}>All Categories</button>
    <button className = "hover-underline-animation" id = "clothing" onClick={handleUpdateCategory}>Clothing</button>
    <button className = "hover-underline-animation" id = "food" onClick={handleUpdateCategory}>Food</button>
    <button className = "hover-underline-animation" id = "accessories" onClick={handleUpdateCategory}>Accessories</button>
    <button className = "hover-underline-animation" id = "tech" onClick={handleUpdateCategory}>Tech</button>
    </div>
  )
}

export default SubNavBar