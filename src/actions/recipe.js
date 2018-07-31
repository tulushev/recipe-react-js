import { createAction } from 'redux-act'

export const getRecipies = createAction('Get getRecipies');
export const setRecipies = createAction('Set getRecipies');

export const getRecipe = createAction('Get getRecipe');
export const setRecipe = createAction('Set getRecipe');

export const fetchDeleteRecipe = createAction('Fetch Delete Recipe');
export const setDeleteRecipe = createAction('Set Delete Recipe');
