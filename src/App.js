import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Logo } from './components/Logo';

import { GlobalStyle } from './styles/Globalstyles';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

import { NavBar } from './components/NavBar';

function App() {
  return (
    <Router>
      <Logo />
      <GlobalStyle />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pet/:id">
          <Home />
        </Route>
        <Route exact path="/detail/:detailId">
          <Detail />
        </Route>
      </Switch>

      <NavBar />
    </Router>
  );
}

export default App;
