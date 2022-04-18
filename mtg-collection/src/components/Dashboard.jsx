import React, { useState, useEffect } from 'react'
import Filters from './Filters'
import GridMyCards from './GridMyCards'
import GridDataFromApi from './CardGrid'
import Header from './Header'
import Footer from './Footer'
import CardGrid from './CardGrid'
import SearchCards from './SearchCards'
import Navbar from './Navbar'
import axios from 'axios'
import cardName from './SearchCards'
import { useDispatch } from 'react-redux'


export default function Dashboard() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://api.magicthegathering.io/v1/cards')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: 'GET_CARDS',
          payLoad: data.cards
        })
      })
      .catch(error => console.log('an error ocurred'))
  }, [])

  /* const [Cards, fetchCards] = useState([]);

  const getData = () => {
    fetch('https://api.magicthegathering.io/v1/cards')
      .then((res) => res.json())
      .then((data) => {
        fetchCards(data)
        console.log(data)
      })
  }

  useEffect(() => {
    getData()
  }, []) */



  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className='container'>
        <Header />
        <SearchCards />
        < CardGrid />
      </div>
    </>

  )
}

