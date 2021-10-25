import React from 'react';

// redux
import { useSelector } from 'react-redux';
import { getToken, getTheme } from 'store/selectors';

// routes
import Authorization from 'routes/Authorization';

// styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { Container } from './style';

const Root: React.FunctionComponent = () => {
    const theme = useSelector(getTheme);
    const token = useSelector(getToken);

    return (
        <ThemeProvider theme={{ theme }}>
            <GlobalStyle />
            <Container>
                {token ? <div>app</div> : <Authorization />}
            </Container>
        </ThemeProvider>
    );
};

export default Root;
