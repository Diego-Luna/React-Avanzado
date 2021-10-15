import React from 'react';

import { Logo } from './components/Logo';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCars } from './components/ListOfPhotoCards';
import { GlobalStyle } from './styles/Globalstyles';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

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
        <>
          <ListOfCategories />
          <ListOfPhotoCars categoryId={2} />
        </>
      )}
    </>
  );
}

export default App;
