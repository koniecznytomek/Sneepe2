import React, { useEffect } from 'react';
import axios from 'axios';

// redux
import { useDispatch } from 'react-redux';
import { setToken } from 'store/slices/authSlice';

// styles
import { Container } from './style';
import useFetchAllGists from '../../api/useFetchAllGists';

interface Auth {
    access_token: string;
}

const Login: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const [setFetch] = useFetchAllGists();

    const redirect = 'http://localhost:3000/auth';

    const client = `${process.env.REACT_APP_CLIENT_ID}`;
    const secret = `${process.env.REACT_APP_CLIENT_SECRET}`;

    const value = new URLSearchParams(window.location.search).get('code');

    useEffect(() => {
        if (value) {
            const getAccessToken = async () => {
                await axios.post<Auth>('/login/oauth/access_token', {
                    client_id: client,
                    client_secret: secret,
                    code: value,
                }, {
                    headers: { 'Accept': 'application/json' },
                }).then((response) => {
                    if (response.data.access_token) {
                        dispatch(setToken(response.data.access_token));
                        setFetch(true);
                    }
                });

            };
            getAccessToken();
        }
    }, []);

    return (
        <Container>
            <a href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client}&redirect_uri=${redirect}&scope=gist`}>
                <button className='btn' type='button'>Sign In</button>
            </a>
        </Container>
    );
};

export default Login;
