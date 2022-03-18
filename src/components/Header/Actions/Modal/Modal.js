import { Component } from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';
class Backdrop extends Component {
    render() {
        return (
            <div
                className={styles.backdropTransparent}
                onClick={this.props.onBackdropClickHandler}
            ></div>
        );
    }
}

class BackdropGrey extends Component {
    render() {
        return <div className={styles.backdropGrey}></div>;
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
                    <div className={styles.modal}>
                        <Backdrop
                            backdropClasses={this.props.backdropClasses}
                            onBackdropClickHandler={
                                this.props.onBackdropClickHandler
                            }
                        />
                        {this.props.backdropGrey && <BackdropGrey />}
                        <ModalOverlay
                            overlayClasses={this.props.overlayClasses}
                        >
                            {this.props.children}
                        </ModalOverlay>
                    </div>,
                    this.portalElement
                )}
            </>
        );
    }
}

export default Modal;
