import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

import Contex from './Context';

import App from './App';

// const client = new ApolloClient({
//   uri: 'https://petgram-server-diego-luna-v2-pjzqjew1c-diego-luna.vercel.app/graphql',
//   cache: new InMemoryCache(),
//   request: (operation) => {
//     const token = window.sessionStorage.getItem('token');
//     const authorization = token? `Bearer ${token}`: "";
//     operation.setContext({
//       headers: {
//         authorization
//       }
//     })
//   },
// });

const httpLink = createHttpLink({
  uri: 'https://petgram-server-diego-luna-v2-pjzqjew1c-diego-luna.vercel.app/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Contex.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Contex.Provider>,
  document.getElementById('app')
);
