/* eslint-disable react/no-unknown-property */
import React from 'react';
import Logo from '../../public/logo.png';

export default function Login(props) {
  console.log('Login', props);
  return (
    <div className="loginContainer">
      <a className="loginButton" href="/auth/login">Login</a>
      <br></br>
      <span className="forgotPassword">Forgot Password?</span>
      <br></br>
      <span className="signUp">Sign Up</span>
    </div>
  );
}
