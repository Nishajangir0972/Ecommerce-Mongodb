import React from 'react'
import {Link}from 'react-router-dom'

function Header() {
  return (
  <div className='header'>
    <Link to='/'>Home</Link>
    <Link to='/userLogin'>Login</Link>
    <Link to='/adminLogin'> Admin Login</Link>

  </div>
  )
}

export default Header