import { reducer } from './reducer';
import { createStore } from 'redux';

const initialState = {
  cards: [],
}

export const store = createStore(reducer, initialState);






