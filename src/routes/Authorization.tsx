import React from 'react';

// router
import { Route, Switch } from 'react-router';

// components
import Login from 'components/Login';
import Auth from 'components/Auth';

// types
import { Routes } from 'types/routes';

const Authorization: React.FunctionComponent = () => {
    return (
        <Switch>
            <Route exact path={Routes.APP_ROOT} component={Login} />
            <Route exact path={Routes.APP_AUTH} component={Auth} />
        </Switch>
    );
};

export default Authorization;
