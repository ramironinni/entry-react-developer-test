import { Component } from 'react';
import styles from './ActionItem.module.css';

class ActionItem extends Component {
    render() {
        return (
            <div className={`${this.props.className} ${styles.actionItem}`}>
                {this.props.children}
            </div>
        );
    }
}

export default ActionItem;
