import React, { useReducer, useState } from 'react';

export default function SearchCards() {

  // getting userinput to add to the url

  let cardName = '';
  let cardColor = '';


  let url = `https://api.magicthegathering.io/v1/cards${cardName}${cardColor}`

  return (
    <section className='search-cards-section'>
      <h3 className='search-cards-title'>Search your cards here!</h3>
      <p className='search-cards-description'>You can search by name of a card, set, or color;</p>
      <form className='search-cards-form'>
        <section className='search-cards-input-section'>
          <label htmlFor="search-cards-input"
            className='search-cards-label'>
            Search by name :
          </label>
          <input
            className='search-cards-input'
            type="text" name='search-cards-input' placeholder="Ex: Chandra Nalaar"
          />
        </section>
        <section>
        </section>
        <section className='search-cards-checkbox'>
          <label htmlFor="search-cards-checkbox" className='search-cards-label'>
            Search by color:
          </label>
          <div className='search-cards-checkbox-container'>
            <article className='search-color-element'>
              <div className='checkbox-description'>
                <label htmlFor="color">Swamp </label>
                <span>
                  <img src="./images/swamp.svg" alt="swamp mtg symbol" />
                </span>
              </div>
              <input type="checkbox" name='color' />
            </article>
            <article className='search-color-element'>
              <div className='checkbox-description'>
                <label htmlFor="color">Plains </label>
                <span>
                  <img src="./images/plains.svg" alt="swamp mtg symbol" />
                </span>
              </div>
              <input type="checkbox" name='color' />
            </article>
            <article className='search-color-element'>
              <div className='checkbox-description'>
                <label htmlFor="color">Forest </label>
                <span>
                  <img src="./images/forest.svg" alt="swamp mtg symbol" />
                </span>
              </div>
              <input type="checkbox" name='color' />
            </article>
            <article className='search-color-element'>
              <div className='checkbox-description'>
                <label htmlFor="color">Island </label>
                <span>
                  <img src="./images/island.svg" alt="swamp mtg symbol" />
                </span>
              </div>
              <input type="checkbox" name='color' />
            </article>
            <article className='search-color-element'>
              <div className='checkbox-description'>
                <label htmlFor="color">Mountain </label>
                <span>
                  <img src="./images/mountain.svg" alt="swamp mtg symbol" />
                </span>
              </div>
              <input type="checkbox" name='color' />
            </article>
          </div>
        </section>
        <button
          className="form-submit-btn"
        >Search</button>
      </form>
    </section>
  )
}
