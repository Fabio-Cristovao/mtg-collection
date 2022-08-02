import React, { useState } from 'react'
import { checkboxes } from '../checkboxes'
import CardGrid from './CardGrid';
import GridMyCards from './GridMyCards';

export default function MyCollection() {

  const [colors, setColors] = useState({
    colors: [],
  })

  const handleOnChange = (e) => {

    const isChecked = e.target.checked;

    if (isChecked) {
      setColors({
        colors: [...colors.colors, e.target.value]
      })

    } else {
      const index = colors.colors.indexOf(e.target.value);
      colors.colors.splice(index, 1);
      setColors({
        colors: colors.colors,
      })
    }
  }

  return (
    <div className='my-collection-main-content'>
      <h1 className='my-collection-title'>My collection cards</h1>

      <section className='filters-section'>
        <h3 className='filters-title'>Filters</h3>
        <div className='search-by-name-filter'>
          <h3 className='search-by-name-title'>Search by name :</h3>
          <input type="text" placeholder='search by name here...' />
        </div>
        <div className='search-by-color-filter'>
          <form className='search-cards-checkbox'>
            <h3 className='search-by-color-title'>Search by color :</h3>
            <div className='search-cards-checkbox-container'>
              {
                checkboxes.map((checkbox, key) => {
                  let { name, value, img } = checkbox
                  return (
                    <article className='checkbox-container' key={key}>
                      <div className='checkbox-label-container'>
                        <label htmlFor="color">{name} </label>
                        <span>
                          <img src={`${img} `} alt={name} />
                        </span>
                      </div>
                      <input
                        //checked={isChecked}
                        type="checkbox"
                        name='color'
                        value={value}
                        onChange={handleOnChange}
                      />
                    </article>
                  )
                })
              }
            </div>
          </form>
        </div>
        <div className="search-by-type-filter">
          <h3>Search by card type:</h3>
          <select name="" id="">
            <option value="">enchantment</option>
            <option value="">land</option>
            <option value="">creature</option>
            <option value="">instant</option>
            <option value="">sorcery</option>
          </select>
        </div>
      </section>
      <section className='my-cards-grid'>
        <GridMyCards />
      </section>
    </div >
  )
}
