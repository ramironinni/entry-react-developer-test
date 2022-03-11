import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withApollo } from '@apollo/react-hoc';
import { GET_ITEMS_BY_CATEGORY } from '../../GraphQl/queries';

import Page from '../Page';
import styles from './CategoryPage.module.css';
import ProductCard from './ProductCard/ProductCard';
import capitalizeString from '../../utils/capitalizeString';

class CategoryPage extends Component {
    DUMMY_PRODUCTS = [
        { id: 1, name: 'something 1', stock: 5 },
        { id: 2, name: 'something 2', stock: 5 },
        { id: 3, name: 'something 3', stock: 0 },
        { id: 4, name: 'something 4', stock: 5 },
        { id: 5, name: 'something 5', stock: 5 },
        { id: 6, name: 'something 6', stock: 5 },
    ];

    constructor(props) {
        super(props);
        this.state = {
            categoryName: this.props.match.params.name,
            items: [],
            loading: true,
            error: false,
        };
        this.client = props.client;
    }

    async getItemsByCategory() {
        const { loading, error, data } = await this.client.query({
            query: GET_ITEMS_BY_CATEGORY,
            variables: {
                title: this.props.match.params.name,
            },
        });

        if (loading) {
            this.setState({ loading: true, error: false });
        }

        if (error) {
            this.setState({ loading: false, error: error });
            console.log(error);
        }

        this.setState({
            items: data.category.products,
            loading: data.loading,
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

        return (
            <Page>
                <div className={styles.title}>{categoryName}</div>
                <div className={styles.productsContainer}>
                    {this.state.items.map((product, i) => {
                        return (
                            <ProductCard
                                key={i}
                                name={product.name}
                                id={product.id}
                                stock={product.inStock}
                                priceSymbol={'$'}
                                priceAmount={'00.00'}
                            />
                        );
                    })}
                </div>
            </Page>
        );
    }
}

export default withApollo(withRouter(CategoryPage));
