import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { postFeed } from "../../service/feeds";


interface IProps {
    modalIsOpen: boolean;
    closeModal: (isReload?: boolean) => void;
}

const CreateFeed = ({ modalIsOpen, closeModal }: IProps) => {

    const [content, setContent] = useState("");

    const handleCreate = async () => {
        try {
            await postFeed(content);
        } finally {
            closeModal(true);
        }
    }

    return (
        <Modal show={modalIsOpen} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <input type="text"
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Button variant="secondary" onClick={handleCreate}>
                        Close
                    </Button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal()}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => closeModal()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default CreateFeed;
