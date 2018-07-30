import { fork } from 'redux-saga/effects';

import category from './category';
import recipe from './recipe';
import article from './article';

function* root() {
  yield fork(category);
  yield fork(recipe);
  yield fork(article);
}

export default root;
