import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import CartPage from './components/CartPage/CartPage';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import ProductPage from './components/ProductPage/ProductPage';

// import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
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
            </Router>
        );
    }
}

export default App;
