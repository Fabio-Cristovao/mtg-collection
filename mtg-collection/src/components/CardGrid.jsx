import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card'

export default function CardGrid() {

  const cards = useSelector(state => state.cards);

  console.log(cards)


  return (
    <>
      <h2 className="card-grid-title">Results</h2>
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



