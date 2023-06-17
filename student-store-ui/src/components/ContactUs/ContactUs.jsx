import React from 'react'
import "./ContactUs.css"
const ContactUs = () => {
  return (
    <div id = "Contact" className = "contact">
        <div className = "contact-media">
        <div>
        <h1 id = "contact-header">Contact Us</h1>
        </div>
        <div className='contact-content'>
            <div className = "contact-img">
                <img id = "john-cena" src = "https://www.footyrenders.com/render/CR7-Fifa-18-Real-Madrid-2017-18.png"/>
            </div>

            <div id = "johncenatext">
            <p>We are always delighted to hear back from our customers! Please reach us at these links: </p>
            <li>johncena@wwe.com</li>
            <li>123-456-7890</li>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ContactUs