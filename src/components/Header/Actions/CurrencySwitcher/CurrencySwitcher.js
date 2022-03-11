import { Component } from 'react';
import { withApollo } from '@apollo/react-hoc';
import { connect } from 'react-redux';
import { currenciesActions } from '../../../../store/currencies-slice';

import { GET_CURRENCIES } from '../../../../GraphQl/queries';

import arrow from '../../../../assets/arrow.svg';
import styles from './CurrencySwitcher.module.css';
import CurrencyOverlay from './CurrencyOverlay/CurrencyOverlay';

class CurrencySwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, error: false };
        this.client = props.client;
    }

    storeCurrencies(currencies) {
        this.props.store(currencies);
    }

    switchCurrencyHandler(label) {
        this.props.change(label);
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

        this.setState({ loading: false, error: false });
        this.storeCurrencies(data.currencies);

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
                    <CurrencyOverlay
                        onBackdropClickHandler={
                            this.props.onToggleOverlayHandler
                        }
                        isLoading={this.state.loading}
                        currencies={this.props.currencies}
                        onSwitchCurrency={this.switchCurrencyHandler.bind(this)}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies.currencies,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        store: (currencies) =>
            dispatch(currenciesActions.store({ currencies })),
        change: (label) => dispatch(currenciesActions.change({ label })),
    };
};

export default withApollo(
    connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher)
);
