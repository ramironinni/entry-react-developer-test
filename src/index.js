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

export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

// client
//     .query({
//         query: gql`
//             query {
//                 category {
//                     products {
//                         id
//                         name
//                         inStock
//                         gallery
//                         description
//                         category
//                         attributes {
//                             id
//                             name
//                             type
//                             items {
//                                 displayValue
//                                 value
//                                 id
//                             }
//                         }
//                         prices {
//                             currency {
//                                 label
//                                 symbol
//                             }
//                             amount
//                         }
//                         brand
//                     }
//                 }
//             }
//         `,
//     })
//     .then((result) => console.log(result));

// client
//     .query({
//         query: gql`
//             query {
//                 category(input: { title: "clothes" }) {
//                     products {
//                         id
//                     }
//                 }
//             }
//         `,
//     })
//     .then((result) => console.log(result));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')

    //     <Provider store={store}>
    //         <App />
    //     </Provider>
    // document.getElementById('root')
);
