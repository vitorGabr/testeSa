import { Spinner } from "react-bootstrap";
import { Container } from "./styles";

const CustomLoading = () => {
    return (
        <Container>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p>Carregando...</p>
        </Container>
    )
}

export default CustomLoading;