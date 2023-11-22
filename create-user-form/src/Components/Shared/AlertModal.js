import React from 'react';
import AlertModalclasses from './AlertModal.module.css';
import classes from '../../App.module.css';
import Card from './Card';
import Button from './Button';

const AlertModal = (props) => {

    return (
        <div>
            <div className={AlertModalclasses.backdrop}></div>
            <Card className={classes.main}>
                <div className={AlertModalclasses['alert-modal']}>
                    <p>{props.message}</p>
                    <Button onClick={props.onConfirm}>Close</Button>
                </div>
            </Card>
        </div>
    )
}

export default AlertModal;
