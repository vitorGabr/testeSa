import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Form className="col-md-4" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <h1>LOGIN</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Username" onChange={(e) => setuserName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="Senha" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <p>
                    Ainda não possui uma conta? <Link to="/register">Cadastre-se</Link>
                </p>
                <p>
                    <Link to="/forgot-password">Esqueci minha senha</Link>
                </p>
                <Button variant="primary" type="submit">
                    ENTRAR
                </Button>
            </Form>
        </Container>
    )
}

export default SingIn;