import React, { useContext } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Logo } from './components/Logo';

import { GlobalStyle } from './styles/Globalstyles';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NotFound } from './pages/NotFound';
import { NavBar } from './components/NavBar';

import { Context } from './Context';

function App() {
  const { isAuth } = useContext(Context);
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

        {!isAuth && <Route exact component={NotRegisteredUser} path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}

        <Route exact path="/favs" component={Favs} />
        <Route exact path="/user" component={User} />

        <Route component={NotFound} key="Error 404" />
      </Switch>

      <NavBar />
    </Router>
  );
}

export default App;
