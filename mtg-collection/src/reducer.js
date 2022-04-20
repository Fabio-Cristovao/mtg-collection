export function reducer(state, action) {

  if (action.type === 'GET_CARDS') {
    return {
      cards: [...action.payLoad],
    }
  }

  return state;
}







