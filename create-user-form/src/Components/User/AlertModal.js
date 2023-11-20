import './AlertModal.css';

const AlertModal = (props) => {

    return (
        <div className="alert-modal centered">
            <p>{props.message}</p>
        </div>
    )
}

export default AlertModal;
