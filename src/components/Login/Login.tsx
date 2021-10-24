import React, { useEffect } from 'react';
import axios from 'axios';

// styles
import { Container } from './style';

const Login: React.FunctionComponent = () => {
    const redirect = 'http://localhost:3000/auth';
    const client = `${process.env.REACT_APP_CLIENT_ID}`;
    const secret = `${process.env.REACT_APP_CLIENT_SECRET}`;

    const value = new URLSearchParams(window.location.search).get('code');

    useEffect(() => {
        if (value) {
            const a = async () => {
                await axios.post('/login/oauth/access_token', {
                    client_id: client,
                    client_secret: secret,
                    code: value,
                }, {
                    headers: {
                        'Accept': 'application/json',
                    },
                }).then((resp: any) => {
                    if (resp.data) {
                        console.log(resp.data.access_token);
                    }
                });

            };
            a();
        }

    });


    return (
        <Container>
            <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client}&redirect_uri=${redirect}`}>github</a>
        </Container>
    );
};

export default Login;
