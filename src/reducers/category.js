import { createReducer } from 'redux-act';
import {
  setCategories,
  setNestedCategories,
  setArticleRecipe,
} from '../actions';

export const initialState = {
  categories: [],
  categoriesNested: [],
  articleRecipeList: [],
  tree: [],
};

export default createReducer(
  {
    [setCategories]: (state, payload) => {
      const createTree = (list) => {
        let map = {},
          node,
          roots = [],
          i;
        for (i = 0; i < list.length; i += 1) {
          map[list[i]._id] = i;
          list[i].children = [];
        }
        for (i = 0; i < list.length; i += 1) {
          node = list[i];
          if (node.parentId) {
            list[map[node.parentId]].children.push(node);
          } else {
            roots.push(node);
          }
        }
        return roots;
      };

      return {
        ...state,
        tree: createTree(payload),
        categories: payload,
      };
    },
    [setNestedCategories]: (state, payload) => ({
      ...state,
      categoriesNested: payload,
    }),
    [setArticleRecipe]: (state, payload) => ({
      ...state,
      articleRecipeList: payload,
    }),
  },
  initialState,
);
