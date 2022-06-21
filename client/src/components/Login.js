import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth'

import '../styles/sessionStyle.css'

import { AtComponent, LockComponent } from '../utils/svgIcons'

export const Login = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const qs = require('qs')

    const data = { user, password }
    try {
      const res = await axios.post(
        'http://localhost:3000/auditab/users/auth',
        qs.stringify(data)
      )
      console.log('data', res)
      console.log(res)
      if (res.status === 200) {
        dispatch(authActions.login({ username: user, access: res.data.tipo }))
        navigate('/home', { replace: true })
        console.log(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login'>
      <div className='card-container-session'>
        <div className='image-container'>
          <img src='/assets/people/Allura - In the Park.png' alt=''></img>
        </div>
        <div className='login-content'>
          <h1>Login</h1>
          <form className='login-form' onSubmit={e => handleSubmit(e)}>
            <div className='field'>
              <div>
                <AtComponent width={13} height={16} fill='#BFC5CF' />
                <label>Email ID</label>
              </div>
              <input
                type='text'
                className='email-id'
                id='email-id'
                onChange={e => setUser(e.target.value)}
              ></input>
            </div>

            <div className='field'>
              <div>
                <LockComponent width={15} height={20} fill='#BFC5CF' />
                <label>Password</label>
              </div>
              <input
                type='password'
                className='password'
                id='password'
                onChange={e => setPassword(e.target.value)}
              ></input>
              <p>
                <a href='#email-id'>Forgot password?</a>
              </p>
            </div>

            <button className='btn btn-primary' type='submit'>
              Login
            </button>
          </form>
          <div className='other-logins'>
            <p>Or, Login with...</p>
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
              <p>
                New on AUDITAB?<a href='/register'>Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
