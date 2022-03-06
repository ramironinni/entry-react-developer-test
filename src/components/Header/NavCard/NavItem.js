import { Component } from 'react';
import styles from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

class NavItem extends Component {
    render() {
        return (
            <li className={styles.navItem}>
                {/* <NavLink
                    className={(isActive) =>
                        isActive
                            ? `${styles.active} ${styles.navLink}`
                            : styles.navLink
                    }
                    to={`/category/${this.props.category}`}
                >
                    {this.props.category}
                </NavLink> */}
                <NavLink
                    className={`${
                        this.props.category === 'women' ? styles.active : ''
                    } ${styles.navLink}`}
                    to={'#'}
                >
                    {this.props.category}
                </NavLink>
            </li>
        );
    }
}

export default NavItem;
