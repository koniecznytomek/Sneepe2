import React from 'react';

// styles
import { Container } from './style';

const Login: React.FunctionComponent = () => {
    const redirect = 'http://localhost:3000/auth';
    const client = `${process.env.REACT_APP_CLIENT_ID}`;
    // const secret = `${process.env.REACT_APP_CLIENT_SECRET}`;

    const value = new URLSearchParams(window.location.search).get('code');

    if (value) {
        console.log(value);

    }

    return (
        <Container>
            <div>Login</div>
            <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client}&redirect_uri=${redirect}`}>github</a>
        </Container>
    );
};

export default Login;
