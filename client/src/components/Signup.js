import React from 'react'
import '../styles/sessionStyle.css'

import { AtComponent, LockComponent, UserComponent } from '../utils/svgIcons'
import { NavbarOut } from './NavbarOut'

export const Signup = () => {
  return (
    <>
      <NavbarOut />
      <div>
        <div className='login'>
          <div className='card-container-session'>
            <div className='image-container'>
              <img
                src='/assets/people/Allura - Walking Around.png'
                alt=''
              ></img>
            </div>
            <div className='login-content'>
              <h1>Sign Up</h1>
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
                <p className='parr'>Or, register with an email...</p>
              </div>
              <form className='login-form'>
                <div className='field'>
                  <div>
                    <UserComponent width={14} height={16} fill='#BFC5CF' />
                    <label className='lab'>Username</label>
                  </div>
                  <input
                    type='text'
                    className='user-id input'
                    id='user-id'
                  ></input>
                </div>

                <div className='field'>
                  <div>
                    <AtComponent width={14} height={16} fill='#BFC5CF' />
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
                </div>
                <div className='register-text'>
                  <p className='parr'>
                    Already User?
                    <a className='anchor' href='/login'>
                      Login
                    </a>
                  </p>
                </div>

                <button className='btn btn-primary'>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
