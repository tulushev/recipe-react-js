import { createReducer } from 'redux-act';
import { setArticles, setArticle } from '../actions';

export const initialState = {
  articles: [],
  article: {},
};

export default createReducer(
  {
    [setArticles]: (state, payload) => ({
      ...state,
      articles: payload,
    }),
    [setArticle]: (state, payload) => ({
      ...state,
      article: payload
    }),
  },
  initialState,
);
