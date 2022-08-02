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
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Popup from './Popup'



export default function Dashboard() {

  const cards = useSelector(state => state.cards)



  const [url, setUrl] = useState('https://api.magicthegathering.io/v1/cards?contains=imageUrl&pageSize=40&random=true')

  const dispatch = useDispatch();

  useEffect(() => {

    (async function () {
      try {
        // console.log(url)
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        console.log(url)
        dispatch({
          type: 'READ_CARDS',
          payload: data.cards,
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
        <Navbar url={setUrl} />
      </div>
      <div className='container'>
        <Outlet>

        </Outlet>

        {/*  <SearchCards fetchData={setUrl} /> */}
        <Popup />
        < CardGrid />
        <Header />
      </div>
    </>

  )
}

