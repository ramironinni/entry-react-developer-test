import { Component } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

class Backdrop extends Component {
    render() {
        return (
            <div
                className={`${styles.backdrop} ${this.props.backdropClasses}`}
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
                    <Backdrop backdropClasses={this.props.backdropClasses} />,
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
