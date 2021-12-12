import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// components
import Auth from '../Auth';
import Folders from '../Folders';
import List from '../List';
import Content from '../Content';

// redux
import { useSelector } from 'react-redux';
import { getTheme, getToken } from 'store/selectors';

// styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { Container, Main } from './style';

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
            <Container>
                <div>
                   <Auth />
                </div>
                <Main>
                    <div><Folders /></div>
                    <div>
                        <List />
                    </div>
                    <div>
                        <Content />
                    </div>
                </Main>
            </Container>
        </ThemeProvider>
    );
};

export default Root;
