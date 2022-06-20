import React from 'react'
import '../styles/sessionStyle.css'

import { AtComponent, LockComponent } from '../utils/svgIcons'
import { NavbarOut } from './NavbarOut'

export const Login = () => {
  return (
    <>
      <NavbarOut />

      <div className='login'>
        <div className='card-container-session'>
          <div className='image-container'>
            <img src='/assets/people/Allura - In the Park.png' alt=''></img>
          </div>
          <div className='login-content'>
            <h1>Login</h1>
            <form className='login-form'>
              <div className='field'>
                <div>
                  <AtComponent width={13} height={16} fill='#BFC5CF' />
                  <label className='lab'>Email ID</label>
                </div>
                <input
                  type='text'
                  className='email-id input'
                  id='email-id'
                ></input>
              </div>

              <div className='field'>
                <div>
                  <LockComponent width={15} height={20} fill='#BFC5CF' />
                  <label className='lab'>Password</label>
                </div>
                <input
                  type='password'
                  className='password input'
                  id='password'
                ></input>
                <p className='parr'>
                  <a className='anchor' href='#email-id'>
                    Forgot password?
                  </a>
                </p>
              </div>

              <button className='btn btn-primary'>Login</button>
            </form>
            <div className='other-logins'>
              <p className='parr'>Or, Login with...</p>
              <div className='button-logins'>
                <div className='button-container'>
                  <img
                    className='google-btn'
                    src='/assets/icons/svg/google-svgrepo-com.svg'
                    alt='socials'
                  ></img>
                </div>
                <div className='button-container'>
                  <img
                    className='facebook-btn'
                    src='/assets/icons/svg/facebook-svgrepo-com.svg'
                    alt='socials'
                  ></img>
                </div>
                <div className='button-container'>
                  <img
                    className='email-btn'
                    src='/assets/icons/svg/email-svgrepo-com.svg'
                    alt='socials'
                  ></img>
                </div>
              </div>
              <div className='register-text'>
                <p className='parr'>
                  New on AUDITAB?
                  <a className='anchor' href='/signup'>
                    Register
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
