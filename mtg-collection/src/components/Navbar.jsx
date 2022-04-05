import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-home'>
        <a href="index">
          <h4>Home</h4>
          <i class="fa-solid fa-house-chimney"></i>
        </a>
      </div>
      <ul className='navbar-items'>
        <li className='navbar-item'>
          <a href="">Your Collection</a>
        </li>
        <li className='navbar-item'>
          <a href="">Favourite Cards</a>
        </li>
        <li className='navbar-item'>
          <a href="">Search Cards</a>
        </li>
      </ul>
    </nav >

  )
}
