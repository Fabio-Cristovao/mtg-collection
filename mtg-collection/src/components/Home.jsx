import React from 'react'
import CardGrid from './CardGrid'
import '../css/card-grid.css'

export default function Home() {
  return (
    <>
      <h1 className='card-grid-container-title'>Cards</h1>
      <CardGrid />
    </>
  )
}
