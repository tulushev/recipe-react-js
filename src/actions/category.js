import { createAction } from 'redux-act'

export const getCategories = createAction('Get getCategories');
export const setCategories = createAction('Set getCategories');

export const getNestedCategories = createAction('Get Nested Categories');
export const setNestedCategories = createAction('Set Nested Categories');

export const getArticleRecipe = createAction('Get Article And Recipe');
export const setArticleRecipe = createAction('Set Article And Recipe');
