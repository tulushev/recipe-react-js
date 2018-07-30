import { fork } from 'redux-saga/effects';

import {
  fetchGetCategoriesFork,
  fetchGetCategoriesWithNestedFork,
  fetchGetArticleRecipeFork,
} from './category';

export default function*() {
  yield fork(fetchGetCategoriesFork);
  yield fork(fetchGetCategoriesWithNestedFork);
  yield fork(fetchGetArticleRecipeFork);
}
