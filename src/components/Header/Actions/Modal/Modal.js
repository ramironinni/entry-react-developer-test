import { Component } from 'react';
import ReactDOM from 'react-dom';
import BackdropTransparent from './BackdropTransparent/BackdropTransparent';
import BackdropGrey from './BackdropGrey/BackdropGrey';

import Overlay from './Overlay/Overlay';

const modalRoot = document.getElementById('modal-root');
class Modal extends Component {
    constructor(props) {
        super(props);
        this.element = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.element);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.element);
    }

    render() {
        return ReactDOM.createPortal(
            <>
                <div>
                    <BackdropTransparent
                        onBackdropClickHandler={
                            this.props.onBackdropClickHandler
                        }
                    />
                    {this.props.backdropGrey && <BackdropGrey />}
                    <Overlay overlayClasses={this.props.overlayClasses}>
                        {this.props.children}
                    </Overlay>
                </div>
            </>,
            this.element
        );
    }
}

export default Modal;
