import { Component } from 'react';
import logo from '../../../assets/logo.svg';

class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="site logo" />
            </div>
        );
    }
}

export default Logo;
