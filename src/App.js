import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import LoginRoutes from './router/LoginRoutes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {LoginRoutes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
