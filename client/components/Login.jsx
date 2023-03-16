/* eslint-disable react/no-unknown-property */
import React from 'react';
// import Logo from '../../public/logo.png';

export default function Login(props) {
  console.log('Login', props);
  return (
    <div className='loginContainer'>
      <img src="" alt="Placeholder image" />
      <a className="login" href="/auth/login">Login</a>
      <label className="">Forgot Password?</label>
      <label className="label has-text-centered has-text-white">Sign Up</label>
    </div>
                
  );
}
