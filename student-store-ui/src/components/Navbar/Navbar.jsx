import * as React from "react"
import Logo from "../Logo/Logo"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo/>
      <a href ="#Home">Home</a>
      <a href = "#About">About Us</a>
      <a href = "#Contact">Contact Us</a>
      <a href = "#Buy">Buy Now</a>
    </nav>
  )
}
