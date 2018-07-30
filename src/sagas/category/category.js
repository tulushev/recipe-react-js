import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from '../../utils/api';

import {
  getCategories,
  setCategories,
  getNestedCategories,
  setNestedCategories,
  getArticleRecipe,
  setArticleRecipe,
} from '../../actions';

/* eslint no-console: 0 */
function* fetchGetCategories() {
  const result = yield call(get, 'category/all');

  if (result) {
    yield put(setCategories(result));
  } else {
    console.log('Something wrong.');
  }
}

export function* fetchGetCategoriesFork() {
  yield takeLatest(getCategories, fetchGetCategories);
}

function* fetchGetCategoriesWithNested({ payload }) {
  const result = yield call(get, `category/one/${payload}`);

  if (result) {
    yield put(setNestedCategories(result));
  } else {
    console.log('Something wrong.');
  }
}

export function* fetchGetCategoriesWithNestedFork() {
  yield takeLatest(getNestedCategories, fetchGetCategoriesWithNested);
}

function* fetchGetArticleRecipe({ payload }) {
  const result = yield call(get, `category/list/${payload}/both`);

  if (result) {
    yield put(setArticleRecipe(result));
  } else {
    console.log('Something wrong.');
  }
}

export function* fetchGetArticleRecipeFork() {
  yield takeLatest(getArticleRecipe, fetchGetArticleRecipe);
}
