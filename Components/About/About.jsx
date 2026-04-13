import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-us'>
        <h1>About Us</h1>
        <p>
          At Skye, we are committed to protecting businesses and individuals
          in the digital world. Our mission is to provide advanced cybersecurity
          solutions that safeguard sensitive data, prevent cyber threats, and ensure
          secure digital operations.
        </p>

        <div className='about-content'>
          <div className='about-card'>
            <h2>Our Mission</h2>
            <p>
              To deliver reliable, innovative, and scalable security solutions
              that protect organizations from evolving cyber risks.
            </p>
          </div>

          <div className='about-card'>
            <h2>Our Vision</h2>
            <p>
              To become a trusted global leader in digital security and cyber
              defense technologies.
            </p>
          </div>

          <div className='about-card'>
            <h2>What We Do</h2>
            <p>
              We provide network security, data encryption, cloud protection,
              penetration testing, and real-time threat monitoring services.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About