import { fork } from 'redux-saga/effects';

import { fetchGetArticlesFork, fetchGetArticleFork } from './article';

export default function*() {
  yield fork(fetchGetArticlesFork);
  yield fork(fetchGetArticleFork);
}
