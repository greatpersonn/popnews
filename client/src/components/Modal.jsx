import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalComponent = (props) => {

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Dialog >
                <Modal.Header>
                    <Modal.Title>{props.header}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{props.title}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.onHide}>Окей</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
}

export default ModalComponent;