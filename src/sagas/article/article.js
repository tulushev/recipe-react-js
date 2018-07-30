import { effects } from 'redux-saga';
import { get } from '../../utils/api';

import { getArticles, setArticles, getArticle, setArticle } from '../../actions';

/* eslint no-console: 0 */
function* fetchGetArticles() {
  const result = yield effects.call(get, 'article/all');

  if (result) {
    yield effects.put(setArticles(result));
  } else {
    console.log('Something wrong.');
  }
}

export function* fetchGetArticlesFork() {
  yield effects.takeLatest(getArticles, fetchGetArticles);
}

function* fetchGetArticle({ payload }) {
  const result = yield effects.call(get, `article/one/${payload}`);

  if (result) {
    yield effects.put(setArticle(result));
  } else {
    console.log('Something wrong.');
  }
}

export function* fetchGetArticleFork() {
  yield effects.takeLatest(getArticle, fetchGetArticle);
}
