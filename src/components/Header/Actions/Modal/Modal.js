import { Component } from 'react';
import ReactDOM from 'react-dom';
import BackdropTransparent from './BackdropTransparent/BackdropTransparent';
import BackdropGrey from './BackdropGrey/BackdropGrey';

import Overlay from './Overlay/Overlay';

class Modal extends Component {
    portalElement = document.getElementById('overlays');
    render() {
        return (
            <>
                {ReactDOM.createPortal(
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
                    </div>,
                    this.portalElement
                )}
            </>
        );
    }
}

export default Modal;
