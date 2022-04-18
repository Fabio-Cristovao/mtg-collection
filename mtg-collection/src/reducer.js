import Cards from './constants';

const initialState = {
  cardsData: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Cards.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case Cards.LOAD_SUCCESS:
      return {
        ...state,
        cardsData: action.cardsData,
        isLoading: false,
      }

    default:
      return state;
  }
};

export default reducer;
