import { Component } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

class Backdrop extends Component {
    render() {
        return (
            <div
                className={`${styles.backdropTransparent} ${this.props.backdropClasses}`}
                onClick={this.props.onBackdropClickHandler}
            ></div>
        );
    }
}
class ModalOverlay extends Component {
    render() {
        return (
            <div
                className={`${styles.modalOverlay} ${this.props.overlayClasses}`}
            >
                <div className={styles.content}>{this.props.children}</div>
            </div>
        );
    }
}
class Modal extends Component {
    portalElement = document.getElementById('overlays');
    render() {
        return (
            <>
                {ReactDOM.createPortal(
                    <Backdrop
                        backdropClasses={this.props.backdropClasses}
                        onBackdropClickHandler={
                            this.props.onBackdropClickHandler
                        }
                    />,
                    this.portalElement
                )}
                {ReactDOM.createPortal(
                    <ModalOverlay overlayClasses={this.props.overlayClasses}>
                        {this.props.children}
                    </ModalOverlay>,
                    this.portalElement
                )}
            </>
        );
    }
}

export default Modal;
