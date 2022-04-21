import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul className="navbar-item">
        <li><Link to='/'>Home</Link></li>
        <li>
          <div className='navbar-search-cards'>
            <input type="text" placeholder='search cards here...' />
            <button>Search cards!</button>
          </div>
        </li>
      </ul>
      <ul className="navbar-item">
        <li>
          <Link to='/collection'>My collection</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>

  )
}
