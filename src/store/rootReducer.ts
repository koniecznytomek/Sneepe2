import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice'
import collectionsReducer from './slices/collectionsSlice';
import gistsReducer from './slices/gistsSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    collectionsState: collectionsReducer,
    gistsState: gistsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
