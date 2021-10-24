import React from 'react';
import { ApolloProvider } from '@apollo/client';

// components
import Root from 'views/Root';

// hooks
import useApolloClient from 'hooks/useApolloClient';

// router
import { HashRouter } from 'react-router-dom';

const App: React.FunctionComponent = () => {

    const [client] = useApolloClient();

    return (
        <HashRouter>
            <ApolloProvider client={client}>
             <Root />
            </ApolloProvider>
        </HashRouter>
    );
};

export default App;
