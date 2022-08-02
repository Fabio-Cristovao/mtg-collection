import React from 'react'

export default function Filters() {
  return (

    <div className="sidebar">
      <div className="sidebar-filters">
        <h1 className="filters-title">Filters</h1>
        <form>
          <section className="search-title-form">
            <form id="title-search-form">
              <input
                type="text"
                placeholder="Search cards name..."
                id="title-search"
              />
            </form>
          </section>
          <section className="search-for-color">
            <h3>Search for color:</h3>
            <div className='color-label'>
              <label for="">Black</label>
              <input type="checkbox" id="black" />
            </div>
            <div className='color-label'>
              <label for="">Red</label>
              <input type="checkbox" id="red" />
            </div>
            <div className='color-label'>
              <label for="">Green</label>
              <input type="checkbox" id="green" />
            </div>
            <div className='color-label'>
              <label for="">Blue</label>
              <input type="checkbox" id="blue" />
            </div>
            <div className='color-label'>
              <label for="">White</label>
              <input type="checkbox" id="white" />
            </div>
          </section>
          <button id="search-btn">Show cards</button>
        </form>
      </div>
      <div className="sort-cards"></div>
    </div>


  )
}


