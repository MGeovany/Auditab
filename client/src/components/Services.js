import React from 'react'
import '../styles/features-servicesStyle.css'

export const Services = () => {
  return (
    <div className='services flex'>
      <div className='title'>
        {' '}
        What is our <span>Services🏆</span>
      </div>
      <div className='card-container '>
        <div className='card-corner flex'>
          <div className='card-image'>
            <img src='/assets/people/Headhunter.png' alt='audit-icon'></img>
          </div>
          <div className='card-content flex'>
            <div className='card-title'>Analysis</div>
            <p className='card-text line'>
              {' '}
              Save hundreds of admin hours by reducing back and forth{' '}
            </p>
            <hr></hr>
            <span>
              <h3>Read More</h3>
            </span>
          </div>
        </div>
        <div className='card-corner flex'>
          <div className='card-image'>
            <img src='/assets/people/Advertise.png' alt='audit-icon'></img>
          </div>
          <div className='card-content flex'>
            <div className='card-title'>Support</div>
            <p className='card-text line'>
              Chat rooms for online support, with no registration, you can
              start.
            </p>
            <hr></hr>
            <span>
              <h3>Read More</h3>
            </span>
          </div>
        </div>
        <div className='card-corner flex'>
          <div className='card-image'>
            <img src='/assets/people/Social page.png' alt='audit-icon'></img>
          </div>
          <div className='card-content flex'>
            <div className='card-title'>Organization</div>
            <p className='card-text line'>
              Modern, user-friendly software that doesn’t require any training.
            </p>
            <hr></hr>
            <span>
              <h3>Read More</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
