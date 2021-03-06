import React from 'react'
import { useDispatch } from 'react-redux';

export default function Card({ card }) {

  const { id, name, imageUrl } = card;
  const dispatch = useDispatch();
  const handleOnClick = () => {
    //console.log('clicked');
    //console.log(id);
    dispatch({
      type: 'ADD_CARD_TO_MY_COLLECTION',
      id
    })
  }
  return (
    <article className='grid-card'>
      <img src={`${imageUrl}`} alt={name} />
      <button className='card-button' onClick={handleOnClick}>Add to collection</button>
      <button className='card-button'>Add to favourites</button>
    </article>
  )
}

