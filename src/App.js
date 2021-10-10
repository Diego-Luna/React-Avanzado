import React from 'react';

import { Logo } from './components/Logo';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotocars } from './components/ListOfPhotoCards';
import { GlobalStyle } from './styles/Globalstyles';

function App() {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotocars />
    </>
  );
}

export default App;
