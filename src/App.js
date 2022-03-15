import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CartPage from './components/CartPage/CartPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import ProductPage from './components/ProductPage/ProductPage';

import styles from './App.module.css';
import { Redirect } from 'react-router-dom';

class App extends Component {
    componentDidMount = async () => {
        // const response = await client.query({
        //     query: GET_CURRENCIES,
        // });
        // console.log(response);
        // this.setState({
        //     products: response.data.currencies,
        // });
    };

    render() {
        return (
            <Router>
                <div className={styles.app}>
                    <div className={styles.mainContainer}>
                        <Header />
                        <Switch>
                            <Redirect exact from="/" to="/category/all" />
                            <Route exact path="/category/:name">
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
