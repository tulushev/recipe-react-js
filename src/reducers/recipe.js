import { createReducer } from 'redux-act';
import { setRecipies, setRecipe, setDeleteRecipe } from '../actions';

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
    [setDeleteRecipe]: (state, payload) => (console.log(state.recipies),{
      ...state,
    }),
  },
  initialState,
);
