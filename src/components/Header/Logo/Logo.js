import { Component } from 'react';
import logo from '../../../assets/logo.svg';

import styles from './Logo.module.css';

class Logo extends Component {
    render() {
        return (
            <div className={styles.logo}>
                <img src={logo} alt="site logo" />
            </div>
        );
    }
}

export default Logo;
