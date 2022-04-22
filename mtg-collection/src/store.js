import { reducer } from './reducer';
import { createStore } from 'redux';

const initialState = {
  cards: [],
  myCards: [],
}

export const store = createStore(reducer, initialState);






