export function reducer(state, action) {

  // definir action que vai ler o modelo de dados dos livros  
  if (action.type === 'READ_CARDS') {
    return {
      cards: [...action.payload],
    }
  }
  if (action.type === 'ADD_BOOK') {
    return {
      myCards: [...state.myCards, state.books.filter(b => b.id === action.id)],
    }
  }

  return state;
}















