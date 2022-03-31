import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withApollo } from '@apollo/react-hoc';
import { connect } from 'react-redux';

import { GET_ITEMS_BY_CATEGORY } from '../../GraphQl/queries';
import capitalizeString from '../../utils/capitalizeString';

import Page from '../Page';
import ProductCard from './ProductCard/ProductCard';

import styles from './CategoryPage.module.css';
import LoadingSpinner from '../../shared/Loading/LoadingSpinner';
class CategoryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: this.props.match.params.name,
            items: [],
            isLoading: true,
            error: false,
        };
        this.client = props.client;
    }

    async getItemsByCategory() {
        this.setState({ isLoading: true });

        const { loading, error, data } = await this.client.query({
            query: GET_ITEMS_BY_CATEGORY,
            variables: {
                title: this.props.match.params.name,
            },
        });

        if (loading) {
            this.setState({ isLoading: true, error: false });
        }

        if (error) {
            this.setState({ isLoading: false, error: error });
            console.log(error);
        }

        this.setState({
            items: data.category.products,
            isLoading: data.loading,
        });

        // console.log(error, loading, data);
    }

    componentDidMount() {
        this.getItemsByCategory();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.name === prevProps.match.params.name) {
            return;
        }
        this.setState({ categoryName: this.props.match.params.name });
        this.getItemsByCategory();
    }

    render() {
        const categoryName = capitalizeString(this.state.categoryName);
        const selectedCurrency = this.props.currencies.find(
            (currency) => currency.selected
        );

        if (this.state.isLoading) {
            return (
                <Page>
                    <LoadingSpinner />
                </Page>
            );
        }

        if (this.state.error) {
            return (
                <Page>
                    <p>{this.state.error}</p>
                </Page>
            );
        }

        return (
            <Page>
                <div className={styles.title}>{categoryName}</div>
                <div className={styles.productsContainer}>
                    {this.state.items.map((product, i) => {
                        const price = product.prices.find(
                            (price) =>
                                price.currency.label === selectedCurrency.label
                        );
                        return (
                            <ProductCard
                                key={i}
                                name={product.name}
                                id={product.id}
                                inStock={product.inStock}
                                image={product.gallery[0]}
                                priceSymbol={price.currency.symbol}
                                priceAmount={price.amount}
                            />
                        );
                    })}
                </div>
            </Page>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies.currencies,
    };
};

export default withApollo(withRouter(connect(mapStateToProps)(CategoryPage)));
