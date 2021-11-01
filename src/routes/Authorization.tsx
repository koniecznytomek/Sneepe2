import React from 'react';

// router
import { Route, Switch } from 'react-router';

// components
import Login from 'components/Login';

// types
import { Routes } from 'types/routes';

const Authorization: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route exact path={Routes.APP_LOGIN} component={Login} />
        </Switch>
    );
};

export default Authorization;
