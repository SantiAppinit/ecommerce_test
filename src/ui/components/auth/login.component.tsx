import React from 'react';
import { useAppStore } from '../../../logic/store';
import { AuthSchema } from '../../../logic/schemas/auth.schema';
import authApi from '../../../api/auth.api';
import { CommonSchema } from '../../../logic/schemas/common.schema';
import { Button, Card, Form } from 'react-bootstrap';

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
        <div className='login-content'>
            <Card>
                <Card.Body>
                    <div className='login-content-title'>
                        <h2>Log In</h2>
                    </div>
                    <div className='login-content-form'>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="name@example.com" />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className='login-content-actions'>
                        <Button className='btn-login' variant="primary" onClick={useLogin} >Submit</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}

export default LoginComponent;