import { Component } from 'react';

class ActionItem extends Component {
    render() {
        return (
            <div className={this.props.className}>{this.props.children}</div>
        );
    }
}

export default ActionItem;
