import { fork } from 'redux-saga/effects';

import { fetchGetRecipiesFork, fetchGetRecipeFork, fetchToDeleteRecipeFork } from './recipe';

export default function*() {
  yield fork(fetchGetRecipiesFork);
  yield fork(fetchGetRecipeFork);
  yield fork(fetchToDeleteRecipeFork);
}
