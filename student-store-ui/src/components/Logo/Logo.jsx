import React from 'react'
import "./Logo.css"
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
    <div className = "logo">
        <Link to = "/">
            <img id = "logo" src = "https://gamingfrog.com/wp-content/uploads/2020/12/sbc_set_image_1000090-a42955a4-c5b5.png" alt = "codepath logo"/>
        </Link>
    </div>
  )
}

export default Logo