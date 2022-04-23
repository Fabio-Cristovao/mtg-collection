export function reducer(state, action) {

  // definir action que vai ler o modelo de dados dos livros  
  if (action.type === 'READ_CARDS') {
    // console.log(cards)
    return {
      cards: [...action.payload],
    }
  }



  if (action.type === 'ADD_CARD_TO_MY_COLLECTION') {
    console.log(state.myCards)

    let newCard = action.newCard;
    newCard = state.cards.find(c => c.id === action.id);
    console.log(newCard);
    return {
      ...state.myCards,
      myCards: [...state.myCards.push(newCard)]
    }

  }
  return state;
}

















