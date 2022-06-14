import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/summaryStyle.css'

export const Summary = () => {
  return (
    <div>
      <div className='navbar-logo'>
        <Link to='/audit' className=''>
          Audit Company
        </Link>
      </div>
    </div>
  )
}
