import './AlertModal.css';
import '../../App.css';

const AlertModal = (props) => {



    return (
        <div className="main">
            <div className='alert-modal'>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default AlertModal;
