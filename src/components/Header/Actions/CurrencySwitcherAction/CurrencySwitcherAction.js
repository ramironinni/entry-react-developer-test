import { Component } from 'react';
import { withApollo } from '@apollo/react-hoc';
import { connect } from 'react-redux';

import { currenciesActions } from '../../../../store/currencies-slice';

import { GET_CURRENCIES } from '../../../../GraphQl/queries';

import CurrencyOverlay from './CurrencyOverlay/CurrencyOverlay';
import CurrencySwitcherIcon from './CurrencySwitcherIcon/CurrencySwitcherIcon';

class CurrencySwitcherAction extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, error: false };
    }

    storeCurrencies(currencies) {
        this.props.store(currencies);
    }

    switchCurrencyHandler(label) {
        this.props.change(label);
        this.props.onToggleOverlayHandler();
    }

    async getCurrencies() {
        const { loading, error, data } = await this.props.client.query({
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
    }

    componentDidMount() {
        this.getCurrencies();
    }

    render() {
        return (
            <>
                <CurrencySwitcherIcon
                    onToggleOverlayHandler={this.props.onToggleOverlayHandler}
                    showOverlay={this.props.showOverlay}
                />
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
    connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcherAction)
);
