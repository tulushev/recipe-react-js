import { effects } from 'redux-saga';
import { get } from '../../utils/api';

import { getRecipies, setRecipies, getRecipe, setRecipe } from '../../actions';

/* eslint no-console: 0 */
function* fetchGetRecipies() {
  const result = yield effects.call(get, 'recipe/all');

  if (result) {
    yield effects.put(setRecipies(result));
  } else {
    console.log('Something wrong.');
  }
}

export function* fetchGetRecipiesFork() {
  yield effects.takeLatest(getRecipies, fetchGetRecipies);
}

function* fetchGetRecipe({ payload }) {
  const result = yield effects.call(get, `recipe/one/${payload}`);

  if (result) {
    yield effects.put(setRecipe(result));
  } else {
    console.log('Something wrong.');
  }
}

export function* fetchGetRecipeFork() {
  yield effects.takeLatest(getRecipe, fetchGetRecipe);
}