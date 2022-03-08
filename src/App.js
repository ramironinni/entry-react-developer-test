import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql,
} from '@apollo/client';

import CartPage from './components/CartPage/CartPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import ProductPage from './components/ProductPage/ProductPage';

import styles from './App.module.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.props.client
            .query({
                query: gql`
                    query {
                        category {
                            products {
                                id
                                name
                                inStock
                                gallery
                                description
                                category
                                attributes {
                                    id
                                    name
                                    type
                                    items {
                                        displayValue
                                        value
                                        id
                                    }
                                }
                                prices {
                                    currency {
                                        label
                                        symbol
                                    }
                                    amount
                                }
                                brand
                            }
                        }
                    }
                `,
            })
            .then((result) => console.log(result));
    }

    render() {
        return (
            <Router>
                <div className={styles.app}>
                    <div className={styles.mainContainer}>
                        <Header />
                        <Switch>
                            <Route exact path="/">
                                <CategoryPage />
                            </Route>
                            <Route exact path="/product/:id">
                                <ProductPage />
                            </Route>
                            <Route exact path="/cart">
                                <CartPage />
                            </Route>
                            <Route path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
