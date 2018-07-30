import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/es/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';

import sagas from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const reducer = persistCombineReducers({ key: 'root', storage }, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
	reducer,
	{},
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

let persistor = persistStore(store);

sagaMiddleware.run(sagas);

// persistor.purge();

export { store, persistor };
