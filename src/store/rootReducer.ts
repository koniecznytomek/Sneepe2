import { combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
