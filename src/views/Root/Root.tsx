import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// redux
import { useSelector } from 'react-redux';
import { getTheme, getToken } from 'store/selectors';

// routes
import Authorization from 'routes/Authorization';
import Gists from 'routes/Gists';

// styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { Container, TitleBar } from './style';

const Root: React.FunctionComponent = () => {
    const theme = useSelector(getTheme);
    const token = useSelector(getToken);
    const history = useHistory();

    useEffect(() => {
        if (!token) history.push('/login');
    }, []);

    return (
        <ThemeProvider theme={{ theme }}>
            <GlobalStyle />
            <TitleBar />
            <Container>
                <Authorization />
                <Gists />
            </Container>
        </ThemeProvider>
    );
};

export default Root;
