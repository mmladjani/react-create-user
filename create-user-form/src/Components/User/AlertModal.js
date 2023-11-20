import React from 'react';
import './AlertModal.css';
import '../../App.css';
import Card from '../Shared/Card';

const AlertModal = (props) => {



    return (
        <Card className="main">
            <div className='alert-modal'>
                <p>{props.message}</p>
            </div>
        </Card>
    )
}

export default AlertModal;
