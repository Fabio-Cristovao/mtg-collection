import React, { useReducer, useState } from 'react';
import { checkboxes } from '../checkboxes';

export default function SearchCards() {
  const [nameInput, setNameInput] = useState('');

  const searchName = (name) => {

    setNameInput(name);

    let url = `https://api.magicthegathering.io/v1/cards?name=${name}`;

    console.log(url)
  }

  const [checkedState, setCheckedState] = useState(
    new Array(checkboxes.length).fill(false)
  );


  const handleOnChange = (position) => {
    //console.log(checkedState)
    const updatedCheckedState = checkedState.map((isChecked, index) =>
      index === position ? !isChecked : isChecked
    );

    setCheckedState(updatedCheckedState);
    console.log(updatedCheckedState.value);
  }
  return (

    <section className='search-cards-section'>
      <h3 className='search-cards-title'>Search your cards here!</h3>
      <p className='search-cards-description'>You can search by name of a card, set, or color;</p>
      <form className='search-cards-form'>
        <section className='search-cards-input-section'>
          <label htmlFor="search-cards-input"
            className='search-cards-label'>
            Search by name :
          </label>
          <input
            className='search-cards-input'
            type="text" name='search-cards-input' placeholder="Ex: Chandra Nalaar"
            onChange={(e) => searchName(e.target.value)}
          />
        </section>
      </form>
      <form className='search-cards-checkbox'>
        <label htmlFor="search-cards-checkbox" className='search-cards-label'>
          Search by color:
        </label>
        <div className='search-cards-checkbox-container'>

          {
            checkboxes.map((checkbox, index) => {
              let { name, id, value, img } = checkbox
              return (
                <article
                  key={id}
                  className='search-color-element'>
                  <div className='checkbox-description'>
                    <label htmlFor="color">{name} </label>
                    <span>
                      <img src={`${img}`} alt={name} />
                    </span>
                  </div>
                  <input
                    checked={checkedState[index]}
                    type="checkbox"
                    id={id}
                    name='color'
                    value={value}
                    onChange={() => handleOnChange(index, value)}
                  />
                </article>
              )
            })


          }
        </div>
      </form>
    </section>
  )
}

