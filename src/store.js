import { createStore } from 'redux'
import { reducer } from './reducer'

let initialState = {
  cards: [],
  myCards: [],
}

export const store = createStore(reducer, initialState);












