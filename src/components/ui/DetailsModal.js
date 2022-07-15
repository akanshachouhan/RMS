import React from 'react'
import ReactDom from 'react-dom';
import classes from './DetailsModal.module.css';


const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onClose} >
        </div>
    )    
}

const ModalOverlay = (props) => {
    return(
        <div>
            <div className={classes.modal}>{props.children}</div>
        </div>
    )
}

const PortalElement = document.getElementById('overlays');

const DetailsModal = (props) => {
    return (
        <>
             {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, PortalElement)}
             {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}   
        </>
    )
}

export default DetailsModal
