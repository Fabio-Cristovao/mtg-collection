import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card'
import '../css/card-grid.css'

export default function CardGrid() {

  const cards = useSelector(state => state.cards);
  console.log(cards);

  return (
    <>
      <div className="grid-container">
        {
          cards.map(card => (
            <Card
              key={card.id}
              card={card}
            />
          ))
        }
      </div>
    </>
  )
}



