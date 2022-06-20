import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/summaryStyle.css'
import { Navbar } from '../components/Navbar'

export const Summary = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className='navbar-logo'>
          <Link to='/audit' className=''>
            Audit Company
          </Link>
        </div>
      </div>
    </>
  )
}
