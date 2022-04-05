import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul className="navbar-home-item">
        <li>Home</li>
      </ul>
      <ul className="navbar-item">
        <li>
          <a href=""> Favourites</a>
        </li>
        <li>
          <a href="">My collection</a>
        </li>
        <li>
          <a href="">Search Cards</a>
        </li>
      </ul>
    </div>

  )
}
