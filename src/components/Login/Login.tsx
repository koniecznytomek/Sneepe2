import React, { useEffect } from 'react';
import axios from 'axios';

// redux
import { useDispatch } from 'react-redux';
import { setToken } from 'store/slices/authSlice';

// styles
import { Container } from './style';

const Login: React.FunctionComponent = () => {
    const dispatch = useDispatch();

    const redirect = 'http://localhost:3000/auth';

    const client = `${process.env.REACT_APP_CLIENT_ID}`;
    const secret = `${process.env.REACT_APP_CLIENT_SECRET}`;

    const value = new URLSearchParams(window.location.search).get('code');

    useEffect(() => {
        if (value) {
            const getAccessToken = async () => {
                await axios.post('/login/oauth/access_token', {
                    client_id: client,
                    client_secret: secret,
                    code: value,
                }, {
                    headers: {
                        'Accept': 'application/json',
                    },
                }).then((resp: any) => {
                    if (resp.data.access_token) {
                        console.log(resp.data.access_token);
                        dispatch(setToken(resp.data.access_token));
                    }
                }).catch((e) => console.log(e));

            };
            getAccessToken();
        }
    }, []);

    return (
        <Container>
            <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client}&redirect_uri=${redirect}`}>github</a>
        </Container>
    );
};

export default Login;
