import React from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

// styles
import { Container } from './style';

const Auth: React.FunctionComponent = () => {
    const location = useLocation();
    console.log(location);
    console.log(queryString.parse(location.search));

    return (
        <Container>
            <div>code</div>
        </Container>
    );
};

export default Auth;
