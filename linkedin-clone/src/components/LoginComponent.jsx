import React, { useState } from 'react'
import { LoginAPI } from '../api/AuthAPI'
import LinkedinLogo from "../assets/linkedinLogo.png"
import'../Sass/LoginComponent.scss'

export default function LoginComponent() {
  const [credentails, setCredentials] = useState({});
  const login = async() => {
   let res = await LoginAPI(credentails.email, credentails.password);
   console.log(res);
  };
  return (
    <div className='login-wrapper'>
      <img src={LinkedinLogo} className='linkedinLogo'/>
      <h1 className='heading'>Sign in</h1>
      <p>Stay updated on your professionel world</p>
      {/* <h1>LoginComponent</h1>
      <div className='auth-inputs'>
        <input
          onChange={(event) =>
            setCredentials({ ...credentails, email: event.target.value})
          }
          className="common-input"
          placeholder ="Enter your Email"
        />
        <input
          onChange={(event) =>
            setCredentials({ ...credentails, password: event.target.value})
          }
          className="common-input"
          placeholder ="Enter your Password"
        />
      </div>
      <button onClick={login} className='login-btn'>
        Log in to Linkedin
      </button> */}
    </div>
  );
}
