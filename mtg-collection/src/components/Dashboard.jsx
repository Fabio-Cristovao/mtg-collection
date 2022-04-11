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

export default function Dashboard() {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let color = '';
  let cardName = '';


  let url = `https://api.magicthegathering.io/v1/cards${color}${cardName}`

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data.cards);
        console.log(data.cards);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    console.log(setData)
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className='container'>
        <Header />
        <SearchCards />
        < CardGrid
          cards={data}
        />

      </div>
    </>

  )
}

