import React from 'react'

export default function GridMyCards() {
  return (
    <div className="all-cards-container">
      <h1 className='my-grid-title'>My cards</h1>
      <div className="grid-cards" id="my-cards-container">
        <article className="see-details-details" >
          <img src='https://picsum.photos/200/300' />
          <button className="del-btn">Remove card </button>
          <button className="edit-btn">Add a  note</button>
          <textarea id="textArea" className="show" >add a note here ...</textarea>
        </article>
        <article className="see-details-details" >
          <img src='https://picsum.photos/200/300' />
          <button className="del-btn">Remove card </button>
          <button className="edit-btn">Add a  note</button>
          <textarea id="textArea" className="show" >add a note here ...</textarea>
        </article>
        <article className="see-details-details" >
          <img src='https://picsum.photos/200/300' />
          <button className="del-btn">Remove card </button>
          <button className="edit-btn">Add a  note</button>
          <textarea id="textArea" className="show" >add a note here ...</textarea>
        </article>
        <article className="see-details-details" >
          <img src='https://picsum.photos/200/300' />
          <button className="del-btn">Remove card </button>
          <button className="edit-btn">Add a  note</button>
          <textarea id="textArea" className="show" >add a note here ...</textarea>
        </article>
        <article className="see-details-details" >
          <img src='https://picsum.photos/200/300' />
          <button className="del-btn">Remove card </button>
          <button className="edit-btn">Add a  note</button>
          <textarea id="textArea" className="show" >add a note here ...</textarea>
        </article>
        <article className="see-details-details" >
          <img src='https://picsum.photos/200/300' />
          <button className="del-btn">Remove card </button>
          <button className="edit-btn">Add a  note</button>
          <textarea id="textArea" className="show" >add a note here ...</textarea>
        </article>
      </div>
    </div>
  )
}

