import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className = "about" id = "About">
        <div className = 'text'>
        <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
        <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
        <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </div>
        <div className = 'about-img'>
            <img src = "https://static.wefut.com/assets/images/fut20/playeravatars/custom/248451.png"/>
        </div>
    </div>
  )
}

export default AboutUs