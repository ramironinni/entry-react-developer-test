import { Component } from 'react';
import styles from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

class NavItem extends Component {
    render() {
        return (
            <li className={styles.navItem}>
                <NavLink to="#">{this.props.category}</NavLink>
            </li>
        );
    }
}

export default NavItem;
