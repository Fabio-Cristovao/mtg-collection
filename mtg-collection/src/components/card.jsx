import React from 'react'

export default function Card(props) {

  /* let { name, imageUrl } = cards; */

  return (
    <article className='grid-card'>
      <img src="./images/mtg-card.jpg" alt="" />
      <button className='card-button'>Add to collection</button>
      <button className='card-button'>Add to favourites</button>
    </article>
  )
}

