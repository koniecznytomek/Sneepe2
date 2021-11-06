import { createSelector } from '@reduxjs/toolkit';

// types
import { RootState } from 'store/rootReducer';
import { Collections, Gists } from '../../types';

export const getToken = createSelector((state: RootState): string => state.auth.token, token => token);
export const getTheme = createSelector((state: RootState): string => state.theme.mode, theme => theme);
export const getGists = (state: RootState): Gists[] => state.gistsState.gists;
export const getCollections = (state: RootState): Collections[] => state.collectionsState.collections;
