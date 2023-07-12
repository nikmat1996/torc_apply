import React from 'react';
import '../styles/navbar.css';
// @ts-ignore
import img from '../assets/logo.png'

const Navbar = () => {
  return (
    <section className='navbar_wrapper'>
          <div className="navbar_logo-container">
              <img className='navbar_logo' src={img} alt="logo" />
          </div>
          <div className="navbar_items-wrapper">
              <p className='navbar_items'>Home</p>
              <p className='navbar_items'>About Us</p>
              <p className='navbar_items'>Services</p>
              <p className='navbar_items'>Solutions</p>
              <p className='navbar_items'>Our Portfolio</p>
              <p className='navbar_items'>Contact Us</p>
          </div>
    </section>
  )
}

export default Navbar