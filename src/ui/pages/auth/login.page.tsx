import React from 'react';
import LoginComponent from '../../components/auth/login.component';
import { useAppStore } from '../../../logic/store';
import { CommonSchema } from '../../../logic/schemas/common.schema';

const LoginPage = () => {

    const isLoading = useAppStore((state: CommonSchema) => state.loading);

    if(isLoading) {
        return <div>loading...</div>
    }

    return (
        <div><LoginComponent /></div>
    )
}

export default LoginPage;