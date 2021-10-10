import React from 'react';

import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotocars } from './components/ListOfPhotoCards';
import { GlobalStyle } from './Globalstyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotocars />
    </>
  );
}

export default App;
