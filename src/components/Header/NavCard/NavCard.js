import { Component } from 'react';
import { withApollo } from '@apollo/react-hoc';

import { GET_CATEGORIES } from '../../../GraphQl/queries';

import NavItem from './NavItem/NavItem';

import styles from './NavCard.module.css';

class NavCard extends Component {
    constructor(props) {
        super(props);
        this.state = { categories: [], loading: true, error: false };
    }

    async getCategories() {
        const { loading, error, data } = await this.props.client.query({
            query: GET_CATEGORIES,
        });

        if (loading) {
            this.setState({ loading: true, error: false });
        }

        if (error) {
            this.setState({ loading: false, error: error });
            console.log(error);
        }

        this.setState({
            categories: data.categories,
            loading: data.loading,
        });
    }

    componentDidMount() {
        this.getCategories();
    }

    render() {
        return (
            <nav>
                <ul className={styles.navCardList}>
                    {!this.state.loading &&
                        this.state.categories.map((category, i) => {
                            return <NavItem category={category.name} key={i} />;
                        })}
                </ul>
            </nav>
        );
    }
}

export default withApollo(NavCard);
