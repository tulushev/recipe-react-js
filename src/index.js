import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from './containers/App';
import Categories from './components/Category/Categories/Categories';
import CategoryNested from './components/Category/CategoryNested/CategoryNested';
import Recipe from './components/Recipe/Recipe';

import { store, persistor } from './store';

const FourOhFour = () => <h1>404 page not found</h1>;

ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/category" component={Categories} />
            <Route path="/category/:id" component={CategoryNested} />
            <Route path="/content/:id" component={Recipe} />
            <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </PersistGate>,
  document.getElementById('root'),
);
