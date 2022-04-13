import { Component } from 'react';
import parse from 'html-react-parser';

import styles from './Description.module.css';

class Description extends Component {
    render() {
        return (
            <div className={styles.description}>
                {parse(this.props.description)}
            </div>
        );
    }
}

export default Description;
