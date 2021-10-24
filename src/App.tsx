import React from 'react';

// components
import Root from 'views/Root';
import Login from 'views/Login';

// redux
import { useSelector } from 'react-redux';
import { getToken } from 'store/selectors';


const App: React.FunctionComponent = () => {
    const token = useSelector(getToken);

    return (
        <>
            {token ? <Root /> : <Login />}
        </>
    );
};

export default App;
