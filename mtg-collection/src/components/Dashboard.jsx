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
import { Outlet } from 'react-router-dom'



export default function Dashboard() {


  const [url, setUrl] = useState('https://api.magicthegathering.io/v1/cards?contains=imageUrl')

  const dispatch = useDispatch();

  useEffect(() => {

    (async function () {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        console.log(url)

        dispatch({
          type: 'GET_CARDS',
          payLoad: data.cards,
        });
      } catch (error) {
        console.log(error)
      }
    })();
  }, [url])





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
        <Outlet>

        </Outlet>

        {/*  <SearchCards fetchData={setUrl} /> */}

        < CardGrid />
        <Header />
      </div>
    </>

  )
}

