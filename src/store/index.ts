import { configureStore, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import rootReducer, { RootState } from './rootReducer';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const index = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
        const newRootReducer = require('./rootReducer').default;
        index.replaceReducer(newRootReducer);
    });
}

export type AppDispatch = typeof index.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const persistor = persistStore(index)
export default index;
