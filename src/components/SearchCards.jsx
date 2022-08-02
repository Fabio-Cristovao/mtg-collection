import React, { useReducer, useState } from 'react';
import { checkboxes } from '../checkboxes';

export default function SearchCards(props) {
  const [nameInput, setNameInput] = useState('');

  const searchName = (nameInput) => {

    setNameInput(nameInput);

  }

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

    //console.log(colors)
  }

  const onSubmit = (e) => {

    e.preventDefault();
    let searchColors = colors.colors.toString();

    if (nameInput !== '' && searchColors !== '') {
      props.fetchData(`https://api.magicthegathering.io/v1/cards?pageSize=30?name=${nameInput}?colors=${searchColors}`);
    } else if (nameInput === '' && searchColors !== '') {
      props.fetchData(`https://api.magicthegathering.io/v1/cards?pageSize=30?color=${searchColors}`);
    } else if (nameInput !== '' && searchColors === '') {
      props.fetchData(`https://api.magicthegathering.io/v1/cards?pageSize=30?name=${nameInput}`);
    } else {
      props.fetchData('https://api.magicthegathering.io/v1/cards?random?pageSize=30');
    }

  }



  // get the name and color input from the user





  /*  const [checkedState, setCheckedState] = useState(
     checkboxes
   )
 
   console.log(checkedState) */


  /* const handleOnChange = (position) => {
    //console.log(checkedState)
    const updatedCheckedState = checkedState.map((isChecked, index) =>

      index === position ? !isChecked : isChecked
    );

    setCheckedState(updatedCheckedState);

    console.log(updatedCheckedState);
  } */


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
            checkboxes.map((checkbox, key) => {
              let { name, value, img, isChecked } = checkbox
              return (
                <article
                  key={key}
                  className='search-color-element'>
                  <div className='checkbox-description'>
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
        <div className="submit-container">
          <input type="submit" value='Submit' onClick={onSubmit} />
        </div>
      </form>
    </section>
  )
}

