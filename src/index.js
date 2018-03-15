import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
// router is top level object
// browserHistory resonssible for telling router how to keep track of current querySelector
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';
import requireAuth from './components/require_authentication';
// requireAuth -- pass component to this function, get wrapped component back

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={requireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
