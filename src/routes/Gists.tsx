import React from 'react';

// router
import { Route, Switch } from 'react-router';

// components
import File from 'components/File';

// types
import { Routes } from 'types/routes';

const Gists: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route exact path={Routes.GIST} component={File} />
        </Switch>
    );
};

export default Gists;
