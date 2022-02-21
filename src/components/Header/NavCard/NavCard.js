import { Component } from 'react';
import NavItem from './NavItem';
import styles from './NavCard.module.css';

class NavCard extends Component {
    DUMMY_CATEGORIES = ['Women', 'Men', 'Kids'];

    render() {
        return (
            <nav>
                <ul className={styles.navCardList}>
                    {this.DUMMY_CATEGORIES.map((category, i) => {
                        return <NavItem category={category} key={i} />;
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavCard;
