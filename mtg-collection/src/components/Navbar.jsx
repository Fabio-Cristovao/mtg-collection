import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {


  const [input, setInput] = useState('');

  const searchName = (input) => {

    setInput(input);
  }


  const handleOnClick = (e) => {
    e.preventDefault();

    props.url(`https://api.magicthegathering.io/v1/cards?name=${input}`)
  }


  return (
    <div className='navbar'>
      <ul className="navbar-item">
        <li><Link to='/'>Home</Link></li>
        <li>
          <div className='navbar-search-cards'>
            <input type="text" placeholder='search cards here...' onChange={(e) => searchName(e.target.value)} />
            <button onClick={(e) => handleOnClick(e)}>Search cards!</button>
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
