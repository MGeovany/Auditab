import React from 'react'

import '../styles/navbarStyle.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='navbar-title'>
          <div className='navbar-logo'>AUDITAB</div>
          <div className='navbar-links'>
            <Link to='/' className='navbar-link'>Home</Link>
            <Link to='/' className='navbar-link'>About</Link>
            <Link to='/' className='navbar-link'>Team</Link>
          </div>
        </div>
        <div className='navbar-buttons'>
        <Link to='/login' className='navbar-link navbar-button-login'>Login</Link>
        <Link to='/signup' className='navbar-link navbar-button-signup'>Sign Up</Link>
        </div>
      </div>
    </div>
  )
}
