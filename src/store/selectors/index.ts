import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

export const getToken = createSelector((state: RootState): string => state.auth.token, token => token);
