import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import App from './App';

import './index.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache({
        typePolicies: {
            AttributeSet: { keyFields: false },
        },
    }),
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
