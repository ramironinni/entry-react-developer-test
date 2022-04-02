import { withApollo } from '@apollo/react-hoc';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { GET_ITEM_BY_ID } from '../../GraphQl/queries';
import LoadingSpinner from '../../shared/Loading/LoadingSpinner';
import Page from '../../shared/Page/Page';

import ProductGallery from './ProductGallery/ProductGallery';
import ProductInfo from './ProductInfo/ProductInfo';

import styles from './ProductPage.module.css';

class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            isLoading: true,
            error: false,
        };
    }

    async getItemById() {
        this.setState({ isLoading: true });

        const { loading, error, data } = await this.props.client.query({
            query: GET_ITEM_BY_ID,
            variables: {
                id: this.props.match.params.id,
            },
        });

        if (loading) {
            this.setState({ isLoading: true, error: false });
        }

        if (error) {
            this.setState({ isLoading: false, error: error });
            console.log(error);
        }

        // if(!data.product) {
        //  this.setState( {error: "Invalid Id"})
        // }

        this.setState({
            product: data.product,
            isLoading: data.loading,
        });

        // console.log(error, loading, data);
    }

    componentDidMount() {
        this.getItemById();
    }

    render() {
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
            <Page pageClasses={styles.page}>
                {this.state.product && (
                    <>
                        <ProductGallery gallery={this.state.product.gallery} />
                        <ProductInfo product={this.state.product} />
                    </>
                )}
            </Page>
        );
    }
}

export default withApollo(withRouter(ProductPage));
