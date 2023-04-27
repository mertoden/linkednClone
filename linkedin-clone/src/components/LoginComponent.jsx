import React from 'react'
import { LoginAPI } from '../Api/AuthAPI'
import'../Sass/LoginComponent.scss'

export default function LoginComponent() {
  const login = () => {
    LoginAPI();
  };

  return (
    <div>
        <h1>LoginComponent</h1>
        <button onClick={login} className="login-btn">Log in to Linkedin</button>
    </div>
  );
}
