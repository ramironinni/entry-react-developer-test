import { Component } from 'react';
import Actions from './Actions/Actions';
import Logo from './Logo';
import NavCard from './NavCard/NavCard';

class Header extends Component {
    render() {
        return (
            <header>
                <NavCard />
                <Logo />
                <Actions />
            </header>
        );
    }
}

export default Header;
