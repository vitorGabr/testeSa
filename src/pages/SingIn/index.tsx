import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import { Container } from "./styles";

const SingIn = () => {

    const { singInUser } = useContext(AuthContext);
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        if (username === '' || password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos!',
            });
            return;
        }
        try {
            await singInUser({
                username,
                password
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: error as unknown as string,
                title: 'Error',
            });
        }
    }

    return (
        <Container>
            <h1>Login</h1>
            <Form className="col-md-4" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Enter email" onChange={(e) => setuserName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    )
}

export default SingIn;