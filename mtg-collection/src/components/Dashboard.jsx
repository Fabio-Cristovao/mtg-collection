import React from 'react'
import Filters from './Filters'
import GridMyCards from './GridMyCards'
import GridDataFromApi from './CardGrid'
import Header from './Header'
import Footer from './Footer'
import CardGrid from './CardGrid'
import SearchCards from './SearchCards'

export default function Dashboard() {

  return (
    <div className='container'>
      <Header />
      <section className='main-content-container'>
        <SearchCards />
        {/*  <Filters />
        <CardGrid /> */}

      </section>

    </div>
  )
}