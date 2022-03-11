import { Component } from 'react';
import { withApollo } from '@apollo/react-hoc';

import { GET_CURRENCIES } from '../../../../GraphQl/queries';

import arrow from '../../../../assets/arrow.svg';
import styles from './CurrencySwitcher.module.css';
import Modal from '../ActionsModal/Modal';

class CurrencySwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = { currencies: [], loading: true, error: false };
        this.client = props.client;
    }

    async getCurrencies() {
        const { loading, error, data } = await this.client.query({
            query: GET_CURRENCIES,
        });

        if (loading) {
            this.setState({ loading: true, error: false });
        }

        if (error) {
            this.setState({ loading: false, error: error });
            console.log(error);
        }

        this.setState({
            currencies: data.currencies,
            loading: data.loading,
        });

        // console.log(error, loading, data);
    }

    componentDidMount() {
        this.getCurrencies();
    }

    render() {
        return (
            <>
                <div
                    className={styles.currencySwitcher}
                    onClick={this.props.onToggleOverlayHandler}
                >
                    <div className={styles.currencyCurrent}>&#36;</div>
                    <div>
                        <img src={arrow} alt="currency switcher" />
                    </div>
                </div>
                {this.props.showOverlay && (
                    <Modal
                        overlayClasses={styles.modalOverlay}
                        onBackdropClickHandler={
                            this.props.onToggleOverlayHandler
                        }
                    >
                        {!this.state.loading &&
                            this.state.currencies.map((currency, i) => {
                                return (
                                    <p className={styles.currencyItem} key={i}>
                                        {currency.symbol} {currency.label}
                                    </p>
                                );
                            })}
                    </Modal>
                )}
            </>
        );
    }
}

export default withApollo(CurrencySwitcher);
