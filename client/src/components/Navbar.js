import React from 'react'

import '../styles/navbarStyle.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='navbar-title'>
          <div className='navbar-logo'>
            <Link to='/' className='navbar-link'>
              AUDITAB
            </Link>
          </div>
          <div className='navbar-links'>
            <Link to='/home' className='navbar-link'>
              Home
            </Link>
            <Link to='/asset' className='navbar-link'>
              Asset Management
            </Link>
            <Link to='/summary' className='navbar-link'>
              Summary
            </Link>
          </div>
        </div>
        <div className='navbar-buttons'>
          <Link to='/login' className='navbar-link navbar-button-login'>
            Login
          </Link>
          <Link to='/signup' className='navbar-link navbar-button-signup'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
