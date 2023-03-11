import React from 'react'
import Hero from '../../components/Hero/Hero';
import Navbar from '../../components/Nav/Navbar';
import './Header.css';

export default function Header() {
  return (
      <div className='header'>
          <Navbar />
          <Hero />
    </div>
  )
}
