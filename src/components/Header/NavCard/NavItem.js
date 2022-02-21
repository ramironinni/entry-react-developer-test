import { Component } from 'react';

class NavItem extends Component {
    render() {
        return <li>{this.props.category}</li>;
    }
}

export default NavItem;
