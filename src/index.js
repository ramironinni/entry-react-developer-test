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
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App client={client} />
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')

    // <React.StrictMode>
    //     <Provider store={store}>
    //         <App />
    //     </Provider>
    // </React.StrictMode>,
    // document.getElementById('root')
);
