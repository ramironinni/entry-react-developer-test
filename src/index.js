import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';

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
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')

    // <React.StrictMode>
    //     {/* <ApolloProvider client={client}> */}
    //     <Provider store={store}>
    //         <App />
    //     </Provider>
    //     {/* </ApolloProvider> */}
    // </React.StrictMode>,
    // document.getElementById('root')
);
