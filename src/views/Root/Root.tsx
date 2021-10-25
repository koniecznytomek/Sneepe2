import React from 'react';
// redux
import { useSelector } from 'react-redux';
import { getToken } from 'store/selectors';

// routes
import Authorization from 'routes/Authorization';

// styles
import { Container } from './style';

const Root: React.FunctionComponent = () => {
    const token = useSelector(getToken);

    return (
        <Container>
            {token}
            {token ? <div>app</div> : <Authorization />}
        </Container>
    );
};

export default Root;
