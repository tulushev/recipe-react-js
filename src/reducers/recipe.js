import { createReducer } from 'redux-act';
import { setRecipies, setRecipe } from '../actions';

export const initialState = {
  recipies: [],
  recipe: {},
};

export default createReducer(
  {
    [setRecipies]: (state, payload) => ({
      ...state,
      recipies: payload,
    }),
    [setRecipe]: (state, payload) => ({
      ...state,
      recipe: payload,
    }),
  },
  initialState,
);
