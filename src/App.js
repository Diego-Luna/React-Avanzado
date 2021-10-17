import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Logo } from './components/Logo';

import { GlobalStyle } from './styles/Globalstyles';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';

import { NavBar } from './components/NavBar';

const UserLogged = ({ children }) => children({ isAuth: false });

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

        <UserLogged>
          {({ isAuth }) =>
            isAuth ? (
              <>
                <Route exact path="/favs" component={Favs} />
                <Route exact path="/user" component={User} />
              </>
            ) : (
              <>
                <Route exact path="/favs" component={NotRegisteredUser} />
                <Route exact path="/user" component={NotRegisteredUser} />
              </>
            )
          }
        </UserLogged>
      </Switch>

      <NavBar />
    </Router>
  );
}

export default App;
