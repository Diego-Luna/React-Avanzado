import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Logo } from './components/Logo';

import { GlobalStyle } from './styles/Globalstyles';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

import { Home } from './pages/Home';


function App() {
  const urlParams = new window.URLSearchParams(window.location.search);

  const detailId = urlParams.get('detail');

  return (
    <>
      <Logo />
      <GlobalStyle />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/pet/:id">
            <Home />
          </Route>
        </Router>
      )}
    </>
  );
}

export default App;
