import React from 'react';
import LoginComponent from '../../components/auth/login.component';
import RootPage from './root.page';

const LoginPage = () => {

    return <RootPage>
        <div className='flex-center'>
            <div className='item'>
                <div className='login-container'>
                    <LoginComponent />
                </div>
            </div>
        </div>
    </RootPage>
}

export default LoginPage;