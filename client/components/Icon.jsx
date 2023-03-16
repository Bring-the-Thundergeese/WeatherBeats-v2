import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../public/logo.png';

export default function Icon() {

  return (
    <img src={Logo} className="Logo" alt="Placeholder image" />
  );
}
