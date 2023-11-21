import React from 'react';
import AlertModalclasses from './AlertModal.module.css';
import classes from '../../App.module.css';
import Card from '../Shared/Card';

const AlertModal = (props) => {

    return (
        <Card className={classes.main}>
            <div className={AlertModalclasses['alert-modal']}>
                <p>{props.message}</p>
            </div>
        </Card>
    )
}

export default AlertModal;
