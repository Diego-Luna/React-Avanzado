import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  from,
  HttpLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import Contex from './Context';

import App from './App';

// const httpLink = createHttpLink({
//   uri: 'https://petgram-server-diego-luna-v2-pjzqjew1c-diego-luna.vercel.app/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = window.sessionStorage.getItem('token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token');
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});
const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token');
    window.location = '/user';
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-diego-luna-v2-pjzqjew1c-diego-luna.vercel.app/graphql',
    }),
  ]),
});

ReactDOM.render(
  <Contex.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Contex.Provider>,
  document.getElementById('app')
);
