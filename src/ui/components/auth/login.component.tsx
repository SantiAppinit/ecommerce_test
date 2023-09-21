import React from 'react';
import { useAppStore } from '../../../logic/store';
import { AuthSchema } from '../../../logic/schemas/auth.schema';
import authApi from '../../../api/auth.api';
import { CommonSchema } from '../../../logic/schemas/common.schema';
import { Button, Container, Form } from 'react-bootstrap';

const LoginComponent = () => {

    const useSetUser = useAppStore((state: AuthSchema) => state.setUser);
    const useSetLoading = useAppStore((state: CommonSchema) => state.setLoading);

    const useLogin = async () => {
        useSetLoading(true);
        const result = await authApi.login("santi", "test");
        useSetUser({
            name: "Santi"
        })
        useSetLoading(false);
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Button variant="primary" onClick={useLogin} >Log in</Button>
                </Form.Group>
            </Form>
        </Container>

    )
}

export default LoginComponent;