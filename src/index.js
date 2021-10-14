import React from 'react';
import ReactDOM from 'react-dom';

// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';

// uri: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql'
const client = new ApolloClient({
  uri: 'https://petgram-server-diego-luna-v2-pjzqjew1c-diego-luna.vercel.app/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
