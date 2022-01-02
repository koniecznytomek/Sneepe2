import React from 'react';
import { Route, Switch } from 'react-router';

// components
import Gist from 'components/Gist';
import Gists from 'components/Gists';
import Collections from 'components/Collections';
import Login from 'components/Login'

// types
import { AppRoutes } from 'types/enumes';

type Keys = 'login' | 'list' | 'content';

type Props = {
    readonly route: string;
}

const Routes: React.FC<Props> = ({ route }: Props) => {
    const routes = {
        login: [
            { exact: false, path: AppRoutes.APP_LOGIN, component: Login },
        ],
        list: [
            { exact: false, path: AppRoutes.ALL_GISTS, component: Gists },
            { exact: false, path: AppRoutes.STARRED, component: Gists },
            { exact: false, path: AppRoutes.TRASH, component: Gists },
            { exact: false, path: AppRoutes.COLLECTIONS, component: Collections },
        ],
        content: [
            { exact: true, path: AppRoutes.GIST_ROOT, component: Gist },
            { exact: true, path: AppRoutes.GIST, component: Gist },
            { exact: true, path: AppRoutes.ADD_GIST, component: Gist },
            { exact: true, path: AppRoutes.COLLECTION, component: Gist },
            { exact: true, path: AppRoutes.ADD_FILE, component: Gist },
            { exact: true, path: AppRoutes.ADD_NOTE, component: Gist },
            { exact: true, path: AppRoutes.EDIT_NOTE, component: Gist },
            { exact: true, path: AppRoutes.EDIT_DESC, component: Gist },
        ],
    };

    return (
        <>
            <Switch>
                {routes[route as Keys].map((item) => (
                    <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
                ))}
            </Switch>
        </>
    );
};

export default Routes;
