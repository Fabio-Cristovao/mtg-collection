import React from 'react'

export default function Card(props) {

  const { id, name, imageUrl } = props.card;

  return (
    <article className='grid-card'>
      <img src={`${imageUrl}`} alt={name} />
      <button className='card-button'>Add to collection</button>
      <button className='card-button'>Add to favourites</button>
    </article>
  )
}

