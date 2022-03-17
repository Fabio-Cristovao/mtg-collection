import React from 'react'
import Filters from './Filters'
import GridMyCards from './GridMyCards'
import GridDataFromApi from './GridDataFromApi'
import Header from './Header'
import Footer from './Footer'

export default function Dashboard() {

  return (
  <div className='container'>
    <Header />
    {/*  <div className='main-content'> */}
    <section className='filters-container'><Filters />
    </section>
    {/* <div className='cards-container'>
        <GridMyCards />
        <GridDataFromApi />
      </div> */}
    {/* </div> */}
    <Footer />
  </div>
  )
}