import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
            query {
                category {
                    products {
                        id
                    }
                }
            }
        `,
    })
    .then((result) => console.log(result));

ReactDOM.render(
    <React.StrictMode>
        {/* <ApolloProvider client={client}> */}
        <App />
        {/* </ApolloProvider> */}
    </React.StrictMode>,
    document.getElementById('root')
);
