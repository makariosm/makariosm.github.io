import React from 'react'
import '../../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='videos/video-3.mp4' autoPlay loop muted />
      <img className='welcome__image'
          src="images/headshot.jpg"
          alt="Profile" />
      <h1>Hey, I'm Makarios Mansour!</h1>
      <p>Computer Science student and a guy with big dreams</p>
    </div>
  )
}

export default HeroSection