import { Component } from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop/Backdrop';
import BackdropGrey from './BackdropGrey/BackdropGrey';

import Overlay from './Overlay/Overlay';

class Modal extends Component {
    portalElement = document.getElementById('overlays');
    render() {
        return (
            <>
                {ReactDOM.createPortal(
                    <div>
                        <Backdrop
                            backdropClasses={this.props.backdropClasses}
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
