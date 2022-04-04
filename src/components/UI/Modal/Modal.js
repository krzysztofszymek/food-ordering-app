import React from 'react';
import ReactDOM from 'react-dom'
import styles from './Modal.module.css'

function Backdrop() {
    return (
        <div className={styles.backdrop}/>
    );
}

function ModalOverlay(props) {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
}

const portalTo = document.getElementById('overlays');

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalTo)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalTo)}
        </React.Fragment>
    );
}

export default Modal;