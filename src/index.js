import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Contex from './Context';

import App from './App';

const client = new ApolloClient({
  uri: 'https://petgram-server-diego-luna-v2-pjzqjew1c-diego-luna.vercel.app/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Contex.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Contex.Provider>,
  document.getElementById('app')
);
