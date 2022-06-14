/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/homePageStyle.css'

import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <div className='home-page '>
        <div className='home-page-text'>
          <div className='home-page-title'>
            <span>WEB APP</span> FOR YOUR <br></br>IT AUDIT
          </div>
          <div className='home-page-msg'>
            Verify the status of your management system through audits and
            perform inspections to validate the safety of your products,
            services and facilities.
          </div>
          <Link to='/home' className='home-page-btn flex'>
            Get Started
          </Link>
        </div>
        <div className='home-page-img'>
          <img src='/assets/people/Moneyverse - Crypto Galaxy.png' alt='logo' />
        </div>
      </div>
    </div>
  )
}
