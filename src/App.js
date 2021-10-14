import React from 'react';

import { Logo } from './components/Logo';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCars } from './components/ListOfPhotoCards';
import { GlobalStyle } from './styles/Globalstyles';

function App() {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCars categoryId={2} />
    </>
  );
}

export default App;
