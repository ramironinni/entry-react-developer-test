import { Component } from 'react';
import styles from './Modal.module.css';

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
    render() {
        return (
            <>
                <Backdrop
                    backdropClasses={this.props.backdropClasses}
                    onBackdropClickHandler={this.props.onBackdropClickHandler}
                />
                <ModalOverlay overlayClasses={this.props.overlayClasses}>
                    {this.props.children}
                </ModalOverlay>
            </>
        );
    }
}

export default Modal;
