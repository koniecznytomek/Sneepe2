import React from 'react';

// router
import { Route, Switch } from 'react-router';

// components
import Gist from 'components/Gist';

// types
import { Routes } from 'types/routes';

const Content = () => {
    return (
        <Switch>
            <Route exact path={Routes.GIST} component={Gist} />
        </Switch>
    );
};

export default Content;
