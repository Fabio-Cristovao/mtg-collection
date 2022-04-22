export function reducer(state, action) {

  if (action.type === 'GET_CARDS') {
    return {

      ...state,
      cards: [...action.payLoad],

    }
  }

  if (action.type === 'ADD_CARD_TO_MY_COLLECTION') {

    const newCard = state.cards.filter(card => {
      if (card.id === action.id) {
        return {
          ...state,
          myCards: [...state.myCards, state.myCards.push(action.newCard)],
        }
      }

    })

    return state;

  }
}









