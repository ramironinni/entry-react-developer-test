import { Component } from 'react';
import styles from './Page.module.css';

class Page extends Component {
    render() {
        return <main className={styles.page}>{this.props.children}</main>;
    }
}

export default Page;
