import React from 'react'
import List from '../List/List';
import Logo from '../Logo/Logo';
import './Navbar.css';

export default function Navbar() {
  return (
      <div className='navbar'>
          <Logo />
          <List />
    </div>
  )
}
