import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import rootReducer, { RootState } from './rootReducer';

const index = configureStore({
    reducer: rootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
        const newRootReducer = rootReducer;
        index.replaceReducer(newRootReducer);
    });
}

export type AppDispatch = typeof index.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default index;
