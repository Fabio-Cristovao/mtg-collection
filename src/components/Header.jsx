import React from 'react'

export default function Header() {
  return (
    <header className="hero">
      <h1 className="main-title">My MTG</h1>
      <p className="brief-presentation">
        Welcome to My MTG. A micro application where you can show you card
        collection, and organize it your way. Here you can add your cards,
        check their values and much more.
      </p>
      <ul className="functionality-list">
        <li>
          Your Collection gives you an overview of your card collection, where you can build your decks, and add notes to them.
        </li>
        <li>
          Favourite Cards says it all, it's where you cand add cards and store them as a wishlist, for example.
        </li>
        <li>
          Search Cards is used to search the MTG API, and show the results you want. You cand search by name or color.
        </li>
      </ul>
    </header>
  )
}
