import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { forgotPassword } from "../../service/auth";
import { Container } from "./styles";

const ForgotPassword = () => {

    const [username, setuserName] = useState('');

    const handleSubmit = async () => {
        if (username === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos!',
            });
            return;
        }
        try {
            const result = await forgotPassword(username);
            if (result && result.username) {
                Swal.fire({
                    icon: 'success',
                    text: 'error as unknown as string',
                    title: 'Error',
                });
                return;
            }
            Swal.fire({
                icon: 'error',
                text: 'Usuário não encontrado!',
                title: 'Error',
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

                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
        </Container>
    )
}

export default ForgotPassword;