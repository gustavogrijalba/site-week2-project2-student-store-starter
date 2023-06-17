import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
        <footer className = "footer">
            <div className = "links">
                <div className = 'column'>
                <h4>Categories</h4>
                <ul id = "footerUl">
                    <li className='listItem'>All</li>
                    <li>Food</li>
                    <li>Clothing</li>
                    <li>Accessories</li>
                    <li>Tech</li>
                    
                </ul>
                </div>

                <div className = 'column'>
                <h4>Company</h4>
                <ul id = "footerUl">
                    <li>About Us</li>
                    <li>Find a Store</li>
                    <li>Terms</li>
                    <li>Sitemap</li>
                    <li>Careers</li>
                    
                </ul>
                </div>

                <div className = 'column'>
                <h4>Support</h4>
                <ul id = "footerUl">
                    <li >Send an Email</li>
                    <li>Contact Us</li>
                    <li>Money Refund</li>
                    <li>Order Status</li>
                    <li>Open Dispute</li>
                    
                </ul>
                </div>

                <div className = 'column'>
                <h4>GOATS</h4>
                <ul id = "footerUl">
                    <li className='listItem'>Ronaldo</li>
                    <li>Messi</li>
                    <li>Pele</li>
                    <li>Maradona</li>
                    <li>Zidane</li>
                    
                </ul>
                </div>

            </div>
        </footer>
    </div>
  )
}

export default Footer