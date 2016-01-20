import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import FormPage from './containers/FormPage';
import ListPage from './containers/ListPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/list" component={ListPage}/>
    <Route path="/form" component={FormPage}/>
  </Route>
);
