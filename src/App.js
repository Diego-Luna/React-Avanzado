import React from 'react';

import { Logo } from './components/Logo';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCars } from './components/ListOfPhotoCards';
import { GlobalStyle } from './styles/Globalstyles';

function App() {
  const urlParams = new window.URLSearchParams(window.location.search);

  const detailId = urlParams.get('detail');

  console.log('detailId ', detailId);

  return (
    <>
      <Logo />
      <GlobalStyle />
      {detailId ? (
        <h1>Detail id</h1>
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCars categoryId={2} />
        </>
      )}
    </>
  );
}

export default App;
