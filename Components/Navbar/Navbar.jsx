import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu ? '' : 'mobile-menu'}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <FaBars className='menu' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar