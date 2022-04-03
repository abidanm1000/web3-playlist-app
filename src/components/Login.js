import React from 'react'
import '../styles/Login.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const Login = ({ title, button, href, link, headerStatement, emailInput, passwordInput, btnFunction, googleButton }) => {
  return (
    <div className='login'>

      <div className='project-name'>
        <FontAwesomeIcon icon="fa-solid fa-fire" />
        <div>Meta Beats</div>
      </div>
        
      <div className="login-container">
          <h1 className='login-heading'>{title}</h1>
          <button className='google-button'> <FontAwesomeIcon icon="fa-brands fa-google" /> {googleButton} with Google</button>
          <div>or</div>
          <br/>
          <input ref={emailInput} className='login-email' type='email' placeholder='Email'></input>
          <input ref={passwordInput} className='login-password' type='password' placeholder='Password'></input>
          <button onClick={btnFunction} className='login-button' >{button}</button>
          <div className='links'>
              <p>{headerStatement}</p>
              <a href={href}>{link}</a>
          </div>
      </div>
    </div>
  )
}