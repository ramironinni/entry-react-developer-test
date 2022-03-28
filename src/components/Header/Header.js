import { Component } from 'react';

import Actions from './Actions/Actions';
import Logo from './Logo/Logo';
import NavCard from './NavCard/NavCard';

import styles from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <NavCard />
                <Logo />
                <Actions />
            </header>
        );
    }
}

export default Header;
