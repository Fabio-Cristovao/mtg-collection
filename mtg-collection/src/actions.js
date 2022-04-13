import axios from "axios";
import {Cards} from './constants';

export const requestCards = (data) => async (dispatch) => {
  dispatch({
    type: Cards.LOAD,
  });
  try {
    const json = await axios.get('https://api.magicthegathering.io/v1/cards');
    console.log(json);
    dispatch({
      type: Cards.LOAD_SUCCESS,
      Cards: json.data,
      isError: false,
    });

  } catch (error) {
    dispatch({
      type: Cards.LOAD_SUCCESS,
      Cards: [],
      isError: true,
    });
  }
};