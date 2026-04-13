import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'

const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'mobile-menu'}>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <img src={menu} alt="" className='menu' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar