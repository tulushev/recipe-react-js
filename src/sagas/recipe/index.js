import { fork } from 'redux-saga/effects';

import { fetchGetRecipiesFork, fetchGetRecipeFork } from './recipe';

export default function*() {
  yield fork(fetchGetRecipiesFork);
  yield fork(fetchGetRecipeFork);
}
