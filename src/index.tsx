import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppState } from 'store';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { App } from './components';
import { AUTH_TOKEN, BACKEND_LINK, UNAUTHORIZED_ERROR_MESSAGE } from 'appConstants';
import reportWebVitals from './reportWebVitals';
import 'typography/normalize.css';
import 'typography/fonts.css';
import 'typography/common.css';
import './translation/resources';
import ErrorBoundary from 'components/ErrorBoundary';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: BACKEND_LINK,
});

const unauthorizedLink = onError(({ graphQLErrors }) => {
  const isUserUnauthorized = !!graphQLErrors?.find(
    ({ message }) => message === UNAUTHORIZED_ERROR_MESSAGE
  );

  if (isUserUnauthorized) {
    location.reload();
    sessionStorage.removeItem(AUTH_TOKEN);
  }
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: from([unauthorizedLink, authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      User: {
        fields: {
          teams: {
            merge(_, incoming) {
              return incoming;
            },
          },
          courses: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
      Team: {
        fields: {
          members: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
      Query: {
        fields: {
          teams: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  connectToDevTools: true,
});

ReactDOM.render(
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <Router>
        <AppState>
          <App />
        </AppState>
      </Router>
    </ApolloProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
