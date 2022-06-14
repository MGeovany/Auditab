import React from 'react'

import '../styles/footerStyle.css'

export const Footer = () => {
  return (
    <div className='footer '>
      <div className='footer-main'>
        <div className='footer-section-logo'>
          <div className='footer-title'>AUDITAB</div>
          <div className='footer-text'>
            Use a short time to register your actives, use all the dashboard
            features to make the most of them.
          </div>
          <div className='footer-socials'></div>
        </div>
        <div className='footer-sections'>
          <div className='footer-section'>
            <div className='footer-title'>About</div>
            <div className='footer-text'>About Us</div>
            <div className='footer-text'>Features</div>
            <div className='footer-text'>New Releasees & changes</div>
          </div>

          <div className='footer-section'>
            <div className='footer-title'>Support US</div>
            <div className='footer-text'>FAQs</div>
            <div className='footer-text'>Contact Us</div>
            <div className='footer-text'>Support Center</div>
          </div>

          <div className='footer-section'>
            <div className='footer-title'>Partner</div>
            <div className='footer-text'>Benefits for partners</div>
            <div className='footer-text'>Subscribe</div>
            <div className='footer-text'>Open Code Source</div>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className='footer-copyright flex'>
        <div className='footer-copyright-text'>Copyright © 2022 Auditab</div>
        <div className='footer-credits'>
          Web app developed by <span>us🚀</span>
        </div>
        <div className='footer-local'>Sps, Honduras 2022</div>
      </div>
    </div>
  )
}
