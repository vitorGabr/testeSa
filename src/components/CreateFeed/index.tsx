import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
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
                <Modal.Title>Criar Feed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <Form.Label htmlFor="inputPassword5">Conteúdo do Feed</Form.Label>
                    <Form.Control
                        aria-describedby="ContentBlock"
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <Form.Text id="ContentBlock" muted>
                        Você deve escrever algo para publicar.
                    </Form.Text>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => closeModal()}>
                    Fechar
                </Button>
                <Button
                    disabled={content.length === 0}
                    variant="primary"
                    onClick={() => handleCreate()}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default CreateFeed;
